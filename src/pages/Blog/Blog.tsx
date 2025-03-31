import React, {useEffect} from 'react';

import {BlogList} from "../../components/List/List";

//import {gitProjects} from "../../data/projects";
import {pages} from "../../data/blog_pages";

import {setPOJO} from "../../App";

import "./blog.css";

// a blog for project talk/general extracurricular talk perhaps not worth a project card
export const Blog = (props: { setPageInfo: setPOJO }) => {

    useEffect(() => {
        document.title = "Blog | Elliot Buckingham";
    }, []);
    
    return(<>
        <div className="content">
            <h1>Elliot's Blog</h1>
            <h2>What to expect</h2>
            <p>This is the obligatory blog page!</p>
            <BlogList className="blog" root={"/blog"} lis={pages}/> 
        </div>
    </>)
}