import {
  Box,
  ChakraProvider,
  extendTheme,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import FlipCard from "./Components/Animation/Flip/FlipCard";
import Waves from "./Components/Animation/Waves";
import BrandIcon from "./Components/BrandIcon";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Links from "./Components/Links";

import projects from "./Data/Projects";
import technology from "./Data/Technology";
const theme = extendTheme({
  fonts: {
    heading: `'Inconsolata', monospace`,
    body: `'Raleway', sans-serif`,
    mono: `'Roboto Mono, monospace'`,
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
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
const TechBox = styled(Box)`
  max-width: 960px;
  @media (max-width: 768px) {
    max-width: 600px;
  }
`;
function App() {
  const resumeLink =
    "https://user.fm/files/v2-370050f28b0b6ed363ec702bb53264e9/Robert_Kugler_Resume.pdf";
  const linkedin = "robertleekugler";
  const email = "superbahbi@gmail.com";
  return (
    <ChakraProvider theme={theme}>
      <Container color={theme.colors.black} color2={theme.colors.brand[900]}>
        <Header
          theme={theme}
          name="Robert Kugler"
          title="Full Stack Software Developer"
          resumeLink={resumeLink}
          email={email}
        />
        <Content id="about" backgroundColor={theme.colors.brand[700]}>
          <ContentBox maxW="960px" mx="auto" mt={20} mb={20}>
            <Text fontSize="xl">
              Hi there,👋 I am an full-stack developer, 💻 currently working in
              the wine industry as Cellar Master in San Luis Obispo. 🔭 I’m
              currently learning Typescript, React, and React Native. 🌱 You can
              see some of my projects on my GitHub repositories. 🌐 You can
              reach me using the links below. 📫
            </Text>
            <Links email={email} linkedin={linkedin} resume={resumeLink} />
          </ContentBox>
        </Content>

        <Waves
          theme={theme}
          backgroundColor={theme.colors.brand[700]}
          waveColor={theme.colors.brand[600]}
          data="M0,224L80,186.7C160,149,320,75,480,69.3C640,64,800,128,960,149.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          viewBox="0 0 1440 320"
        />
        <Content id="project" backgroundColor={theme.colors.brand[600]}>
          <Heading as="h2" size="xl" color="brand.700" m={10}>
            PROJECTS
          </Heading>

          <ContentGrid>
            {projects.map((project, index) => {
              return (
                <FlipCard
                  key={index}
                  projectImg={project.projectImg}
                  projectTitle={project.projectTitle}
                  projectStack={project.projectStack}
                  projectDescription={project.projectDescription}
                  demoLink={project.demoLink}
                  codeLink={project.codeLink}
                />
              );
            })}
          </ContentGrid>
        </Content>
        <Waves
          theme={theme}
          backgroundColor={theme.colors.brand[700]}
          waveColor={theme.colors.brand[600]}
          data="M0,224L30,208C60,192,120,160,180,170.7C240,181,300,235,360,266.7C420,299,480,309,540,272C600,235,660,149,720,138.7C780,128,840,192,900,181.3C960,171,1020,85,1080,74.7C1140,64,1200,128,1260,170.7C1320,213,1380,235,1410,245.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          viewBox="0 0 1440 320"
        />

        <Content id="technology" backgroundColor={theme.colors.brand[700]}>
          <Heading as="h2" size="xl" color="brand.900" m={10}>
            TECHNOLOGIES & TOOLS
          </Heading>

          <TechBox>
            {technology.map((tech, index) => {
              return (
                <BrandIcon key={index} name={tech.name} icon={tech.icon} />
              );
            })}
          </TechBox>
        </Content>
        <Waves
          theme={theme}
          backgroundColor={theme.colors.transparent}
          waveColor={theme.colors.brand[700]}
          data="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          viewBox="0 0 1440 320"
        />
        <Footer
          color={theme.colors.black}
          color2={theme.colors.brand[900]}
          year={new Date().getFullYear()}
          name="Robert Kugler"
        />
      </Container>
    </ChakraProvider>
  );
}

export default App;
