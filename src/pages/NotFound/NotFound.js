import React, { useEffect } from 'react';
import "./notfound.css"
import {
  Link
} from "react-router-dom";

export function NotFound() {

  useEffect(() => {
    document.title = "Page not found | Elliot Buckingham";
  });


  return (
    <div className="content">
      <h2>404</h2>
      <div className="desc">
        <p>That page can't be found.</p>
        <Link to="/">Go Home</Link> 
      </div>
      {/* this doesnt need a Routes element. 
      As we are already inside one
      it will update when we change the url*/}
    </div>
  )
}