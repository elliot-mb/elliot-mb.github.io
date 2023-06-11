import {images} from "./project_images";

type Status = "Work in progress" | "Complete" | "Ongoing" ;

export type Project = {
  name: string,
  thumb: string,
  status: Status,
  url: string | null,
  tagline: string,
  content: string[]
};

export const gitProjects: Project[] = [
  {
    name:'Game of Life Coursework',
    thumb: 'https://pi.elliotmb.dev/static/image/elliotmb_dev/gopher.png',
    status: 'Complete',
    url: null, //private,
    tagline: "Multi-threaded and Remote Procedure Call game of life in golang",
    content: ["This was the main coursework my partner Jade and I undertook for the first term of my second year. We were tasked with completing this coursework in three main stages:",
    " - A local concurrent/multithreaded/multiprocess/highly parallelised implementation of Conway's Game of Life <br> - An implementation which separated the interface from the parallel logic, across the network (using AWS) <br> - An implementation which paralellised the workload between multiple worker nodes, coordinated by a network broker",
    "This was my favourite coursework of the first two years of my studies, because it tested our algorithmic thinking and debugging; there is a lot to consider when debugging concurrent code. Additionally I enjoyed writing robust synchronisation strategies to coordinate such parallel processing. Furthermore my partner and I worked hard for this coursework, and came out with a high first-class as a result.",
    "The coursework contained a report, including things such as:",
    "- Performance metrics, explanations, and analysis across varying worker counts, cpu threads, function paradigms (memory sharing versus channel communcation) <br> - Explanations of our unique implementation of 'halo exchange' for networked parallelism"]
  },
  {
    name:"2-3-4 Tree Visualiser",
    thumb: images.tvs,
    status: "Work in progress",
    url: "https://github.com/elliot-mb/tree-vis",
    tagline: "Perform real-time modifications to a browser-based B-tree of order 4.",
    content: ["On the lead up to my exams I wanted to implement this datastructure, in order to better undstand it."]
  },
  {
    name:"Scotland Yard Coursework",
    thumb:images.scy,
    status: "Complete",
    url:null,
    tagline:"Developing and creating an AI for the Scotland Yard boardgame.",
    content:["My programming partner and I implemented, in Java, the mechanics of an undirected graph-based board game. Furthermore, we produced an 'exemplary' AI which was 'agonisingly close to near-unbeatable' (quote from marker).<br>It was able to statically evaluate projected states-of-play inside an alpha-beta pruning Minimax tree.<br>Static evaluation contained shortest path computation and standard-deviation distances evaluation.",
    "Design patterns used in the project include Visitor, Model-View-Controller, Abstract/Factory and Observer.<br>We utilised test-driven development with JUnit to create assertion-based test cases."]
  },
  {
    name:"Portfolio website",
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
    name:"Custom Audio Visualiser",
    thumb:images.vis,
    status:"Complete",
    url:"https://github.com/elliot-mb/custom-visualiser",
    tagline:"Set parameters for an audio-visualiser and upload music to see it react, live. Uses p5.js.",
    content:["Through use and understanding of p5's FFT function, I was able to create a user interface and visualiser to react to all my music.",
    "It makes listening more fun."]
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
    name:"LeetCode solutions",
    thumb:images.ltc,
    status: "Ongoing",
    url:"https://github.com/elliot-mb/leetcodes",
    tagline:"My attempts at LeetCode problems.",
    content:[]
  },
  {
    name:"Project Euler solutions",
    thumb:images.elr,
    status: "Ongoing",
    url:"https://github.com/elliot-mb/project-euler-solutions",
    tagline:"Programmatic solutions to select Project Euler problems.",
    content:["These were mainly written a long time ago, so may not be representitive of my current ability or practise."]
  }
];

export const otherProjects: Project[] = [
  // { these can be blog pages
  //   name:"BEEES Robot Wars",
  //   thumb: images.nul,
  //   status: "Ongoing",
  //   url:"",
  //   tagline:"",
  //   content: []
  // },
  // {
  //   name:"Digital art",
  //   thumb: images.nul,
  //   status: "Ongoing",
  //   url:"",
  //   tagline:"",
  //   content: []
  // },
  {
    name:"Bluetooth speaker",
    thumb: images.nul,
    status: "Complete",
    url: null,
    tagline:"DIY 60w Bluetooth amplifier.",
    content: []
  }
];