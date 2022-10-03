import React from "react";
import {Link} from "react-router-dom"; 
import "./button.css";

type Props = {
  url: string,
  target: string,
  alt: string,
  text: string
}

type LinkProps = {
  to: string,
  alt: string,
  text: string
}

type IconProps = { 
  icon: any,
  url: string,
  target: string,
  alt: string,
  text: string
}

export const Button = ({url, target, text}: Props) => 
  <a className={"button"} href={url} target={target}>{text}</a>
  //target: https://www.w3schools.com/tags/att_a_target.asp

export const LinkButton = ({to, text}: LinkProps) => 
  <Link className={"link-button"} to={to}>{text}</Link>

export const IconButton = ({icon, url, target, alt, text}: IconProps) => 
  <a className={"icon-button"} href={url} target={target}>
    <div>
      <img src={icon} alt={alt}/>
    </div>
    <div className="icon-button-text">
          <span>{`${text}`}</span>
    </div>
  </a>
