import React, { Suspense, lazy } from "react";
import { Text, Stack, Heading } from "@chakra-ui/react";
import styled, { keyframes } from "styled-components";
// import Meteor from "./Animation/Meteor";
import Star from "./Animation/Star";
const LazyMeteor = React.lazy(() => import("./Animation/Meteor"));

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
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyMeteor amount={15} />
      </Suspense>
      <Star amount={500} />
      <InnerHeaderContainer>
        <Stack>
          <InnerHeaderText
            fontWeight="100"
            className="animation"
            color="brand.700"
          >
            {name}
          </InnerHeaderText>
          <Text fontSize="2xl" color="brand.700">
            {position}
          </Text>
        </Stack>
      </InnerHeaderContainer>
    </>
  );
};

export default InnerHeader;
