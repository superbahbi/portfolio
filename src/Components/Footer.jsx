import React from "react";
import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import FloatingRocket from "./Animation/FloatingRocket";
import Star from "./Animation/Star";
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
{
  /* Footer Components
  @params {theme.color} color - first color theme of the footer background gradient
  @params {theme.color} color2 - second color theme of the footer background gradient
  @params {int} year - current year
  @params {string} name - name of the developer
*/
}
const Footer = ({ color, color2, year, name }) => {
  return (
    <FooterContainer color={color} color2={color2} backgroundColor="brand.700">
      <Star amount={300} />
      <FloatingRocket />
      <Text>
        © Copyright {year} {name}
      </Text>
    </FooterContainer>
  );
};

export default Footer;
