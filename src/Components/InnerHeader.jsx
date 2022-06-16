import React from "react";
import styled from "styled-components";

const InnerHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;
const InnerHeader = ({ children }) => {
  return <InnerHeaderContainer>{children}</InnerHeaderContainer>;
};

export default InnerHeader;
