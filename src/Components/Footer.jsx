import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: block;
  text-align: center;
  padding: 30px 0;
  color: #777;
  background-color: #fff;
  border-top: 1px solid #eaeaea;
`;

const Footer = ({ year, name }) => {
  return (
    <FooterContainer>
      <p>
        Copyright {year} {name}
      </p>
    </FooterContainer>
  );
};

export default Footer;
