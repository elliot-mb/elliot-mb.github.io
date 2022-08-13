import React from "react";
import CV from "./files/CV.pdf";
import "./experience.css";

export function Experience(){
  return(
    <div className="content">
      <h2>Experience</h2>
      <div className="desc">
        <a href={CV} target="_blank" rel="noreferrer">CV</a>
      </div>
    </div>
  )
}