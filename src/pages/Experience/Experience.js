import { React,  
         useEffect,
         useState } from "react";
import CV from "./files/CV.pdf";
import "./experience.css";
import Container from "../../components/Container/Container";

export function Experience(){

  useEffect(() => {
    document.title = "Experience | Elliot Buckingham";
  });

  return(
    <div className="content">
      <h1>Experience</h1>
      <Container child={<a href={CV} target="_blank" rel="noreferrer">CV</a>}/>
    </div>
  )
}