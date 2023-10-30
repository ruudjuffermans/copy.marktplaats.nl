import React from "react";
import MainBar from "./MainBar";
import QueryBar from "./QueryBar";
import styled, { css } from "styled-components";
import media from "utils/media";
import { HeaderBottomRibbon, HeaderTopRibbon } from "./styled";

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  display: block;
  z-index: 99;
  width: 100%;
`;

const HeaderContentWrapper = styled.div`
  /* padding: 8px 10px; */

  ${media.sm(css`
    padding: 8px 10px;
  `)}
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

export const ContentWrapper = ({ children, bgColor }) => {
  return (
    <HeaderContentWrapper style={{ backgroundColor: bgColor }}>
      <HeaderContent>{children}</HeaderContent>
    </HeaderContentWrapper>
  );
};

const Header = ({ listingsPage }) => {
  return (
    <HeaderWrap>
      <HeaderTopRibbon />
      <ContentWrapper bgColor="#fff">
        <MainBar />
      </ContentWrapper>
      {listingsPage && (
        <ContentWrapper bgColor="rgb(247, 247, 246)">
          <QueryBar />
        </ContentWrapper>
      )}
      <HeaderBottomRibbon />
    </HeaderWrap>
  );
};

export default Header;
