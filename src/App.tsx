import './App.css';
import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {Home} from "./pages/Home/Home"; 
import {Projects} from "./pages/Projects/Projects";
import {GitProject} from "./pages/GitProject/GitProject";
import {Experience} from "./pages/Experience/Experience";
import {NotFound} from "./pages/NotFound/NotFound";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="body">    
        <Router>
          <div>
            <div id="hero">
              <h1>
                <Link id="elliot-mb" to="/">ElliotMB</Link>
              </h1>
              <nav>
                <ul className="nav-bar">
                  <li className="nav-link">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/experience">Experience</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>

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
