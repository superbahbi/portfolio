import { Box, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const BrandBox = styled(Box)`
  display: inline-flex;
  height: 25px;
  width: auto;
`;

const BrandIcon = ({ name, Icon, href }) => {
  const chip = (
    <BrandBox
      bg="brand.900"
      _hover={href ? { backgroundColor: "brand.800" } : undefined}
      p="1rem"
      m="0.15rem"
    >
      <HStack>
        {Icon && <Icon color="white" />}
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
  );

  if (!href) {
    return chip;
  }

  return (
    <Link
      style={{ textDecoration: "none", cursor: "pointer" }}
      href={href}
      isExternal
    >
      {chip}
    </Link>
  );
};

export default BrandIcon;
