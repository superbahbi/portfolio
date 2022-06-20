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
  z-index: 1;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
  background-color: ${(props) => props.backgroundColor};
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
  .parallax > use:nth-child(5) {
    animation-delay: -6s;
    animation-duration: 27s;
  }

  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
  }
`;

/* Waves Components
  @params {boolean} animation - if true, the waves will be animated
  @params {array} waves - array of numbers that represent the y position of the waves
  @params {array} wavesOpacity - array of numbers that represent the opacity of the waves
  @params {theme.color} backgroundColor - background color of the waves
  @params {theme.color} waveColor - color of the waves
  @params {string} data - SVG data string of the waves
  @params {string} viewData - SVG viewbox string of the waves
*/
const Waves = ({
  animation,
  waves,
  wavesOpacity,
  waveColor,
  backgroundColor,
  data,
  viewBox,
}) => {
  let useArr = waves?.map((x, i) => {
    return (
      <use
        key={i}
        xlinkHref="#gentle-wave"
        x={waves && "48"}
        y={waves && waves[i]}
        fillOpacity={wavesOpacity[i]}
        fill={waveColor}
      ></use>
    );
  });
  return (
    <WaveSVG
      animation={animation}
      backgroundColor={backgroundColor}
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      viewBox={viewBox}
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      {animation ? (
        <defs>
          <path id="gentle-wave" d={data} />
        </defs>
      ) : (
        <path d={data} fill={waveColor} fillOpacity="1" />
      )}
      {waves && <g className="parallax">{useArr}</g>}
    </WaveSVG>
  );
};

export default Waves;
