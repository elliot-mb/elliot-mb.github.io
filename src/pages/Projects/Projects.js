import React, { useEffect } from 'react';
import "./Projects.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import {gitProjects} from "../../data/projects.js"

export function Projects() {

  function LinkList(root, lis) {
    let elements = [];
    lis.forEach((li, i) => {
      elements.push(
        <li key={i}>
        <Link to={`${root}/${li.name}`}>{li.name}</Link>
        </li>
      );
    });
  
    return elements;
  }

  useEffect(() => {
    document.title = "Projects | Elliot Buckingham";
  });

  return(
    <div className="content">
      <h2>Projects</h2>
      <nav>
        <h3>GitHub</h3>
        <ul>
          {LinkList("/projects", gitProjects)}
        </ul>
        <h3>Other</h3>
      </nav>
    </div>
  )
}
