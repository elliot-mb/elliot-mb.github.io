import React, { 
  useEffect,
  useState
 } from 'react';
import "./gitproject.css"
import {
  Navigate,
  useParams
} from "react-router-dom";

import {LinkButton} from "../../components/Button/Button";
import {ParagraphList} from "../../components/List/List";
import {GitResource} from "../../components/GitResource/GitResource";
import {Inline} from "../../components/Inline/Inline";

import {Project, gitProjects} from "../../data/projects";

import {projectNameToPath} from "../../helpers/strings"

export const GitProject = (props: { pageInfo: Project }) => {

  //state 
  const [readmeShown, setShown] = useState(false);

  useEffect(() => { //cant be called after the return as react hooks are tempermental
    document.title = `${projectClass} | Elliot Buckingham`;
  }, []);

  const { projectClass } = useParams();

  let projectID = -1;

  if(!gitProjects.reduce((x, y) => { 
    if(!x) { projectID++; } 
    return (x || (projectNameToPath(y.name)) === projectClass);
  }, false)){
    return <Navigate to={"/not-found"}/>
  }

  const project = gitProjects[projectID];
  //const response = gitResource(project.url);
  return(
    <div className="content">
      
      <Inline className="project-page-title" children={[<h1>{project.name}</h1>,<LinkButton onClick={() => {}} id="back-button" to="/projects" text="< Back" alt="Back button"/>]}/>

      <div id="git-project">
        <div className="git-project-info"> {/* column 1*/}
          <h3>{project.tagline}</h3>
          <ParagraphList xs={project.content}/>
        </div>
        <div className={`shown-${readmeShown}`} id="markdown-box">
          <button id="readme" onClick={() => setShown(!readmeShown)}>README.md</button>
          <GitResource url={project.url} display={readmeShown}/>
        </div>
      </div>
    </div> 
  )
}

