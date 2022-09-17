import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TbBrandGmail, TbCloudDownload } from "react-icons/tb";
import styled, { keyframes } from "styled-components";
import Meteor from "./Animation/Meteor";
import Star from "./Animation/Star";
import Waves from "./Animation/Waves";
import BrandIcon from "./BrandIcon";

const typewriter = (width) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${width};
  }
`;

const blinkCursor = keyframes`
  from {
    border-right-color: white;
  }
  to {
    border-right-color: transparent;
  }
`;

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
  .animation {
    animation: ${typewriter("258px")} 3.5s steps(13) 1s 1 normal both,
      ${blinkCursor} 900ms steps(13) infinite normal;
    @media (max-width: 768px) {
      animation: ${typewriter("235px")} 3.5s steps(13) 1s 1 normal both,
        ${blinkCursor} 900ms steps(13) infinite normal;
    }
  }
`;

const InnerHeaderText = styled(Heading)`
  border-right: 2px solid white;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 300;
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
  fill: white;
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

/* Header Components 
  @params {object} theme - theme object from chakra-ui
  @params {string} name - developer name
  @params {string} title - developer title
*/
const Header = ({ theme, name, title, resumeLink, email }) => {
  useEffect(() => {
    const [red, green, blue] = [255, 255, 255];
    const header = document.querySelector("#header");

    window.addEventListener("scroll", () => {
      let y = 1 + (window.scrollY || window.pageYOffset) / 250;
      y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
      const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
      header.style.color = `rgb(${r}, ${g}, ${b})`;
    });
  }, []);
  return (
    <>
      <Meteor amount={15} />
      <Star amount={500} />
      <Navbar>
        <HeaderContainer id="header">
          <HeaderLogo>
            <img
              src="./rk-logo-256.png"
              width={64}
              height={64}
              alt="logo"
              href="#"
            />
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
          <InnerHeaderText
            fontWeight="100"
            className="animation"
            color="brand.700"
          >
            {name}
          </InnerHeaderText>
          <Text fontSize="2xl" color="brand.700" textAlign="left">
            {title}
          </Text>
          <HStack>
            <BrandIcon
              name="Resume"
              icon={<TbCloudDownload color="white" />}
              link={resumeLink}
            />
            <BrandIcon
              name="Email"
              icon={<TbBrandGmail color="white" />}
              link={`mailto:` + email}
            />
          </HStack>
        </Stack>
      </InnerHeaderContainer>
      <Waves
        animation
        waves={[0, 3, 5, 7]}
        wavesOpacity={[0.7, 0.5, 0.3, 1]}
        waveColor={theme.colors.brand[700]}
        data="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        viewBox="0 24 150 28"
      />
    </>
  );
};

export default Header;
