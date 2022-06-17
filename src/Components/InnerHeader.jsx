import React from "react";
import { Text, Stack, Heading } from "@chakra-ui/react";
import styled, { keyframes } from "styled-components";
const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 258px;
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
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  .animation {
    animation: ${typewriter} 3.5s steps(13) 1s 1 normal both,
      ${blinkCursor} 400ms steps(13) infinite normal;
  }
`;
const InnerHeaderText = styled(Heading)`
  font-family: "Lato", sans-serif;
  border-right: 2px solid white;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 300;
`;
const InnerHeader = ({ name, position }) => {
  return (
    <InnerHeaderContainer>
      <Stack>
        <InnerHeaderText fontWeight="100" className="animation">
          {name}
        </InnerHeaderText>
        <Text fontSize="2xl">{position}</Text>
      </Stack>
    </InnerHeaderContainer>
  );
};

export default InnerHeader;
