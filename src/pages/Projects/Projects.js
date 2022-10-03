import React, { useEffect } from 'react';
import "./projects.css";
import Dropdown from 'react-bootstrap/Dropdown';
import {LinkList} from "../../components/List/List";
import {gitProjects, otherProjects} from "../../data/projects.ts";
import Container from "../../components/Container/Container";

export function Projects() {

  useEffect(() => {
    document.title = "Projects | Elliot Buckingham";
  });

  return(
    <div className="content">
      <h1>Projects</h1>
      <nav className="projects">
        <Container child={
          <>
            <h3>GitHub</h3>
            <LinkList root="/projects" lis={gitProjects} />
            <h3>Other</h3>
            <LinkList root="/projects" lis={otherProjects} />
          </>
        }/>
      </nav>
    </div>
  )
}
