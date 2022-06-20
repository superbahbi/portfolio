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

/* Content Components
  @params {string} id - section id of the content
  @params {theme.color} backgroundColor - background color of the content
*/
const Content = ({ children, id, backgroundColor }) => {
  return (
    <Container id={id} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

export default Content;
