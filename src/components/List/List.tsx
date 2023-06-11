import React from "react";
import { LinkButton, IconButton } from "../Button/Button";
import "./link.css"; 
import GithubIcon from "../../assets/img/github.svg";
import LinkIcon from "../../assets/img/link.svg";

import {BlogPageData} from "../../data/blog_pages";

import {projectNameToPath} from "../../helpers/strings";

import {setPOJO} from "../../App";
import { ViewCount } from "../ViewCount/ViewCount";

type LinkType = {
  className: string
  setPageInfo: setPOJO,
  root: string,
  lis: any[]
}

type Paragraph = {
  xs: string[]
}

export function LinkList ({className, setPageInfo, root, lis}: LinkType) {
  let elements: JSX.Element[] = [];
  lis.forEach((li, i) => {
    elements.push(
      <li className={`link-list-li ${className}`} key={i}>
        <div>
          <h2 className={`header ${className}`}>{li.name}</h2>

          { li.thumb !== undefined 
          ? <div className="project-image" >
              <p className="image-text"><strong>{li.status}</strong></p>
              <img src={li.thumb} alt={li.name}/>
            </div> 
          : <></> 
          }

          {
            li.tagline !== undefined ? <p className={`tagline ${className}`}><em>{li.tagline}</em></p> :
            <></>
          }
        </div>
        <div className={`link-list-links ${className}`} >
          <LinkButton onClick={() => { setPageInfo(li); } } to={`${root}/${projectNameToPath(li.name)}`} alt={`Learn more about ${li.name}`} text="Learn more"/>
          {
            li.url !== null 
            ? <IconButton 
              icon={
                new URL(li.url).hostname === "github.com" ?
                GithubIcon : LinkIcon
              } 
              url={li.url} target={"_blank"} alt={`page of ${li.name}`} text={`${new URL(li.url).hostname === "github.com" 
                ? "GitHub " 
                : "Web" }page`}/> 
            : <></>
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

export const BlogList = (props: {className: string, root: string, lis: BlogPageData[]}) => {

  return(
    <ul className={`root ${props.className}`}>
      {props.lis.map((li, i) => {
        let date: string = li.date.reduce((x, y) => `${x}/${y < 10 ? `0${y}` : y}`, "").slice(1);

        return(
          <li className={`link-list-li ${props.className}`} key={i}>
            <div className={`blog-list inline`}>
              <h2 className={`header ${props.className}`}>{li.name}</h2>
              <span className={"viewcount blog-list"}>
                <ViewCount id={projectNameToPath(li.name)} />
              </span>
            </div>
            <span className="blog-list-date">{date}</span>
            <p></p>
            <div className="tagline-grid">
              <div className="blog-img-box">
                <img className={`img ${props.className}`} src={li.thumb} alt=""/>
              </div>
              <div>
                <p className={`tagline ${props.className}`}><em>{li.tagline}</em></p>
                <div className={`link-list-links ${props.className}`} >
                  <LinkButton className='bloglink' onClick={() => {}} to={`${props.root}/${projectNameToPath(li.name)}`} alt={`Learn more about ${li.name}`} text="Learn more"/>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

export function ParagraphList ({xs} : Paragraph) {
  let elements: JSX.Element[] = [];
  xs.forEach((x, i) => {
    let blocks: JSX.Element[] = [];
    x.split("<br>").forEach((block: string, j: number) => {
        blocks.push(<span key={j}>{block}</span>); 
        blocks.push(<br key={j + blocks.length + 1}/>); //adds newlines, avoids key collisions 
    })
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
