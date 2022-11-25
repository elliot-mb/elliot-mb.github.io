// import Test from "../assets/md/test.md";

export type BlogPageData = {
    name: string,
    thumb: string, //data uri
    tagline: string,
    content: Request //filepath to a markdown file
}

export const pages: BlogPageData[] = [
    {
        name: "Markdown-driven blog",
        thumb: undefined,
        tagline: "Introducing a Markdown-driven blogging page to my website.",
        content: require("../assets/md/markdown_blog.md") ///oh my god require!
    },
    {
        name: "Test 2",
        thumb: undefined,
        tagline: "Cool test",
        content: require("../assets/md/test.md")
    }
];