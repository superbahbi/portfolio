import React from "react";
import styled from "styled-components";
const Container = styled.section`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  color: #000;
`;
const Content = ({ children, id, backgroundColor, height }) => {
  return (
    <Container id={id} backgroundColor={backgroundColor} height={height}>
      {children}
    </Container>
  );
};

export default Content;
