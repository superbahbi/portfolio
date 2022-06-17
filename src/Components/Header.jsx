import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.nav`
  padding: 20px 20px;
  display: flex;
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
  color: #fff;
  margin-bottom: auto;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src="./logo.png" width={64} height={64} alt="logo" />
      </HeaderLogo>
      <HeaderLinks href="#">About</HeaderLinks>
      <HeaderLinks href="#">Project</HeaderLinks>
      <HeaderLinks href="#">Contact</HeaderLinks>
    </HeaderContainer>
  );
};

export default Header;
