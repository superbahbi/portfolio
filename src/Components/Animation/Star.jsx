import React from "react";
import styled from "styled-components";
const StyledStar = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${(props) => props.starShadowBox};P
`;

const Star = ({ amount }) => {
  let starShadowBox = "";
  for (let i = 1; i < amount + 1; i += 1) {
    let x = Math.floor(Math.random() * 2820 + 1);
    let y = Math.floor(Math.random() * 1235 + 1);
    starShadowBox += `${x}px ${y}px #fff${i === amount ? ";" : ", "} `;
  }
  return (
    <>
      <StyledStar starShadowBox={starShadowBox} />
    </>
  );
};

export default Star;
