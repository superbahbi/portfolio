import { Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { TbBrandGmail, TbBrandLinkedin, TbCloudDownload } from "react-icons/tb";
import styled from "styled-components";
import BrandIcon from "./BrandIcon";

const Container = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 2rem;
  max-width: 65%;
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
    <Center>
      <Container>
        <GridItem>
          <BrandIcon
            name={email}
            icon={<TbBrandGmail color="white" />}
            link={`mailto:${email}`}
          />
        </GridItem>
        <GridItem>
          <BrandIcon
            name={linkedin}
            icon={<TbBrandLinkedin color="white" />}
            link={`https://www.linkedin.com/in/${linkedin}/`}
          />
        </GridItem>
        <GridItem>
          <BrandIcon
            name="Download resume"
            icon={<TbCloudDownload color="white" />}
            link={resume}
          />
        </GridItem>
      </Container>
    </Center>
  );
};

export default Links;
