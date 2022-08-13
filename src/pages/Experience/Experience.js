import { React,  
         useEffect,
         useState } from "react";
import CV from "./files/CV.pdf";
import "./experience.css";

export function Experience(){

  useEffect(() => {
    document.title = "Experience | Elliot Buckingham";
  });

  return(
    <div className="content">
      <h2>Experience</h2>
      <div className="desc">
        <a href={CV} target="_blank" rel="noreferrer">CV</a>
      </div>
    </div>
  )
}