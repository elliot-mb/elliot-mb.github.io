import React, { useState } from 'react';

import "./Burger.css";

export const Burger = (props: {children: JSX.Element[]}) => {

    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <nav className="burger">
            <button className="burger-button" onClick={toggle}>{open ? "x" : "≡"}</button>
            <ul className={`burger-menu ${open ? "show-menu" : "hide-menu"}`}>
                { 
                    props.children.map((e, i) => {
                        return <li onClick={toggle} className="burger-menu-nav-link" key={i}>
                            {e}
                        </li>;
                    })
                }
            </ul>
        </nav>
    )
}