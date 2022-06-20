import React from "react";
import { Box, Text, HStack, Link } from "@chakra-ui/react";
import styled from "styled-components";

const BrandBox = styled(Box)`
  display: inline-flex;
  height: 25px;
  width: auto;
`;
const BrandIcon = ({ name, icon, link }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        cursor: link ? "pointer" : "default",
      }}
      href={link ? link : null}
    >
      <BrandBox bg="brand.900" p="1rem" m="0.15rem">
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
