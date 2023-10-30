import Display from "components/Display";
import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";
import ASide from "./components/SellerSidebar";
import BreadCrumbs from "./components/BreadCrumbs";
import MainSide from "./components/MainSide";
import PopularSearches from "./components/PopularSearches";

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
  flex-direction: column;
`;

const PageContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${media.xxs(css`
    padding-top: 16px;
  `)};
`;

const SingleProduct = () => {
  return (
    <Main>
      <PageContent>
        <BreadCrumbs />
        <MainSide />
        <ASide />
      </PageContent>
      <PopularSearches />
    </Main>
  );
};

export default SingleProduct;
