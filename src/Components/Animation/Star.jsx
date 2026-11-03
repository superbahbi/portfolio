import React, { useMemo } from "react";
import styled from "styled-components";
import { createStarField, starFieldToShadow } from "../../lib/sky";

const StyledStar = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${(props) => props.starShadowBox};
`;

const Star = ({ amount = 100, seed = 1 }) => {
  const starShadowBox = useMemo(
    () => starFieldToShadow(createStarField(amount, seed)),
    [amount, seed],
  );

  return <StyledStar starShadowBox={starShadowBox} />;
};

export default Star;
