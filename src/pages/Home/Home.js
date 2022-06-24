import React, { useEffect } from 'react';
import "./Home.css";
import { IconButton } from '../../components/Button.js';
import GithubIcon from "./images/github.svg";
import EmailIcon from "./images/email.svg";
import LinkedInIcon from "./images/linkedin.svg";

export function Home() {

  useEffect(() => {
    document.title = "Home | Elliot Buckingham";
  });

  return(
    <div className="content">
      <div id="header">
        <img id="selfie" src="https://avatars.githubusercontent.com/u/45922387?v=4"/>
        <h2 id="tagline">Elliot Buckingham - aspiring Developer</h2>
      </div>
      <div id="home">
        <div> {/*column 1*/}
          <p>Nice to meet you, I'm Elliot, a second-year BSc Computer Science Student at the University of Bristol. Aspiring FE/BE/full-stack developer who enjoys both the web and making software.</p>
        </div>
        <div className="contacts"> {/*column 2*/}
          <IconButton icon={GithubIcon} url="/" target="_blank" alt="Github" text="Github" />
          <IconButton icon={EmailIcon} url="/" target="_blank" alt="Email" text="Email" />
          <IconButton icon={LinkedInIcon} url="/" target="_blank" alt="LinkedIn" text="LinkedIn" />
        </div>
      </div>
 
    </div>
  )
}