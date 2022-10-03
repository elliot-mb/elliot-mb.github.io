import React from "react";
import "./container.css";

type Children = {
    child: JSX.Element
}
export default function Container( {child} : Children){
    return(
        <div className="container">
            {child}
        </div>
    )
}