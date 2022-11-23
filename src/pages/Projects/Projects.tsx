import React, { useEffect } from 'react';
import "./projects.css";
import {LinkList} from "../../components/List/List";
import {gitProjects, otherProjects} from "../../data/projects";
import { Link } from 'react-router-dom';
//import Container from "../../components/Container/Container";

export const Projects = () => {

  useEffect(() => {
    document.title = "Projects | Elliot Buckingham";
  });

  return(
    <div className="content">
      <h1>Projects</h1>
      <p>Mostly extracurricular projects, though these do include some projects related to my Computer Science BSc.<br/>
      There are also projects I've completed or begun outside of computer science posted on this page.
      </p>
      <p>If you're looking for more rambling detail on any projects, feel free to take a look at 
      my <Link to="/blog">blog</Link>.</p>
      <nav className="projects">
        <h2>GitHub</h2>
        <LinkList root="/projects" lis={gitProjects} />
        <h2>Other</h2>
        <LinkList root="/projects" lis={otherProjects} />
      </nav>
    </div>
  )
}
