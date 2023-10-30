import Icon from "components/Icon";
import Nav from "layouts/MainLayout/components/Nav";
import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";

const Listing = styled.a`
  display: flex;
  flex: 0 48%;
  margin: 1%;
  min-width: 136px;
  width: 100%;

  ${media.xs(css`
    flex: 0 23%;
    max-width: 240px;
  `)};
  ${media.lg(css`
    flex: 0 19%;
    margin: 0.5%;
    min-width: 168px;
  `)};
`;

const ListingContent = styled.article`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%), 0 -1px 2px rgb(0 0 0 / 5%);

  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.md(css`
    /* flex: 0 23%; */
    max-width: 240px;
  `)};

  :hover {
    box-shadow: 0 1px 4px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 14%);
  }
`;

const ListingImage = styled.img`
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  height: 114px;

  ${media.sm(css`
    height: 132px;
  `)};
`;

const ListingBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const ListingTitle = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #116db4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ListingPrice = styled.strong`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin-top: 4px;
`;
