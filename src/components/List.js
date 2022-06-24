import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"; 


export function LinkList ({root, lis}) {
  let elements = [];
  lis.forEach((li, i) => {
    elements.push(
      <li key={i}>
      <Link to={`${root}/${li.name}`}>{li.name}</Link>
      </li>
    );
  });
  return(
    <ul>
      {elements}
    </ul>
  );
}

//export const Test = () => <p>test</p>