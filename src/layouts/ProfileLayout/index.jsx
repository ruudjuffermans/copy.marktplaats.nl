import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components";

const PageWrapper = styled.div`
  background-color: #f0efed;
`;

const ContentWrapper = styled.div`
  margin: auto;
  max-width: 1000px;
  padding: 8px 12px;
`;

const ProfileLayout = () => {
  const loc = useLocation();
  return (
    <>
      <Header location={loc} />
      <PageWrapper>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default ProfileLayout;
