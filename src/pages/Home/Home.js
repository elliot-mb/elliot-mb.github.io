import React, { useEffect } from 'react';
import "./Home.css"

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
        <div> {/*column 2*/}
          <p>Need to get in touch? Here are some useful links...</p>
        </div>
      </div>
 
    </div>
  )
}