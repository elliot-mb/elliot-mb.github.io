import React from 'react';

import "./inline.css"

export const Inline = ( props: {className: string, children: [JSX.Element, JSX.Element]}) => {
    return (
        <div className={`inline ${props.className}`}>
            {props.children[0]}
            {props.children[1]}
        </div>
    )
}