import React, {useEffect, useState} from 'react';
//import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import ReactMarkdown from 'react-markdown';
import { Navigate, useParams } from 'react-router-dom';

import {BlogPageData, pages} from '../../data/blog_pages';
import { projectNameToPath } from '../../helpers/strings';

import "./blogpage.css";

export const BlogPage = (props: { pageInfo: BlogPageData}) => {

    useEffect(() => {}, []);
    const { blogClass } = useParams();

    //console.log(props.pageInfo);

    const [content, setContent] = useState<string>(`Loading ${blogClass}...`);

    let pageID = -1;

    if(!pages.reduce((x, y) => { 
        if(!x) { pageID++; } 
        return (x || (projectNameToPath(y.name)) === blogClass);
    }, false)){
        return <Navigate to={"/not-found"}/>
    }

    const page = pages[pageID];

    fetch(page.content)
    .then(res => res.text())
    .then(txt => setContent(txt));

    //a back button and some markdown
    return(<>
        <div className="content">
            <h1>{page.name}</h1>
            <ReactMarkdown className="markdown-html">{content}</ReactMarkdown>
        </div>
    </>)
}