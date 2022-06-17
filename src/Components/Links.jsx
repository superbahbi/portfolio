import React from "react";
import styled from "styled-components";
import { TbBrandGmail, TbBrandLinkedin, TbCloudDownload } from "react-icons/tb";
import { Grid, GridItem, Center, Link, Box, HStack } from "@chakra-ui/react";
const Container = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    a {
      padding-bottom: 1rem;
    }
  }
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // text-align: center;
  a {
    padding-left: 1rem;
  }
`;
const Links = ({ email, linkedin, resume }) => {
  return (
    <Container>
      <GridItem>
        <Center>
          <Link href={`mailto:${email}`}>
            <Box
              as="button"
              borderRadius="md"
              bg="brand.600"
              color="white"
              px={4}
              h={8}
            >
              <HStack>
                <Box as={TbBrandGmail} fontSize="2xl" />
                <Box>{email.toUpperCase()}</Box>
              </HStack>
            </Box>
          </Link>
        </Center>
      </GridItem>
      <GridItem>
        <Center>
          <Link href={`https://www.linkedin.com/in/${linkedin}/`}>
            <Box
              as="button"
              borderRadius="md"
              bg="brand.600"
              color="white"
              px={4}
              h={8}
            >
              <HStack>
                <Box as={TbBrandLinkedin} fontSize="2xl" />
                <Box>{linkedin.toUpperCase()}</Box>
              </HStack>
            </Box>
          </Link>
        </Center>
      </GridItem>
      <GridItem>
        <Center>
          <Link href={resume}>
            <Box
              as="button"
              borderRadius="md"
              bg="brand.600"
              color="white"
              px={4}
              h={8}
            >
              <HStack>
                <Box as={TbCloudDownload} fontSize="2xl" />
                <Box>{"download resume".toUpperCase()}</Box>
              </HStack>
            </Box>
          </Link>
        </Center>
      </GridItem>
    </Container>
  );
};

export default Links;
