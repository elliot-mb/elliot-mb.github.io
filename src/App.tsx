import './App.css';
import React, {useState} from 'react';
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
import {Blog} from "./pages/Blog/Blog";
import {BlogPage} from "./pages/BlogPage/BlogPage";

import {Hero} from "./components/Hero/Hero";
import {Footer} from "./components/Footer/Footer";

import {Project} from "./data/projects";
import {BlogPageData} from "./data/blog_pages";

export type setPOJO = React.Dispatch<React.SetStateAction<{}>>;

function App() {

  //tells list subpages like gitproject and blogpage which page they are
  const [pageInfo, setPageInfo] = useState<{}>(undefined);

  return (
    <>
      <div className="body">    
        <Router>
          <div>
            <Hero />

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/projects" element={<Projects setPageInfo={setPageInfo}/>}/>
              <Route path="/projects/:projectClass/*" element={<GitProject pageInfo={pageInfo as Project}/>} />
              <Route path="/experience" element={<Experience/>} />
              <Route path="/blog" element={<Blog setPageInfo={setPageInfo}/>}/>
              <Route path="/blog/:blogClass/*" element={<BlogPage pageInfo={pageInfo as BlogPageData}/>}/>
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
