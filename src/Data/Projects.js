import {
  twitterCloneWebImage,
  twitterCloneAppImage,
  twitterCloneServerImage,
  wordleImage,
  discoverifyImage,
  memoryGameImage,
  ticTacToeImage,
  portfolioImage,
  corkifyImage,
} from "./Images";
import {
  SiSocketdotio,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiSpotify,
  SiChakraui,
  SiReact,
  SiCss3,
  SiHtml5,
  SiReactrouter,
  SiStyledcomponents,
  SiExpo,
  SiPassport,
  SiFirebase,
  SiStripe,
} from "react-icons/si";
const projects = [
  {
    projectImg: twitterCloneAppImage,
    projectTitle: "Twitter Clone App",
    projectStack: [
      { name: "React Native", icon: <SiReact color="white" /> },
      { name: "Expo", icon: <SiExpo color="white" /> },
    ],
    projectDescription:
      "A twitter clone built in react native framework using mongodb database and cloudinary storage.",
    demoLink: "https://twitter.bahbi.net/",
    codeLink: "https://github.com/superbahbi/twitter-clone-app",
  },
  {
    projectImg: twitterCloneWebImage,
    projectTitle: "Twitter Clone Web",
    projectStack: [
      { name: "Reactjs", icon: <SiReact color="white" /> },
      { name: "CSS3", icon: <SiCss3 color="white" /> },
      { name: "HTML5", icon: <SiHtml5 color="white" /> },
      { name: "React Router", icon: <SiReactrouter color="white" /> },
      { name: "Socket.io", icon: <SiSocketdotio color="white" /> },
      { name: "Styled Components", icon: <SiStyledcomponents color="white" /> },
    ],
    projectDescription:
      "A twitter clone built in reactjs framework using mongodb database and cloudinary storage.",
    demoLink: "https://twitter.bahbi.net",
    codeLink: "https://github.com/superbahbi/twitter-clone-web",
  },
  {
    projectImg: twitterCloneServerImage,
    projectTitle: "Twitter Clone Server",
    projectStack: [
      { name: "Nodejs", icon: <SiNodedotjs color="white" /> },
      { name: "MongoDB", icon: <SiMongodb color="white" /> },
      { name: "Express", icon: <SiExpress color="white" /> },
      { name: "Socket.io", icon: <SiSocketdotio color="white" /> },
      { name: "Passport", icon: <SiPassport color="white" /> },
    ],
    projectDescription:
      "A backend service for twitter clone web and app, written in nodejs, expressjs, mongodb.",
    demoLink: "https://twitter-clone-server2.herokuapp.com/",
    codeLink: "https://github.com/superbahbi/twitter-clone-server",
  },
  {
    projectImg: wordleImage,
    projectTitle: "Wordle",
    projectStack: [
      { name: "Reactjs", icon: <SiReact color="white" /> },
      { name: "CSS3", icon: <SiCss3 color="white" /> },
      { name: "HTML5", icon: <SiHtml5 color="white" /> },
    ],
    projectDescription: "A worlde clone built in react framework",
    demoLink: "https://wordle.bahbi.net/",
    codeLink: "https://github.com/superbahbi/wordle",
  },
  {
    projectImg: memoryGameImage,
    projectTitle: "Memory Game",
    projectStack: [
      { name: "Reactjs", icon: <SiReact color="white" /> },
      { name: "CSS3", icon: <SiCss3 color="white" /> },
      { name: "HTML5", icon: <SiHtml5 color="white" /> },
    ],
    projectDescription: "A game built in reactjs. Match and win the game.",
    demoLink: "https://memory.bahbi.net/",
    codeLink: "https://github.com/superbahbi/barbarian-memory",
  },
  {
    projectImg: ticTacToeImage,
    projectTitle: "Tic Tac Toe Online",
    projectStack: [
      { name: "Reactjs", icon: <SiReact color="white" /> },
      { name: "CSS3", icon: <SiCss3 color="white" /> },
      { name: "HTML5", icon: <SiHtml5 color="white" /> },
      { name: "Socket.io", icon: <SiSocketdotio color="white" /> },
    ],
    projectDescription:
      "A tic tac toe game built in reactjs and socket.io. Play with your friends.",
    demoLink: "https://ttt-online.bahbi.net/",
    codeLink: "https://github.com/superbahbi/tictactoe-online",
  },
  {
    projectImg: discoverifyImage,
    projectTitle: "Discoverify",
    projectStack: [
      { name: "Reactjs", icon: <SiReact color="white" /> },
      { name: "CSS3", icon: <SiCss3 color="white" /> },
      { name: "HTML5", icon: <SiHtml5 color="white" /> },
      { name: "Spotify API", icon: <SiSpotify color="white" /> },
    ],
    projectDescription: "A spotify app built in react framework.",
    demoLink: "https://discoverify.bahbi.net/",
    codeLink: "https://github.com/superbahbi/discoverify",
  },
  {
    projectImg: corkifyImage,
    projectTitle: "Corkify",
    projectStack: [
      { name: "React Native", icon: <SiReact color="white" /> },
      { name: "Expo", icon: <SiExpo color="white" /> },
      { name: "Firebase", icon: <SiFirebase color="white" /> },
      { name: "Stripe", icon: <SiStripe color="white" /> },
    ],
    projectDescription:
      "A wine flash store built in react native framework using firebase auth, real time database, and storage.",
    demoLink: "https://github.com/superbahbi/corkify",
    codeLink: "https://expo.dev/@superbahbi/Corkify",
  },
  {
    projectImg: portfolioImage,
    projectTitle: "Portfolio",
    projectStack: [
      { name: "Reactjs", icon: <SiReact color="white" /> },
      { name: "CSS3", icon: <SiCss3 color="white" /> },
      { name: "HTML5", icon: <SiHtml5 color="white" /> },
      { name: "ChakraUI", icon: <SiChakraui color="white" /> },
      { name: "Animation", icon: <SiCss3 color="white" /> },
    ],
    projectSubTitle: "Reactjs, CSS3, HTML5, Chakra UI, Animation",
    projectDescription: "My personal portfolio built in react framework. ",
    demoLink: "https://bahbi.net/",
    codeLink: "https://github.com/superbahbi/portfolio",
  },
];

export default projects;
