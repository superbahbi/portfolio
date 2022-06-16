import React from "react";
import styled from "styled-components";
import { Grid, GridItem, Center } from "@chakra-ui/react";
const Container = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  a {
    padding-left: 1rem;
  }
`;
const Links = ({ email, linkedin, resume }) => {
  return (
    <Container>
      <Grid templateColumns="repeat(3, 1fr)" mt={10}>
        <GridItem>
          <Center>
            <a href={`mailto:${email}`}>
              <img
                src={`https://img.shields.io/badge/${email}-326789?style=for-the-badge&logo=gmail&logoColor=white`}
                height="27"
                target="_blank"
                alt="link to my email"
              />
            </a>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <a href={`https://www.linkedin.com/in/${linkedin}/`}>
              <img
                src={`https://img.shields.io/badge/${linkedin}-326789?style=for-the-badge&logo=linkedin&logoColor=white_`}
                height="27"
                target="_blank"
                alt="link to my linkedin"
              />
            </a>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <a href={resume}>
              <img
                src="https://img.shields.io/badge/Download_Resume-326789?style=for-the-badge&logo=googledrive&logoColor=white"
                height="27"
                target="_blank"
                alt="link to my resume"
              />
            </a>
          </Center>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Links;
