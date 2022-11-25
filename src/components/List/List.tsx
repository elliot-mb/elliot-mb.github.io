import React from "react";
import { LinkButton, IconButton } from "../Button/Button";
import {
  Link
} from "react-router-dom";
import "./link.css"; 
import GithubIcon from "../../assets/img/github.svg";
import LinkIcon from "../../assets/img/link.svg";

import {projectNameToPath} from "../../helpers/strings";

import {setPOJO} from "../../App";

type Link = {
  className: string
  setPageInfo: setPOJO,
  root: string,
  lis: any[]
}

type Paragraph = {
  xs: string[]
}

export function LinkList ({className, setPageInfo, root, lis}: Link) {
  let elements: JSX.Element[] = [];
  lis.forEach((li, i) => {
    elements.push(
      <li className={`link-list-li ${className}`} key={i}>
        <div>
          <h2 className={`header ${className}`}>{li.name}</h2>

          { li.thumb !== undefined 
          ? <div className="project-image" >
              <p className="image-text">{li.status}</p>
              <img src={li.thumb} alt={li.name}/>
            </div> 
          : <></> 
          }

          {
            li.tagline !== undefined ? <p className={`tagline ${className}`}>{li.tagline}</p> :
            <></>
          }
        </div>
        <div className={`link-list-links ${className}`} >
          <LinkButton onClick={() => { setPageInfo(li); } } to={`${root}/${projectNameToPath(li.name)}`} alt={`Learn more about ${li.name}`} text="Learn more"/>
          {
            li.url !== undefined && li.url !== "" ? <IconButton 
            icon={
              new URL(li.url).hostname === "github.com" ?
              GithubIcon : LinkIcon
            } 
            url={li.url} target={"_blank"} alt={`page of ${li.name}`} text={`${new URL(li.url).hostname === "github.com" ? "GitHub " : "Web" }page`}/> : <></>
          }
        </div>
      </li>
    );
  });
  return(
    <ul className={`root ${className}`}>
      {elements}
    </ul>
  );
}

export function ParagraphList ({xs} : Paragraph) {
  let elements: JSX.Element[] = [];
  xs.forEach((x, i) => {
    let blocks: JSX.Element[] = [];
    {x.split("<br>").forEach((block: string, j: number) => {
        blocks.push(<span key={j}>{block}</span>); 
        blocks.push(<br key={j + blocks.length + 1}/>); //adds newlines, avoids key collisions 
    })}
    elements.push(<p key={i}>
      {blocks}
    </p>);
  });
  return (
    <>
      {elements}
    </>
  );
}
//export const Test = () => <p>test</p>