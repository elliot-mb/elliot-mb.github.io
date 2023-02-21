// import Test from "../assets/md/test.md";

export type BlogPageData = {
    name: string,
    date: number[], 
    thumb: string, //discord-hosted image url
    tagline: string, 
    content: Request //filepath to a markdown file
}

export const pages: BlogPageData[] = [
    {
        name: "A Markdown-driven blog",
        date: [12, 11, 22],
        thumb: "https://cdn.discordapp.com/attachments/1077003372600774686/1077003485435928686/Screenshot_from_2023-02-19_22-34-59.png",
        tagline: "Introducing a Markdown-driven blogging page to my website.",
        content: require("../assets/md/markdown_blog.md") ///oh my god require!
    },
    {
        name: "Whats the issue with a view counter?",
        date: [13, 12, 22],
        thumb: "https://cdn.discordapp.com/attachments/1077003372600774686/1077004385059606558/Screenshot_from_2023-02-19_23-10-41.png",
        tagline: "Hosting a view-counting server on my Raspberry pi",
        content: require("../assets/md/viewcount.md")
    },
    {
        name: "My mechanical binary adding machine",
        date: [18, 2, 23],
        thumb: "https://cdn.discordapp.com/attachments/1077003372600774686/1077574597412663326/image.png",
        tagline: "Words on desiging, building and testing my Mechanical Marble Adder-Subtractor for a brand-new society event!",
        content: require("../assets/md/arthack.md")
    }
].reverse(); //order added newest to oldest