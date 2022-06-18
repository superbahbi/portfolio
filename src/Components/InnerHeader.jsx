import React from "react";
import { Text, Stack, Heading } from "@chakra-ui/react";
import styled, { keyframes, css } from "styled-components";
function createCSS() {
  const num = 300;
  let styles = "";
  styles += "width: 1px;";
  styles += "height: 1px;";
  styles += "background: transparent;";
  styles += "box-shadow: ";
  for (let i = 1; i < num + 1; i += 1) {
    let x = Math.floor(Math.random() * 1920 + 1);
    let y = Math.floor(Math.random() * 1080 + 1);
    $x: styles += `${x}px ${y}px #fff${i === num ? ";" : ", "} `;
  }
  return css`
    ${styles}
  `;
}
const Star = styled.div`
  ${createCSS()};
`;
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
      ${blinkCursor} 900ms steps(13) infinite normal;
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
  let shadow;
  for (let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * (1920 - 1 + 1) + 1);
    let y = Math.floor(Math.random() * (1080 - 1 + 1) + 1);
    shadow += `${x}px ${y}px #fff, `;
  }
  console.log(shadow);
  return (
    <>
      <Star shadow={shadow} />
      <InnerHeaderContainer>
        <Stack>
          <InnerHeaderText fontWeight="100" className="animation">
            {name}
          </InnerHeaderText>
          <Text fontSize="2xl">{position}</Text>
        </Stack>
      </InnerHeaderContainer>
    </>
  );
};

export default InnerHeader;
