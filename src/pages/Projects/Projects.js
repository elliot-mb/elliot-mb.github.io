import React, { useEffect } from 'react';
import "./Projects.css"

import {LinkList} from "../../components/List/List.js";
import {gitProjects} from "../../data/projects.js";
import {otherProjects} from "../../data/projects.js";

export function Projects() {

  useEffect(() => {
    document.title = "Projects | Elliot Buckingham";
  });

  return(
    <div className="content">
      <h2>Projects</h2>
      <nav className="projects">
        <h3>GitHub</h3>
        <LinkList root="/projects" lis={gitProjects} />
        <h3>Other</h3>
        <LinkList root="/projects" lis={otherProjects} />
      </nav>
    </div>
  )
}
