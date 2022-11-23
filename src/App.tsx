import './App.css';
import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Home} from "./pages/Home/Home"; 
import {Projects} from "./pages/Projects/Projects";
import {GitProject} from "./pages/GitProject/GitProject";
import {Experience} from "./pages/Experience/Experience";
import {NotFound} from "./pages/NotFound/NotFound";

import {Hero} from "./components/Hero/Hero";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="body">    
        <Router>
          <div>
            <Hero />

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/projects/:projectClass/*" element={<GitProject/>} />
              <Route path="/experience" element={<Experience/>} />
              <Route path="/not-found" element={<NotFound/>}/>
              <Route path={"*"} element={<NotFound/>}/>
            </Routes>
          </div>
        </Router>
      </div>
      <Footer/>
    </>
  )
}

export default App;
