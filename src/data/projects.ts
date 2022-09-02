import {images} from "../pages/Projects/images/images.ts";

type Status = "Work in progress" | "Complete" | "Ongoing" ;

type Project = {
  name: string,
  thumb: string,
  status: Status,
  url: string,
  tagline: string,
  content: string[]
};

export const gitProjects: Project[] = [
  {
    name:"Scotland Yard OOP Coursework",
    thumb:images.scy,
    status: "Complete",
    url:"https://github.com/elliot-mb/scotland-yard",
    tagline:"Developing and creating an AI for the Scotland Yard boardgame.",
    content:[]
  },
  {
    name:"Portfolio Website",
    thumb:images.ptf,
    status: "Work in progress",
    url:"https://github.com/elliot-mb/elliot-mb.github.io",
    tagline:"Website to introduce myself, as well as showcase my projects and achievements.",
    content:["Beginning with the example React website, I began creating a portfolio for myself online.<br>This is something I've meant to work on for a while, and I'm pleased I've finally gotten round to it.","This website uses React, a framework I began using in my second term of first year (early 2022), and have since really grown to like it. It's component system seemed restrictive in the beginning, but I came to realise those constraints force the developer to stick to good principals and code in an organised manor.",
    "I've been programming in JavaScript for a while, which made using React a little more natural.<br>Having recently familiarised myself with TypeScript, which I much prefer, I would definitely look to use it in combination with React for my next project."]
  },
  {
    name:"Playlist Converter",
    thumb:images.plc,
    status: "Work in progress",
    url:"https://github.com/elliot-mb/playlist-converter",
    tagline:"React and FastAPI webapp to copy playlists between services",
    content:[]
  },
  {
    name:"Playlist Puller",
    thumb:images.plp,
    status: "Complete",
    url:"https://github.com/elliot-mb/playlist-puller",
    tagline:"Copy playlists from Spotify over to Youtube via a Python script.",
    content:["This project integrates the Spotify, YouTube and Invidious APIs, and to use the YouTube API it is currently a Google Cloud app.","The goal of this project was, when I was having trouble using the Spotify web client, to save/backup playlists quickly and easily. This was to avoid dependance on Spotify and enables me to retrieve my music should I lose access to my account.",
    "It also allows me to use a YouTube frontend app to listen to my music on the go, without adverts. This is desirable for obvious reasons.","This project is for my use only, however I am working on a publicly and easily accessible webapp using React and FastAPI.<br>More on the new project in the Playlist Converter card, and on my GitHub."] 
  },
  {
    name:"Polynomial calculator",
    thumb:images.ply,
    status: "Complete",
    url:"https://github.com/elliot-mb/points-to-polynomial",
    tagline:"Generate the unique polynomial corresponding to a set of distinct points.",
    content:["This program generates the polynomial which crosses a given n distinct points.", "This program I made to test my Haskell skills, and create an algorithm I'd known about for a while and found very interesting.", "Contains Gaussian Elimination."]
  },
  {
    name:"RPN Logic Parser",
    thumb:images.rpn,
    status: "Complete",
    url:"https://github.com/elliot-mb/RPN-logic-parser",
    tagline:"Parses and computes logical expressions given in Reverse Polish notation.",
    content:["Originally posed to us as a challenge during term 1, year 1 of my course at Bristol, I got round to programming it later in the year, in Java.", "The program takes a logical expression with or without unknowns. If the expression has unknowns, a compact truth table is generated, else the boolean equivalence of the statement is printed.", "I took an object-oriented approach to this problem, creating a slew of operator/value objects governed by interfaces.<br>These were used to completely tokenise the input RPN string. This had advantages, including enabling the array of tokens/objects to be processed directly, calling token interface methods one by one without much external logic."]
  },
  {
    name:"LeetCode solutions",
    thumb:images.ltc,
    status: "Ongoing",
    url:"https://github.com/elliot-mb/leetcodes",
    tagline:"My attempts at LeetCode problems.",
    content:[]
  },
  {
    name:"Gaussian Elimination Java",
    thumb:images.gsl,
    status: "Complete",
    url:"https://github.com/elliot-mb/recursive-gaussian",
    tagline:"Solves valid Gaussian Elimination matrices.",
    content:[]
  },
  {
    name:"Raycaster, Spheretracing",
    thumb:images.rtc,
    status: "Complete",
    url:"https://github.com/elliot-mb/raycaster-doom",
    tagline:"Using circle-line and circle-circle intersection to draw a scene.",
    content:[]
  },
  {
    name:"Project Euler solutions",
    thumb:images.elr,
    status: "Complete",
    url:"https://github.com/elliot-mb/project-euler-solutions",
    tagline:"Programmatic solutions to select Project Euler problems.",
    content:["These were mainly written a long time ago, so may not be representitive of my current ability or practise."]
  }
];

export const otherProjects: Project[] = [
  {
    name:"Digital art",
    thumb: images.nul,
    status: "Ongoing",
    url:"",
    tagline:"",
    content: []
  },
  {
    name:"Bluetooth speaker",
    thumb: images.nul,
    status: "Complete",
    url:"",
    tagline:"DIY 60w Bluetooth amplifier.",
    content: []
  }
];