// import Test from "../assets/md/test.md";

import MarkdownImg from "../assets/img/md_blog.png";
import PiImg from "../assets/img/pi.png";
import MarbleMachineImg from "../assets/img/marble.png";
import CatBoyImg from "../assets/img/catboy.png";
import AbletonImg from "../assets/img/ableton.png";

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
        thumb: MarkdownImg,
        tagline: "Introducing a Markdown-driven blogging page to my website",
        content: require("../assets/md/markdown_blog.md") ///oh my god require!
    },
    {
        name: "Whats the issue with a view counter?",
        date: [13, 12, 22],
        thumb: PiImg,
        tagline: "Hosting a view-counting server on my Raspberry pi",
        content: require("../assets/md/viewcount.md")
    },
    {
        name: "The Mechanical Binary Adding Machine",
        date: [18, 2, 23],
        thumb: MarbleMachineImg,
        tagline: "Words on desiging, building and testing my Mechanical Marble Adder-Subtractor for a brand-new society event!",
        content: require("../assets/md/arthack.md")
    },
    {
        name: "Some hobbies of mine",
        date: [4, 5, 23],
        thumb: CatBoyImg,
        tagline: "I talk a little about what gives me a creative break from Computer Science",
        content: require("../assets/md/hobbies.md") ///oh my god require!
    },
    {
        name: "Getting to Grips with Ableton Live",
        date: [12, 2, 25],
        thumb: AbletonImg,
        tagline: "A great friend gave me a license key for Ableton Live 12 Lite, which although cut-back compared to the other versions, is still on a completely different level to any previous DAW I've used.",
        content: require("../assets/md/ableton.md")
    }
].reverse(); //order added newest to oldest