package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"sync"
)

type Store struct {
	Mut     sync.Mutex
	Counts  map[string]int
	Path    string
	Persist *os.File
}

type RequestSet struct {
	Field *string `json:"field"`
	Delta *int    `json:"delta"`
}

//func ()

func enableCors(w *http.ResponseWriter) {
	header := (*w).Header()
	header.Add("Access-Control-Allow-Origin", "*")
	header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
	header.Add("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
}

func (s *Store) getCount(w http.ResponseWriter, req *http.Request) {
	s.Mut.Lock()
	defer s.Mut.Unlock()

	enableCors(&w)
	if req.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	field := req.URL.Query().Get("field") //such a nice language for this, so natural to write web services
	value := s.Counts[field]
	fmt.Println(field, "=", value)

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, "{\"count\":%d}", value)
}

func (s *Store) setCount(w http.ResponseWriter, req *http.Request) {
	s.Mut.Lock()
	defer s.Mut.Unlock()
	defer req.Body.Close()

	enableCors(&w)
	if req.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	decoder := json.NewDecoder(req.Body)
	reqSet := RequestSet{}

	err := decoder.Decode(&reqSet)
	if err != nil {
		fmt.Println("Error decoding json:", err)
		fmt.Fprintf(w, "error")
	} else {
		field := *reqSet.Field
		d := *reqSet.Delta
		fmt.Printf("%s + %d; %d -> ", field, d, s.Counts[field])
		s.Counts[field] += d
		fmt.Printf("%d\n", s.Counts[field])
		s.saveToPersist()

		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, "{\"count\":%d}", s.Counts[field])
	}
}

func (s *Store) getPersist() {
	var err error
	s.Persist, err = os.OpenFile(s.Path, os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		fmt.Println("Error os.OpenFile:", err.Error())
	}
}

func (s *Store) saveToPersist() {
	jsonBytes, err := json.Marshal(&s.Counts)
	if err != nil {
		fmt.Println("Error Marshal on", s.Counts, ":", err.Error())
	}
	err = os.Truncate(s.Path, 0)
	if err != nil {
		fmt.Println("Error Truncate: " + err.Error())
	}
	_, err = s.Persist.Seek(0, 0)
	if err != nil {
		fmt.Println("Error Seek: " + err.Error())
	}
	_, err = fmt.Fprintf(s.Persist, "%s", jsonBytes)
	if err != nil {
		fmt.Println("Error Fprintf:", err.Error())
	}
}

func (s *Store) loadCounts() {
	jsonBytes, err := ioutil.ReadAll(s.Persist)

	fmt.Printf("%s data as string: '%s'\n", s.Path, jsonBytes)

	err = json.Unmarshal(jsonBytes, &s.Counts)
	if err != nil {
		fmt.Println("Error Unmarshal on", s.Path+": "+err.Error())
	}
	fmt.Println(s.Counts)
}

func NewStore(path string) *Store {
	s := Store{Counts: make(map[string]int), Path: path, Persist: nil}
	s.getPersist()
	s.loadCounts()
	return &s
}

func main() {
	portPtr := flag.String("port", "8030", "port to listen on")
	flag.Parse()

	s := NewStore("./server/persist/counts.json")
	defer s.Persist.Close()

	http.HandleFunc("/api/view_count/get", s.getCount)

	http.HandleFunc("/api/view_count/set", s.setCount)

	fmt.Println("Listening @ port " + *portPtr)
	log.Fatal(http.ListenAndServe(":"+*portPtr, nil))
}
