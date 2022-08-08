import ScotlandYard from "../pages/Projects/images/scotland.png";
import PlaylistPuller from "../pages/Projects/images/playlist.png";
import RPNParser from "../pages/Projects/images/rpn.jpg";
import LeetCode from "../pages/Projects/images/leetcode.png";
import Euler from "../pages/Projects/images/euler.png";
import GE from "../pages/Projects/images/matrix.png";
import Raytracing from "../pages/Projects/images/tracer.gif"
import Polynomial from "../pages/Projects/images/poly.png";
// import the rest of the thumbnails 

export const gitProjects = [
  {
    name:"Scotland Yard OOP Coursework",
    thumb: ScotlandYard,
    url:"https://github.com/elliot-mb/scotland-yard",
    tagline:"Developing and creating an AI for the Scotland Yard boardgame.",
    content:[]
  },
  {
    name:"Playlist Puller",
    thumb:PlaylistPuller,
    url:"https://github.com/elliot-mb/playlist-puller",
    tagline:"Integrating Spotify, Youtube and Invidious' APIs into a Python script to copy playlists from Spotify over to Youtube.",
    content:["The goal of this project was, when I was having trouble using the Spotify web client, to save/backup playlists quickly and easily. This was to avoid dependance on Spotify and enables me to retrieve my music should I lose access to my account.",
    "It also allows me to use a YouTube frontend app to listen to my music on the go, without adverts. This is desirable for obvious reasons."] //paragraphs of further detail 
  },
  {
    name:"Polynomial calculator",
    thumb:Polynomial,
    url:"https://github.com/elliot-mb/points-to-polynomial",
    tagline:"Generates simplest (order n-1) polynomial which crosses n points with distinct x positions.",
    content:["I developed this program to test my Haskell skills, and create an algorithm I'd known about for a while and found very interesting.", "Contains Gaussian Elimination."]
  },
  {
    name:"RPN Logic Parser",
    thumb:RPNParser,
    url:"https://github.com/elliot-mb/RPN-logic-parser",
    tagline:"Parses and computes a truth table for logical expressions given in Reverse Polish notation.",
    content:["Originally posed to us as a challenge during term 1, year 1 of my course at Bristol, I got round to programming it later in the year, in Java.", "The program takes a logical expression with or without unknowns. If the expression has unknowns, a compact truth table is generated, else the boolean equivalence of the statement is printed.", "I took an object-oriented approach to this problem, creating a slew of operator/value objects governed by interfaces.<br>These were used to completely tokenise the input RPN string. This had advantages, including enabling the array of tokens/objects to be processed directly, calling token interface methods one by one without much external logic."]
  },
  {
    name:"LeetCode solutions",
    thumb:LeetCode,
    url:"https://github.com/elliot-mb/leetcodes",
    tagline:"My attempts at LeetCode problems.",
    content:[]
  },
  {
    name:"Gaussian Elimination Java",
    thumb:GE,
    url:"https://github.com/elliot-mb/recursive-gaussian",
    tagline:"A recursive algorithm which computes unknowns from a valid Gaussian Elimination matrix.",
    content:[]
  },
  {
    name:"Raycaster, Spheretracing",
    thumb:Raytracing,
    url:"https://github.com/elliot-mb/raycaster-doom",
    tagline:"Using circle-line and circle-circle intersection to calculate rays.",
    content:[]
  },
  {
    name:"Project Euler solutions",
    thumb:Euler,
    url:"https://github.com/elliot-mb/project-euler-solutions",
    tagline:"Programmatic solutions to select Project Euler problems.",
    content:["These were mainly written a long time ago, so may not be representitive of my current ability or practise."]
  }
];

export const otherProjects = [
  {
    name:"Digital art",
    thumb: undefined,
    url:"https://google.com",

  }
];