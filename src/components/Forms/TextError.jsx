import React from "react";
import styled from "styled-components";

const Error = styled.div`
  color: red;
`;

const TextError = ({ children }) => {
  return <Error>{children}</Error>;
};

export default TextError;
