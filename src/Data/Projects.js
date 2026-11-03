import {
  corkifyImage,
  discoverifyImage,
  memoryGameImage,
  portfolioImage,
  ticTacToeImage,
  twitterCloneAppImage,
  twitterCloneServerImage,
  twitterCloneWebImage,
  wordleImage,
} from "./Images";

const projects = [
  {
    id: 0,
    image: twitterCloneAppImage,
    title: "Twitter Clone App",
    stack: ["reactNative", "expo"],
    description:
      "A twitter clone built in react native framework using mongodb database and cloudinary storage.",
    demoUrl: "https://twitter.bahbi.net/",
    codeUrl: "https://github.com/superbahbi/twitter-clone-app",
  },
  {
    id: 1,
    image: twitterCloneWebImage,
    title: "Twitter Clone Web",
    stack: [
      "react",
      "typescript",
      "html",
      "css",
      "reactRouter",
      "socketio",
      "styledComponents",
    ],
    description:
      "A twitter clone built in reactjs framework using mongodb database and cloudinary storage.",
    demoUrl: "https://twitter.bahbi.net",
    codeUrl: "https://github.com/superbahbi/twitter-clone-web",
  },
  {
    id: 2,
    image: twitterCloneServerImage,
    title: "Twitter Clone Server",
    stack: ["node", "mongodb", "express", "socketio", "passport"],
    description:
      "A backend service for twitter clone web and app, written in nodejs, expressjs, mongodb.",
    demoUrl: "https://twitter-clone-server2.herokuapp.com/",
    codeUrl: "https://github.com/superbahbi/twitter-clone-server",
  },
  {
    id: 3,
    image: wordleImage,
    title: "Wordle",
    stack: ["react", "css", "html"],
    description: "A worlde clone built in react framework",
    demoUrl: "https://wordle.bahbi.net/",
    codeUrl: "https://github.com/superbahbi/wordle",
  },
  {
    id: 4,
    image: memoryGameImage,
    title: "Memory Game",
    stack: ["react", "css", "html"],
    description: "A game built in reactjs. Match and win the game.",
    demoUrl: "https://memory.bahbi.net/",
    codeUrl: "https://github.com/superbahbi/barbarian-memory",
  },
  {
    id: 5,
    image: ticTacToeImage,
    title: "Tic Tac Toe Online",
    stack: ["react", "css", "html", "socketio"],
    description:
      "A tic tac toe game built in reactjs and socket.io. Play with your friends.",
    demoUrl: "https://ttt-online.bahbi.net/",
    codeUrl: "https://github.com/superbahbi/tictactoe-online",
  },
  {
    id: 6,
    image: discoverifyImage,
    title: "Discoverify",
    stack: ["react", "css", "html", "spotify"],
    description: "A spotify app built in react framework.",
    demoUrl: "https://discoverify.bahbi.net/",
    codeUrl: "https://github.com/superbahbi/discoverify",
  },
  {
    id: 7,
    image: corkifyImage,
    title: "Corkify",
    stack: ["reactNative", "expo", "firebase", "stripe"],
    description:
      "A wine flash store built in react native framework using firebase auth, real time database, and storage.",
    demoUrl: "https://expo.dev/@superbahbi/Corkify",
    codeUrl: "https://github.com/superbahbi/corkify",
  },
  {
    id: 8,
    image: portfolioImage,
    title: "Portfolio",
    stack: ["react", "css", "html", "chakra", "styledComponents"],
    description: "My personal portfolio built in react framework. ",
    demoUrl: "https://bahbi.net/",
    codeUrl: "https://github.com/superbahbi/portfolio",
  },
];

export default projects;
