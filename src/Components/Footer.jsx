import { Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import profile from "../Data/Profile";
import theme from "../theme";
import FloatingRocket from "./Animation/FloatingRocket";
import Star from "./Animation/Star";
import Links from "./Links";

const FooterContainer = styled.div`
  position: relative;
  text-align: center;
  top: -120px;
  @media (max-width: 1024px) {
    top: -100px;
  }
  padding-top: 120px;
  padding-bottom: 20px;
  background: radial-gradient(
    ellipse at bottom,
    ${(props) => props.color2} 0%,
    ${(props) => props.color} 100%
  );
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer color={theme.colors.black} color2={theme.colors.brand[900]}>
      <Star amount={300} seed={13} />
      <FloatingRocket />
      <Links />
      <Text>
        Made with ❤️ {profile.name} {new Date().getFullYear()}
      </Text>
    </FooterContainer>
  );
};

export default Footer;
