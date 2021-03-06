import { Center, Image } from "@chakra-ui/react";
import React from "react";
import styled, { keyframes } from "styled-components";
import RocketBase from "../../Assets/rocketbase.png";
const floating = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }  
`;

const Rocket = styled(Image)`
  animation-name: ${floating};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
const FloatingRocket = () => {
  return (
    <>
      <Center>
        <Rocket boxSize="md" src={RocketBase} alt="Rocket Base" />
      </Center>
    </>
  );
};

export default FloatingRocket;
