import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #2d3c4d;
  position: relative;
  padding-top: 16px;
`;
const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 991px;
  padding: 0 8px;
`;

const Title = styled.div`
  font-family: Roboto Slab, "serif";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #fdfdfd;
  float: left;
  margin: 12px 0 0;
  padding: 4px;
`;

const NavBar = styled.div`
  clear: both;

  .active {
    border-bottom-color: #fdfdfd;
    color: #fdfdfd;
  }
`;

const Tab = styled(Link)`
  /* clear: both; */
  border-bottom-color: #fdfdfd;
  border-bottom: 2px solid transparent;
  font-family: Roboto, sans-serif;
  color: #e6e4e1;
  display: inline-block;
  font-size: 16px;
  line-height: 23px;
  margin: 0;
  outline: 0;
  padding: 8px;
  text-decoration: none;
  vertical-align: middle;

  .active {
    border-bottom-color: #fdfdfd;
    color: #fdfdfd;
  }

  :hover {
    border-bottom-color: #fdfdfd;
    color: #fdfdfd;
  }
`;

const Header = ({ location }) => {
  console.log(location);
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>Mijn Profiel</Title>
        <NavBar>
          <Tab
            className={location.pathname === "/profile/my-listings" && "active"}
            to="/profile/my-listings"
          >
            Advertenties
          </Tab>
          <Tab
            className={
              location.pathname === "/profile/my-favorites" && "active"
            }
            to="/profile/my-favorites"
          >
            Favorieten
          </Tab>
          <Tab
            className={location.pathname === "/messages" && "active"}
            to="/messages"
          >
            Berichten
          </Tab>
          <Tab
            className={location.pathname === "/notifications" && "active"}
            to="/notifications"
          >
            Meldingen
          </Tab>
          <Tab
            className={location.pathname === "/profile/my-profile" && "active"}
            to="/profile/my-profile"
          >
            Profiel
          </Tab>
        </NavBar>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
