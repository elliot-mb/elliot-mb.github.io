import React from "react";

export const Button = ({url, target, alt, text}) => 
  <a className={"button"} href={url} target={target} alt={alt}>{text}</a>
  //target: https://www.w3schools.com/tags/att_a_target.asp


export const IconButton = ({icon, url, target, alt, text}) => 
  <a className={"icon-button"} href={url} target={target} alt={alt}>
    <div>
      <img src={icon} alt={alt}/>
    </div>
    <div className="icon-button-text">
          <span>{`${text}`}</span>
    </div>
  </a>
