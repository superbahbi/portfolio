import React from "react";
import styled from "styled-components";

const StyledStar = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${(props) => props.starShadowBox};
`;

const Star = ({ amount }) => {
  let colors = ["#fffcfa", "#faf0e6", "#f5d0a9", "#fcf990"];
  let starShadowBox = "";
  for (let i = 1; i < amount + 1; i += 1) {
    let x = Math.floor(Math.random() * 2820 + 1);
    let y = Math.floor(Math.random() * 1235 + 1);
    let size = Math.floor(Math.random() * 10 + 1);
    let colorIndex = Math.floor(Math.random() * 4);
    starShadowBox += `${x}px ${y}px 1px .${size}px ${colors[colorIndex]}${
      i === amount ? ";" : ", "
    } `;
  }
  return (
    <>
      <StyledStar starShadowBox={starShadowBox} />
    </>
  );
};

export default Star;
