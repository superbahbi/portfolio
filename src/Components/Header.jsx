import { Heading, Stack, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import styled from "styled-components";
import profile from "../Data/Profile";
import useScrollFade from "../hooks/useScrollFade";
import theme from "../theme";
import Meteor from "./Animation/Meteor";
import Star from "./Animation/Star";
import SectionDivider from "./SectionDivider";

const InnerHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
  @media (max-width: 768px) {
    height: 50vh;
  }
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
`;

const Navbar = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
`;

const HeaderContainer = styled.nav`
  display: flex;
  padding: 20px 20px;
  justify-content: flex-end;
  align-items: flex-end;
`;

const HeaderLogo = styled.div`
  width: 50px;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
  margin-right: auto;
`;

const HeaderLinks = styled.a`
  @media (max-width: 768px) {
    display: none;
  }
  margin-left: 12px;
  margin-bottom: auto;
  :hover {
    color: ${(props) => props.color};
  }
`;

const Header = () => {
  const headerRef = useRef(null);
  useScrollFade(headerRef);

  return (
    <>
      <Meteor amount={15} seed={21} />
      <Star amount={500} seed={7} />
      <Navbar>
        <HeaderContainer id="header" ref={headerRef}>
          <HeaderLogo>
            <Text
              fontFamily="mono"
              fontWeight="bold"
              fontSize="2xl"
              color="white"
              aria-label={profile.name}
            >
              BL
            </Text>
          </HeaderLogo>
          <HeaderLinks color={theme.colors.brand[600]} href="#about">
            About
          </HeaderLinks>
          <HeaderLinks color={theme.colors.brand[600]} href="#project">
            Project
          </HeaderLinks>
          <HeaderLinks color={theme.colors.brand[600]} href="#technology">
            Technology
          </HeaderLinks>
        </HeaderContainer>
      </Navbar>
      <InnerHeaderContainer>
        <Stack>
          <Heading
            fontSize="4xl"
            color="brand.700"
            fontWeight={100}
            textAlign="center"
          >
            {profile.name}
          </Heading>
          <Text fontSize="2xl" color="brand.700" textAlign="center">
            {profile.title}
          </Text>
        </Stack>
      </InnerHeaderContainer>
      <SectionDivider variant="header" />
    </>
  );
};

export default Header;
