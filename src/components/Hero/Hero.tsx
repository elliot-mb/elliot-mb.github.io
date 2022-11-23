import React from "react";
import { Link } from "react-router-dom";

import { Burger } from "../Burger/Burger";

export const Hero = () => {

    const links: JSX.Element[] = [
    <Link to="/">Home</Link>,
    <Link to="/projects">Projects</Link>,
    <Link to="/experience">Experience</Link>,
    <Link to="/blog">Blog</Link>
    ];

    const keys: number[] = [1, 2, 3, 4]

    const linksKeyed: JSX.Element[] = 
        links.map((e, i) => {
            return <li className="nav-link" key={keys[i]}>
                {e}
            </li>
        })

    return(
        <div id="hero">
            <h1>
            <Link id="elliot-mb" to="/">ElliotMB</Link>
            </h1>
            <nav>
            <ul className="nav-bar">
                {linksKeyed.map(e => e)}
            </ul>
            </nav>
            <Burger children={links} />
        </div>
    )
}