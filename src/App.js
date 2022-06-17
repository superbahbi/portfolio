import React from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Text, Stack, Box, Badge, Image } from "@chakra-ui/react";
import styled from "styled-components";
import Header from "./Components/Header";
import InnerHeader from "./Components/InnerHeader";
import Waves from "./Components/Waves";
import Content from "./Components/Content";
import Links from "./Components/Links";
import Footer from "./Components/Footer";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const Container = styled.div`
  position: relative;
  text-align: center;
  background: linear-gradient(
    60deg,
    // rgba(155, 105, 180, 1) 0%,
    // rgba(60, 0, 90, 1) 100%,
    rgba(120, 166, 200, 1) 0%,
    rgba(50, 103, 137, 1) 100%
  );
  height: 100vh;
  color: white;
`;

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Header />
        <InnerHeader>
          <Stack spacing={3}>
            <Text fontSize="4xl">Robert Kugler</Text>
            <Text fontSize="2xl">Full Stack Software Engineer</Text>
          </Stack>
        </InnerHeader>
        <Waves
          animation
          waves={[0, 3, 5, 7]}
          wavesOpacity={[0.7, 0.5, 0.3, 1]}
          waveColor="rgb(233,238,242)"
          data="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          viewBox="0 24 150 28"
        />
        <Content backgroundColor="rgba(233, 238, 242, 1)">
          <Box maxW="960px" mx="auto" mt={20} mb={20}>
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
          </Box>
        </Content>
        <Waves
          backgroundColor="rgba(233, 238, 242, 1)"
          waveColor="rgba(230,92,79,1)"
          data="M0,224L80,186.7C160,149,320,75,480,69.3C640,64,800,128,960,149.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          viewBox="0 0 1440 320"
        />
        <Content backgroundColor="rgba(230,92,79,1)" height="500px">
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            background="gray.100"
          >
            <Image
              src="https://picsum.photos/600/300"
              alt="https://picsum.photos/500/300"
            />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  test
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                test
              </Box>

              <Box>
                111
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  test
                </Box>
              </Box>
            </Box>
          </Box>
        </Content>
        <Footer year={new Date().getFullYear()} name="Robert Kugler" />
      </Container>
    </ChakraProvider>
  );
}

export default App;
