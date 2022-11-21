import React, { useEffect } from 'react';
import "./home.css";
import { IconButton } from '../../components/Button/Button';
import GithubIcon from "./images/github.svg";
import EmailIcon from "./images/email.svg";
import LinkedInIcon from "./images/linkedin.svg";
import { Intro } from "../../components/Intro/Intro";

export const Home = () => {

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
          <h1>Hello! I'm Elliot</h1>
          {Intro}

          <h3>Contact me</h3>
          <div className="contacts">
            <IconButton icon={GithubIcon} url="https://github.com/elliot-mb" target="_blank" alt="Github" text="Github" />
            <IconButton icon={EmailIcon} url="mailto:elliot.m.buckingham@gmail.com" target="_blank" alt="Email" text="Email" />
            <IconButton icon={LinkedInIcon} url="https://www.linkedin.com/in/elliotmb/" target="_blank" alt="LinkedIn" text="LinkedIn" />
          </div>
        </div>
      </div>
 
    </div>
  )
}