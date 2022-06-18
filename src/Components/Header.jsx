import React, { useEffect } from "react";
import styled from "styled-components";
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
  margin-left: 12px;
  margin-bottom: auto;
`;
const Header = () => {
  useEffect(() => {
    const [red, green, blue] = [255, 255, 255];
    const section = document.querySelector("#header");

    window.addEventListener("scroll", () => {
      let y = 1 + (window.scrollY || window.pageYOffset) / 250;
      y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
      const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
      section.style.color = `rgb(${r}, ${g}, ${b})`;
    });
  }, []);
  return (
    <Navbar>
      <HeaderContainer id="header">
        <HeaderLogo>
          <img src="./logo.png" width={64} height={64} alt="logo" />
        </HeaderLogo>
        <HeaderLinks href="#about">About</HeaderLinks>
        <HeaderLinks href="#project">Project</HeaderLinks>
        <HeaderLinks href="#contact">Contact</HeaderLinks>
      </HeaderContainer>
    </Navbar>
  );
};

export default Header;
