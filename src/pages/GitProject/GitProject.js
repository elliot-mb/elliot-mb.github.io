import React, { 
  useEffect,
  useState
 } from 'react';
import "./gitproject.css"
import {
  Navigate,
  Link
} from "react-router-dom";
import Container from "../../components/Container/Container";

import {LinkButton} from "../../components/Button/Button";
import {ParagraphList} from "../../components/List/List";
import {useParams} from "react-router-dom";
import {gitProjects} from "../../data/projects.ts";
import {GitResource} from "../../components/GitResource/GitResource";

export function GitProject() {

  //state 
  const [readmeShown, setShown] = useState(false);

  useEffect(() => { //cant be called after the return as react hooks are tempermental
    document.title = `${projectClass} | Elliot Buckingham`;
  });

  const { projectClass } = useParams();
  let projectID = -1;
  if(!gitProjects.reduce((x, y) => { 
    if(!x) { projectID++; } 
    return (x || y.name === projectClass);
  }, false)){
    return <Navigate to={"/not-found"}/>
  }
  const project = gitProjects[projectID];
  //const response = gitResource(project.url);
  return(
    <div className="content">
      <h1>{projectClass}</h1>
      <div id="git-project">
        <div className="git-project-info"> {/* column 1*/}
          <Container child={<>
            <h3>{project.tagline}</h3>
            <Container child={<ParagraphList xs={project.content}/>}/>
            <LinkButton className="back-button" to="/projects" text="< Back"/>
          </>}/>
        </div>
        <div className={`shown-${readmeShown}`} id="markdown-box">
          <button id="readme" onClick={() => setShown(!readmeShown)}>README.md</button>
          <GitResource url={project.url} display={readmeShown}/>
        </div>
      </div>
    </div> 
  )
}

