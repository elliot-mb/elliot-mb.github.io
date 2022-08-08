import React from "react";
import {Link} from "react-router-dom"; 
import "./button.css";

export const Button = ({url, target, alt, text}) => 
  <a className={"button"} href={url} target={target} alt={alt}>{text}</a>
  //target: https://www.w3schools.com/tags/att_a_target.asp

export const LinkButton = ({to, alt, text}) => 
  <Link className={"link-button"} to={to} alt={alt}>{text}</Link>

export const IconButton = ({icon, url, target, alt, text}) => 
  <a className={"icon-button"} href={url} target={target} alt={alt}>
    <div>
      <img src={icon} alt={alt}/>
    </div>
    <div className="icon-button-text">
          <span>{`${text}`}</span>
    </div>
  </a>
