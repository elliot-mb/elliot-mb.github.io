import React, {useEffect, useState} from 'react';
//import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import ReactMarkdown from 'react-markdown';
import { Navigate, useParams } from 'react-router-dom';

import {BlogPageData, pages} from '../../data/blog_pages';

import { projectNameToPath } from '../../helpers/strings';
import { incrementCount } from '../../helpers/requests';

import "./blogpage.css";
import { Inline } from '../../components/Inline/Inline';
import { LinkButton } from '../../components/Button/Button';

export const BlogPage = (props: { pageInfo: BlogPageData}) => {

    const { blogClass } = useParams();

    //console.log(props.pageInfo);

    const [content, setContent] = useState<string>(`Loading ${blogClass}...`);

    useEffect(() => {
        incrementCount<{count: number}>(blogClass)
        .then(({count}) => {
            //console.log(count)
        })
        .catch(err => {
            console.error(err)
            //already logged
        })
    }, [blogClass]);

    let pageID = -1;

    if(!pages.reduce((x, y) => { 
        //console.log(`${ blogClass}  ${projectNameToPath(y.name)}`)
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
            <Inline 
            className="blog-header" 
            children={[<h1 key={1}>{page.name}</h1>, <LinkButton key={2} onClick={() => {}} id="back-button" to="/blog" text="< Back" alt="Back button"/>]}/>
            <ReactMarkdown className="markdown-html">{content}</ReactMarkdown>
        </div>
    </>)
}