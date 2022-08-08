import React from "react";
import { LinkButton, IconButton } from "../Button/Button.js";
import {
  Link
} from "react-router-dom";
import "./link.css"; 
import GithubIcon from "../../pages/Home/images/github.svg";
import LinkIcon from "../../pages/Home/images/link.svg";

export function LinkList ({root, lis}) {
  let elements = [];
  lis.forEach((li, i) => {
    elements.push(
      <li className="link-list-li" key={i}>
        <div>
          <h3>{li.name}</h3>
          <img className="project-image" src={li.thumb} alt={li.name}/>
        </div>
        <div className="link-list-links" >
          <LinkButton to={`${root}/${li.name}`} alt={`Learn more about ${li.name}`} text="Learn more"/>
          {
            li.url !== undefined ? <IconButton 
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
    <ul>
      {elements}
    </ul>
  );
}

//export const Test = () => <p>test</p>