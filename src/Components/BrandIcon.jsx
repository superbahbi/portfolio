import { Box, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const BrandBox = styled(Box)`
  display: inline-flex;
  height: 25px;
  width: auto;
  .hover {
  }
`;
const BrandIcon = ({ name, icon, link }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        cursor: "pointer",
      }}
      href={link ? link : null}
      target={link ? "_blank" : "_self"}
    >
      <BrandBox
        bg="brand.900"
        _hover={{ backgroundColor: "brand.800" }}
        p="1rem"
        m="0.15rem"
      >
        <HStack>
          {icon}
          <Text
            fontFamily="mono"
            fontWeight="bold"
            fontSize="10px"
            letterSpacing="0.08rem"
            textTransform="uppercase"
            ml={"1 !important"}
            color="white"
          >
            {name}
          </Text>
        </HStack>
      </BrandBox>
    </Link>
  );
};

export default BrandIcon;
