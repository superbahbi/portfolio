import React from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Text, Box, Grid } from "@chakra-ui/react";
import styled from "styled-components";
import Header from "./Components/Header";
import InnerHeader from "./Components/InnerHeader";
import Waves from "./Components/Waves";
import Content from "./Components/Content";
import Links from "./Components/Links";
import Footer from "./Components/Footer";
import ProjectBox from "./Components/ProjectBox";

import twitterCloneWeb from "./Assets/twitter-clone-web.jpg";

const theme = extendTheme({
  fonts: {
    heading: `'Inconsolata', monospace`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    brand: {
      900: "#326789", // dark blue
      800: "#78a6c8", // light blue
      700: "#e9eef2", // light grey
      600: "#e65c4f", // red
      500: "#9f9f9f", // grey
    },
  },
});

const Container = styled.div`
  position: relative;
  text-align: center;
  background: radial-gradient(
    ellipse at bottom,
    ${(props) => props.color2} 0%,
    ${(props) => props.color} 100%
  );
  height: 100vh;
  color: white;
`;

const ContentGrid = styled(Grid)`
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ContentBox = styled(Box)`
  max-width: 960px;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container color="#000" color2={theme.colors.brand[900]}>
        <Header />
        <InnerHeader
          name="Robert Kugler"
          position="Full Stack Software Engineer"
        />
        <Waves
          animation
          waves={[0, 3, 5, 7]}
          wavesOpacity={[0.7, 0.5, 0.3, 1]}
          waveColor={theme.colors.brand[700]}
          data="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          viewBox="0 24 150 28"
        />
        <Content backgroundColor={theme.colors.brand[700]}>
          <ContentBox maxW="960px" mx="auto" mt={20} mb={20}>
            <Text fontSize="2xl">
              Hi there,👋 I am an aspiring full stack developer, 💻 currently
              working in the wine industry as Cellar Master in San Luis Obispo.
              🔭 I’m currently learning Typescript, React, and React Native. 🌱
              You can see my some of my projects on my repositories. 🌐 You can
              reach me using the links below. 📫
            </Text>
            <Links
              email="superbahbi@gmail.com"
              linkedin="robertleekugler"
              resume="https://user.fm/files/v2-300f28f8385972fb6f887614d0c6ec72/Robert_Kugler%20IV_Resume.pdf"
            />
          </ContentBox>
        </Content>
        <Waves
          theme={theme}
          backgroundColor={theme.colors.brand[700]}
          waveColor={theme.colors.brand[600]}
          data="M0,224L80,186.7C160,149,320,75,480,69.3C640,64,800,128,960,149.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          viewBox="0 0 1440 320"
        />
        <Content backgroundColor={theme.colors.brand[600]}>
          <ContentGrid>
            <ProjectBox
              projectImg={twitterCloneWeb}
              projectTitle="Twitter Clone Web"
              projectSubTitle="React, CSS3, HTML5"
              projectDescription="A twitter clone built in reactjs framework using mongodb database
            and cloudinary storage."
              demoLink="https://twitter.bahbi.net"
              codeLink="https://github.com/superbahbi/twitter-clone-web"
            />

            <ProjectBox
              projectImg="https://opengraph.githubassets.com/ed0f338ae724314eafdf74b09b609e5fcf7dd2d05c959c5be69d6771df281427/superbahbi/twitter-clone-server"
              projectTitle="Twitter Clone Server"
              projectSubTitle="Nodejs, MongoDB, Express"
              projectDescription="A backend service for twitter clone web and app, written in nodejs, expressjs, mongodb.."
              demoLink="https://twitter-clone-server2.herokuapp.com/"
              codeLink="https://github.com/superbahbi/twitter-clone-server"
            />
            <ProjectBox
              projectImg={twitterCloneWeb}
              projectTitle="Twitter Clone Web"
              projectSubTitle="React, CSS3, HTML5"
              projectDescription="A twitter clone built in reactjs framework using mongodb database
            and cloudinary storage."
              demoLink="https://twitter.bahbi.net"
              codeLink="https://github.com/superbahbi/twitter-clone-web"
            />

            <ProjectBox
              projectImg="https://opengraph.githubassets.com/ed0f338ae724314eafdf74b09b609e5fcf7dd2d05c959c5be69d6771df281427/superbahbi/twitter-clone-server"
              projectTitle="Twitter Clone Server"
              projectSubTitle="Nodejs, MongoDB, Express"
              projectDescription="A backend service for twitter clone web and app, written in nodejs, expressjs, mongodb.."
              demoLink="https://twitter-clone-server2.herokuapp.com/"
              codeLink="https://github.com/superbahbi/twitter-clone-server"
            />
          </ContentGrid>
        </Content>
        <Waves
          theme={theme}
          backgroundColor={theme.colors.brand[700]}
          waveColor={theme.colors.brand[600]}
          data="M0,224L30,208C60,192,120,160,180,170.7C240,181,300,235,360,266.7C420,299,480,309,540,272C600,235,660,149,720,138.7C780,128,840,192,900,181.3C960,171,1020,85,1080,74.7C1140,64,1200,128,1260,170.7C1320,213,1380,235,1410,245.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          viewBox="0 0 1440 320"
        />
        <Footer year={new Date().getFullYear()} name="Robert Kugler" />
      </Container>
    </ChakraProvider>
  );
}

export default App;
