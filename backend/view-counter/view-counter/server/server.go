package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"
)

type NamedCount struct {
	Count   int      `json:"count"`
	Setters []string `json:"setters"` //arrays of those who have already set this counter
}

func newNamedCount() *NamedCount {
	return &NamedCount{0, []string{}}
}

type Store struct {
	Mut     sync.Mutex
	Counts  map[string]NamedCount
	Path    string
	Persist *os.File
}

type RequestSet struct {
	Field  *string `json:"field"`
	Delta  *int    `json:"delta"`
	Setter *string `json:"setter"` //identifier for that which sets the count
}

//func ()

func enableCors(w *http.ResponseWriter) {
	header := (*w).Header()
	header.Add("Access-Control-Allow-Origin", "*")
	header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
	header.Add("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
}

func getTime() string {
	timestamp := fmt.Sprintf("%s", time.Now())
	clock := strings.Split(timestamp, ":")
	out := clock[0][len(clock[0])-2:] + ":" + clock[1] + ":" + clock[2][:2]
	return out
}

func getDay() string {
	timestamp := fmt.Sprintf("%s", time.Now())
	return strings.ReplaceAll(strings.Split(timestamp, " ")[0], "-", "/")
}

func isPreflight(w *http.ResponseWriter, req *http.Request) bool {
	if req.Method == "OPTIONS" {
		(*w).WriteHeader(http.StatusOK)
		return true
	}
	return false
}

func whereString(arr []string, str string) int { //returns -1 if str is not in arr
	for i, s := range arr {
		if s == str {
			return i
		}
	}
	return -1
}

func (s *Store) getCount(w http.ResponseWriter, req *http.Request) {
	s.Mut.Lock()
	defer s.Mut.Unlock()

	enableCors(&w)
	if isPreflight(&w, req) {
		return
	}

	field := req.URL.Query().Get("field") //such a nice language for this, so natural to write web services
	value := s.Counts[field].Count
	fmt.Printf("%s@%s %s = %d\n", getDay(), getTime(), field, value)

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, "{\"count\":%d}", value)
}

func (s *Store) setCount(w http.ResponseWriter, req *http.Request) {
	s.Mut.Lock()
	defer s.Mut.Unlock()
	defer req.Body.Close()

	enableCors(&w)
	if isPreflight(&w, req) {
		return
	}

	decoder := json.NewDecoder(req.Body)
	reqSet := RequestSet{}

	err := decoder.Decode(&reqSet)
	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		fmt.Println("Error decoding json:", err)
		fmt.Fprintf(w, "{\"error\":\"Error decoding json: %s\"}", err)
	} else {
		field := *reqSet.Field
		delta := *reqSet.Delta
		setter := *reqSet.Setter
		thisCount := s.Counts[field]

		if whereString(thisCount.Setters, setter) != -1 {
			fmt.Fprintf(w, "{\"error\":\"field (%s) already set by you (%s)\"}", field, setter)
			return
		}

		newNamedC := newNamedCount()

		fmt.Printf("%s@%s %s + %d by %s; {%d, %s} -> ", getDay(), getTime(), field, delta, setter, thisCount.Count, thisCount.Setters)
		newNamedC.Count = thisCount.Count + delta
		newNamedC.Setters = append(thisCount.Setters, setter)
		fmt.Printf("{%d, %s}\n", newNamedC.Count, newNamedC.Setters)

		s.Counts[field] = *newNamedC //write new count
		s.saveToPersist()

		fmt.Fprintf(w, "{\"count\":%d}", thisCount.Count)
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
	s := Store{Counts: make(map[string]NamedCount), Path: path, Persist: nil}
	s.getPersist()
	s.loadCounts()
	return &s
}

func makeServer(store *Store) *http.Server {

	http.HandleFunc("/api/view_count/get", store.getCount)
	http.HandleFunc("/api/view_count/set", store.setCount)

	return &http.Server{
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
		IdleTimeout:  120 * time.Second,
	}
}

func main() {
	port := flag.String("port", "8030", "port to listen on")
	isProduction := flag.Bool("production", false, "whether/not app is being started in production")
	flag.Parse()

	store := NewStore("./server/persist/counts.json")
	defer store.Persist.Close()

	http.HandleFunc("/api/view_count/get", store.getCount)
	http.HandleFunc("/api/view_count/set", store.setCount)

	if *isProduction {
		go func() {
			err := http.ListenAndServeTLS(":443", "/etc/letsencrypt/live/pi.elliotmb.dev/fullchain.pem", "/etc/letsencrypt/live/pi.elliotmb.dev/privkey.pem", nil)
			if err != nil {
				fmt.Println("Error http.ListenAndServeTLS: ", err)
			}
		}()
	}

	fmt.Println("Starting HTTP server on port " + *port)
	log.Fatal(http.ListenAndServe(":"+*port, nil))
}
