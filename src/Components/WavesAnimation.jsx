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

const WavesNoAnimation = (props) => {
  // var svgWave = document.getElementById("animated_waves");
  // var NS = "http://www.w3.org/2000/svg";

  // var svg = document.createElementNS("http://www.w3.org/2000/svg", "g");
  // svg.classList.add("parallax");
  // for (var i = 0; i < props.lines; i++) {
  //   var use = document.createElementNS(NS, "use");
  //   use.setAttribute("xlinkHref", "#gentle-wave");
  //   use.setAttribute("x", 48);
  //   use.setAttribute("y", 3 * i);
  //   use.setAttribute("fill", "rgba(255,255,255,0.7)");
  //   svg.appendChild(use);
  // }
  // console.log(svg);
  return (
    <WaveSVG
      animation={props.animation}
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
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(233,238,242,0.7)"
        ></use>
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(233,238,242,0.5)"
        ></use>
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="6"
          fill="rgba(233,238,242,0.3)"
        ></use>
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="9"
          fill="rgba(233,238,242,1)"
        ></use>
      </g>
      {/* {svg.innerHTML} */}
      {/* {svg.insertAdjacentElement("beforeend", "defs")} */}
      {/* <script>
        var g = document.getElementById('w'); console.log(g);
        g.insertAdjacentElement(props)
      </script> */}
    </WaveSVG>
  );
};

export default WavesNoAnimation;
