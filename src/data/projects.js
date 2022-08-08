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
    content:[] //paragraphs of further detail 
  },
  {
    name:"Polynomial calculator",
    thumb:Polynomial,
    url:"https://github.com/elliot-mb/points-to-polynomial",
    tagline:"The simplest polynomial of order n-1 which crosses n points with distinct x positions.",
    content:["Contains Gaussian Elimination."]
  },
  {
    name:"RPN Logic Parser",
    thumb:RPNParser,
    url:"https://github.com/elliot-mb/RPN-logic-parser",
    tagline:"Parses and computes a truth table for logical expressions given in Reverse Polish notation.",
    content:[]
  },
  {
    name:"LeetCode solutions",
    thumb:LeetCode,
    url:"https://github.com/elliot-mb/leetcodes",
    tagline:"My attempts at LeetCode problems.",
    content:[]
  },
  {
    name:"Project Euler solutions",
    thumb:Euler,
    url:"https://github.com/elliot-mb/project-euler-solutions",
    tagline:"Programmatic solutions to select Project Euler problems.",
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
  }
];

export const otherProjects = [
  {
    name:"Digital art",
    thumb: undefined,
    url:"https://google.com",

  }
];