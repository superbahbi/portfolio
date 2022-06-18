import React from "react";
import styled, { keyframes } from "styled-components";
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
const StyledMeteor = styled.div`
  ${(props) => props.loading && "display: none;"}
  position: absolute;
  top: ${(props) => props.horizontal}px;
  left: ${(props) => props.vertical * 1}%;
  width: 300px;
  height: 1px;
  transform: rotate(-45deg); // diagonal line from top right to bottom left
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );

  animation: ${meteor} ${(props) => props.delay}s linear infinite;
  @media (max-width: 768px) {
    animation: ${meteor} ${(props) => props.delay + 5}s linear infinite;
  }
  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 5px;
    border-radius: 50%;
    margin-top: -2px;
    margin-left: -148px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 15px 3px #fff;
  }
`;
const Meteor = ({ amount }) => {
  let numOfMeteors = new Array(amount).fill();
  return (
    <>
      {numOfMeteors.map((_, i) => {
        return (
          <StyledMeteor
            key={i}
            className="Meteor"
            delay={Math.floor((Math.random() * 15 + 3) * 100) / 100}
            vertical={Math.floor(Math.random() * 90 + 9)}
            horizontal={Math.floor(Math.random() * 200 + 100)}
          />
        );
      })}
    </>
  );
};

export default Meteor;
