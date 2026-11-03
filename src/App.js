import { Box, ChakraProvider, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import BrandIcon from "./Components/BrandIcon";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProjectCard from "./Components/ProjectCard";
import SectionDivider from "./Components/SectionDivider";
import profile from "./Data/Profile";
import projects from "./Data/Projects";
import technology from "./Data/Technology";
import theme from "./theme";

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
  return (
    <ChakraProvider theme={theme}>
      <Container color={theme.colors.black} color2={theme.colors.brand[900]}>
        <Header />

        <Content id="about" backgroundColor={theme.colors.brand[700]}>
          <ContentBox maxW="960px" mx="auto" mt={20} mb={20}>
            {profile.about.map((paragraph) => (
              <Text
                key={paragraph}
                fontSize="xl"
                color={theme.colors.brand[400]}
                mb={4}
              >
                {paragraph}
              </Text>
            ))}
          </ContentBox>
        </Content>

        <SectionDivider variant="about" />

        <Content id="project" backgroundColor={theme.colors.brand[600]}>
          <Heading as="h2" size="xl" color="brand.700" m={10}>
            PROJECTS
          </Heading>

          <ContentGrid>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ContentGrid>
        </Content>

        <SectionDivider variant="projects" />

        <Content id="technology" backgroundColor={theme.colors.brand[700]}>
          <Heading as="h2" size="xl" color="brand.900" m={10}>
            TECHNOLOGIES & TOOLS
          </Heading>

          <TechBox>
            {technology.map((item) => (
              <BrandIcon key={item.name} name={item.name} Icon={item.Icon} />
            ))}
          </TechBox>
        </Content>

        <SectionDivider variant="technology" />

        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
