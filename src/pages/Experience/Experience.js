import React from "react";
import CV from "./files/CV.pdf";

export function Experience(){
  return(
    <div className="content">
      <h2>Experience</h2>
      <a href={CV} target="_blank" rel="noreferrer">CV</a>
    </div>
  )
}