import { Center, Grid } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import profile from "../Data/Profile";
import BrandIcon from "./BrandIcon";

const Container = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding-top: 2rem;
  max-width: 65%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Links = () => {
  return (
    <Center>
      <Container>
        {profile.links.map((link) => (
          <BrandIcon
            key={link.label}
            name={link.label}
            Icon={link.Icon}
            href={link.href}
          />
        ))}
      </Container>
    </Center>
  );
};

export default Links;
