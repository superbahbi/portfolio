import React from "react";
import styled from "styled-components";

const WaveSVG = styled.svg`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
  background-color: ${(props) => props.backgroundColor};
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
  }
`;

const WavesNoAnimation = (props) => {
  return (
    <WaveSVG
      backgroundColor={props.backgroundColor}
      waveColor={props.waveColor}
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <path
        fill={`${props.waveColor}`}
        fillOpacity="1"
        d="M0,224L80,186.7C160,149,320,75,480,69.3C640,64,800,128,960,149.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </WaveSVG>
  );
};

export default WavesNoAnimation;
