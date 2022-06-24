import React, { useEffect } from 'react';
import "./Projects.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import {LinkList, Test} from "../../components/List.js";
import {gitProjects, otherProjects} from "../../data/projects.js";

export function Projects() {

  useEffect(() => {
    document.title = "Projects | Elliot Buckingham";
  });

  return(
    <div className="content">
      <h2>Projects</h2>
      <nav>
        <h3>GitHub</h3>
        <LinkList root="/projects" lis={gitProjects} />
        <h3>Other</h3>
        <LinkList root="/projects" lis={otherProjects} />
      </nav>
    </div>
  )
}
