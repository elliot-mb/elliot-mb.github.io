// import Test from "../assets/md/test.md";

export type BlogPageData = {
    name: string,
    date: number[], 
    thumb: string, //data uri
    tagline: string,
    content: Request //filepath to a markdown file
}

export const pages: BlogPageData[] = [
    {
        name: "A Markdown-driven blog",
        date: [12, 11, 22],
        thumb: undefined,
        tagline: "Introducing a Markdown-driven blogging page to my website.",
        content: require("../assets/md/markdown_blog.md") ///oh my god require!
    },
    {
        name: "Whats the issue with a view counter?",
        date: [13, 12, 22],
        thumb: undefined,
        tagline: "One little Raspberry Pi model 1 rev B versus the world...",
        content: require("../assets/md/viewcount.md")
    }
].reverse();