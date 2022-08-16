import React, { useEffect } from 'react';
import "./home.css";
import { IconButton } from '../../components/Button/Button.js';
import GithubIcon from "./images/github.svg";
import EmailIcon from "./images/email.svg";
import LinkedInIcon from "./images/linkedin.svg";

export function Home() {

  useEffect(() => {
    document.title = "Home | Elliot Buckingham";
  });

  return(
    <div className="content">
      <div id="home">
        <div>
          <div id="header">
            <img id="selfie" src="https://avatars.githubusercontent.com/u/45922387?v=4" alt="profile picture"/>
            <h2 id="tagline">Elliot Buckingham - aspiring Developer</h2>
          </div>
        </div>

        <div className="home-content"> 
          <h2>Hello! I'm Elliot</h2>
          <div className="desc">
            <p>I'm a second-year BSc Computer Science Student at the University of Bristol, who's currently on-track for a First Class.</p>
            <p>Aspiring software/web developer who's self-motivated and enjoys programming and solving problems. My hobbies apart from writing code include drawing, DIY/amateur electronics and cycling.</p>
            <p>Currently looking for an internship for summer 2023!</p>
          </div>
          <h3>Contact me</h3>
          <div className="contacts">
            <IconButton icon={GithubIcon} url="https://github.com/elliot-mb" target="_blank" rel="noreferrer" alt="Github" text="Github" />
            <IconButton icon={EmailIcon} url="mailto:elliot.m.buckingham@gmail.com" target="_blank" rel="noreferrer" alt="Email" text="Email" />
            <IconButton icon={LinkedInIcon} url="https://www.linkedin.com/in/elliotmb/" target="_blank" rel="noreferrer" alt="LinkedIn" text="LinkedIn" />
          </div>
        </div>
      </div>
 
    </div>
  )
}