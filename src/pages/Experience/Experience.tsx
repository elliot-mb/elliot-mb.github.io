import React, { useEffect } from "react";
import CV from "../../assets/CV.pdf";
import "./experience.css";
//import Container from "../../components/Container/Container";

export const Experience = () => {

  useEffect(() => {
    document.title = "Experience | Elliot Buckingham";
  });

  return(
    <div className="content">
      <h1>Experience</h1>
      <p>My CV captures some of my important experience both in and outside of computer science.</p>
      <h2>My CV</h2>
      <p>Take a look at <a href={CV} target="_blank" rel="noreferrer">my CV</a>.</p>
    </div>
  )
}