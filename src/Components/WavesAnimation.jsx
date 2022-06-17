import React from "react";
import styled, { keyframes, css } from "styled-components";

const waveAnimations = keyframes`
0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

const WaveSVG = styled.svg`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;

  /* Animation */
  .parallax > use {
    animation: ${(props) =>
      props.animation === true
        ? css`
            ${waveAnimations} 25s
        cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite
          `
        : ""};
  }

  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
  }
`;

const WavesAnimation = ({ animation, waves, wavesOpacity }) => {
  let useArr = waves.map((x, i) => {
    return (
      <use
        key={i}
        xlinkHref="#gentle-wave"
        x="48"
        y={waves[i]}
        fill={`rgba(233,238,242,${wavesOpacity[i]})`}
      ></use>
    );
  });
  return (
    <WaveSVG
      id="w"
      animation={animation}
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>

      <g className="parallax">{useArr}</g>
    </WaveSVG>
  );
};

export default WavesAnimation;
