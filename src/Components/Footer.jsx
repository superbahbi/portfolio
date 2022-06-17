import React from "react";
import styled from "styled-components";
import { Box, Text } from "@chakra-ui/react";
const FooterContainer = styled(Box)`
  display: block;
  text-align: center;
  padding: 30px 0;
  color: #777;
  background-color: #fff;
  border-top: 1px solid #eaeaea;
`;

const Footer = ({ year, name }) => {
  return (
    <FooterContainer backgroundColor="brand.700">
      <Text>
        Copyright {year} {name}
      </Text>
    </FooterContainer>
  );
};

export default Footer;
