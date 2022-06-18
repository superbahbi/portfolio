import React from "react";
import { Text, Stack, Heading } from "@chakra-ui/react";
import styled, { keyframes, css } from "styled-components";

const meteor = keyframes`
0% {
  opacity: 1;
  margin-top: -300px;
  margin-right: -300px;
}
12% {
  opacity: 0;
}
15% {
  margin-top: 300px;
  margin-left: -600px;
  opacity: 0;
}
100% {
  opacity: 0;
}
`;
const typewriter = (width) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${width};
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

const Star = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${(props) => props.starShadowBox};
`;
const Meteor = styled.div`
  position: absolute;
  top: ${(props) => props.horizontal}px;
  left: ${(props) => props.vertical}%;
  width: 300px;
  height: 1px;
  transform: rotate(-45deg); // diagonal line from top right to bottom left
  background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));

  animation: ${meteor} ${(props) => props.timer}s ease infinite;
  @media (max-width: 768px) {
    animation: ${meteor} ${(props) => props.timer + 5}s ease infinite;
  }
  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 5px;
    border-radius: 50%;
    margin-top: -2px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 15px 3px #fff;
  }
`;
const InnerHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 75vh;
  @media (max-width: 768px) {
    height: 50vh;
  }
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  .animation {
    animation: ${typewriter("258px")} 3.5s steps(13) 1s 1 normal both,
      ${blinkCursor} 900ms steps(13) infinite normal;
    @media (max-width: 768px) {
      animation: ${typewriter("235px")} 3.5s steps(13) 1s 1 normal both,
        ${blinkCursor} 900ms steps(13) infinite normal;
    }
  }
`;
const InnerHeaderText = styled(Heading)`
  border-right: 2px solid white;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 300;
`;
const InnerHeader = ({ name, position }) => {
  const numOfMeteors = new Array(15).fill();
  const numOfStars = 500;
  let starShadowBox = "";
  for (let i = 1; i < numOfStars + 1; i += 1) {
    let x = Math.floor(Math.random() * 2820 + 1);
    let y = Math.floor(Math.random() * 1235 + 1);
    starShadowBox += `${x}px ${y}px #fff${i === numOfStars ? ";" : ", "} `;
  }
  return (
    <>
      {numOfMeteors.map((_, i) => {
        return (
          <Meteor
            key={i}
            timer={Math.floor((Math.random() * 15 + 3) * 100) / 100}
            vertical={Math.floor(Math.random() * 90 + 9)}
            horizontal={Math.floor(Math.random() * 500 + 100)}
          />
        );
      })}
      <Star starShadowBox={starShadowBox} />
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
