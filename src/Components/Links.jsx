import React from "react";
import styled from "styled-components";
import { TbBrandGmail, TbBrandLinkedin, TbCloudDownload } from "react-icons/tb";
import { Grid, GridItem, Center } from "@chakra-ui/react";
import BrandIcon from "./BrandIcon";

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
  a {
    padding-left: 1rem;
  }
`;
/* Links Components
  @params {string} email - email address
  @params {string} linkedin - linkedin username
  @params {string} resume - url of the resume
*/
const Links = ({ email, linkedin, resume }) => {
  return (
    <Container>
      <GridItem>
        <BrandIcon
          name={email}
          icon={<TbBrandGmail color="white" />}
          link={`mailto:${email}`}
        />
      </GridItem>
      <GridItem>
        <Center>
          <BrandIcon
            name={linkedin}
            icon={<TbBrandLinkedin color="white" />}
            link={`https://www.linkedin.com/in/${linkedin}/`}
          />
        </Center>
      </GridItem>
      <GridItem>
        <Center>
          <BrandIcon
            name="Download resume"
            icon={<TbCloudDownload color="white" />}
            link={resume}
          />
        </Center>
      </GridItem>
    </Container>
  );
};

export default Links;
