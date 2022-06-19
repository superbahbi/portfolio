import {
  twitterCloneWebImage,
  twitterCloneServerImage,
  wordleImage,
  discoverifyImage,
  memoryGameImage,
  ticTacToeImage,
  portfolioImage,
  corkifyImage,
} from "./Images";
const projects = [
  {
    projectImg: twitterCloneWebImage,
    projectTitle: "Twitter Clone Web",
    projectSubTitle: "Reactjs, CSS3, HTML5, Socket.io",
    projectDescription:
      "A twitter clone built in reactjs framework using mongodb database and cloudinary storage.",
    demoLink: "https://twitter.bahbi.net",
    codeLink: "https://github.com/superbahbi/twitter-clone-web",
  },
  {
    projectImg: twitterCloneServerImage,
    projectTitle: "Twitter Clone Server",
    projectSubTitle: "Nodejs, MongoDB, Express, Socket.io",
    projectDescription:
      "A backend service for twitter clone web and app, written in nodejs, expressjs, mongodb.",
    demoLink: "https://twitter-clone-server2.herokuapp.com/",
    codeLink: "https://github.com/superbahbi/twitter-clone-server",
  },
  {
    projectImg:
      "https://opengraph.githubassets.com/ed0f338ae724314eafdf74b09b609e5fcf7dd2d05c959c5be69d6771df281427/superbahbi/twitter-clone-app",
    projectTitle: "Twitter Clone App",
    projectSubTitle: "React Native",
    projectDescription:
      "A twitter clone built in react native framework using mongodb database and cloudinary storage.",
    demoLink: "https://twitter.bahbi.net/",
    codeLink: "https://github.com/superbahbi/twitter-clone-app",
  },
  {
    projectImg: wordleImage,
    projectTitle: "Wordle",
    projectSubTitle: "Reactjs, CSS3, HTML5",
    projectDescription: "A worlde clone built in react framework",
    demoLink: "https://wordle.bahbi.net/",
    codeLink: "https://github.com/superbahbi/wordle",
  },
  {
    projectImg: memoryGameImage,
    projectTitle: "Memory Game",
    projectSubTitle: "Reactjs, CSS3, HTML5",
    projectDescription: "A game built in reactjs. Match and win the game.",
    demoLink: "https://memory.bahbi.net/",
    codeLink: "https://github.com/superbahbi/barbarian-memory",
  },
  {
    projectImg: ticTacToeImage,
    projectTitle: "Tic Tac Toe Online",
    projectSubTitle: "Reactjs, CSS3, HTML5, Socket.io",
    projectDescription:
      "A tic tac toe game built in reactjs and socket.io. Play with your friends.",
    demoLink: "ttt-online.bahbi.net/",
    codeLink: "https://github.com/superbahbi/ttt-online",
  },
  {
    projectImg: discoverifyImage,
    projectTitle: "Discoverify",
    projectSubTitle: "Reactjs, CSS3, HTML5, Spotify API",
    projectDescription: "A spotify app built in react framework.",
    demoLink: "https://discoverify.bahbi.net/",
    codeLink: "https://github.com/superbahbi/discoverify",
  },
  {
    projectImg: portfolioImage,
    projectTitle: "Portfolio",
    projectSubTitle: "Reactjs, CSS3, HTML5, Chakar UI, Animation",
    projectDescription: "My personal portfolio built in react framework. ",
    demoLink: "https://bahbi.net/",
    codeLink: "https://github.com/superbahbi/portfolio",
  },
  {
    projectImg: corkifyImage,
    projectTitle: "Corkify",
    projectSubTitle: "React Native",
    projectDescription:
      "A wine flash store built in react native framework using firebase auth, real time database, and storage.",
    demoLink: "https://github.com/superbahbi/superbahbi/blob/main",
    codeLink: "https://github.com/superbahbi/corkify",
  },
];

export default projects;
