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
        thumb: "https://cdn.discordapp.com/attachments/1077003372600774686/1077003485435928686/Screenshot_from_2023-02-19_22-34-59.png?ex=67add268&is=67ac80e8&hm=3bec823bdc6c880ea9903b0fbf1e4a186bd7b2e303eff6a02529e78ae537986c&",
        tagline: "Introducing a Markdown-driven blogging page to my website",
        content: require("../assets/md/markdown_blog.md") ///oh my god require!
    },
    {
        name: "Whats the issue with a view counter?",
        date: [13, 12, 22],
        thumb: "https://cdn.discordapp.com/attachments/1077003372600774686/1077004385059606558/Screenshot_from_2023-02-19_23-10-41.png?ex=67add33f&is=67ac81bf&hm=126e2413b5e9913a8a3d7f43d883921b3c23a9cccbdb525de6cdc1b0f19de202&",
        tagline: "Hosting a view-counting server on my Raspberry pi",
        content: require("../assets/md/viewcount.md")
    },
    {
        name: "The Mechanical Binary Adding Machine",
        date: [18, 2, 23],
        thumb: "https://cdn.discordapp.com/attachments/1077003372600774686/1077577261215121478/image.png?ex=67ad45c7&is=67abf447&hm=a299dfdbdc9f5ee91702f7c242697d5cdfa97b20e98fe19f1f8d8ea4d0d10a9a&",
        tagline: "Desiging, building and testing my Mechanical Marble Adder-Subtractor for a brand-new society event!",
        content: require("../assets/md/arthack.md")
    },
    {
        name: "Some hobbies of mine",
        date: [4, 5, 23],
        thumb: "https://cdn.discordapp.com/attachments/1077003372600774686/1339197169424404480/image.png?ex=67add80e&is=67ac868e&hm=9aad710ed46b26d5eab36d8b97f9127238b1732e4e7ff67c46dd1ea3fee64926&",
        tagline: "About what gives me a creative break from Computer Science",
        content: require("../assets/md/hobbies.md") ///oh my god require!
    },
    {
        name: "Getting to grips with Ableton Live",
        date: [12, 2, 25],
        thumb: "https://cdn.discordapp.com/attachments/1077003372600774686/1339198385533751326/image.png?ex=67add930&is=67ac87b0&hm=a9cf1e4c8b8d4eb84178cacb5033d89ae42eb15a9244769c79fa4d3fe71bfd94&",
        tagline: "A great friend gave me a license key for Ableton Live 12 Lite, which although cut-back compared to the other versions, is still on a completely different level to any previous DAW I've used.",
        content: require("../assets/md/getting_to_grips_with_ableton_live.md")
    }
].reverse(); //order added newest to oldest