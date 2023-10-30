import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";

const CategoryLinks = styled.div`
  align-self: flex-end;
  order: 44;

  display: flex;
  justify-content: center;
  background-color: #fff;
  margin-top: 32px;
  width: 100%;

  ${media.xxs(css`
    padding-top: 16px;
  `)};
`;

const PopularSearches = () => {
  return <CategoryLinks>PopularSearches</CategoryLinks>;
};

export default PopularSearches;
