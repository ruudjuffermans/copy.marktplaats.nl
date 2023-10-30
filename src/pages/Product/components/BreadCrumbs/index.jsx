import Display from "components/Display";
import Icon from "components/Icon";
import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";

const DisplayBlockFull = styled(Display)`
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;
  display: contents;

  ${media.xs(css`
    padding: 0 16px;

    flex: 0 0 100%;
    max-width: 100%;
  `)};

  ${media.sm(css`
    flex: 0 0 100%;
    max-width: 100%;
    display: block;
  `)};

  ${media.md(css`
    padding: 0;

    flex: 0 0 100%;
    max-width: 100%;
  `)};
`;

const Button = styled.button`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #c2c2c1;
  padding: 0 12px;
  line-height: 34px;
  border-radius: 18px;
  background-color: #fff;
  color: #2d3c4d;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;

  margin-right: 16px;

  display: none;

  ${media.sm(css`
    display: inline-block;
  `)};
`;

const BreadCrumbsNav = styled.nav`
  background-color: #fff;
  padding: 12px 8px;
  width: 100%;

  ${media.sm(css`
    background-color: transparent;
    padding: 0 2px 16px;
  `)};
`;

const Level = styled.a`
  color: #116db4;
  cursor: pointer;
  text-decoration: none;
`;

const LevelHide = styled.a`
  color: #116db4;
  cursor: pointer;
  text-decoration: none;

  display: none;

  ${media.sm(css`
    display: inline-block;
  `)};
`;

const Advertentie = styled.span`
  text-decoration: none;

  display: none;

  ${media.sm(css`
    display: inline-block;
  `)};
`;

const IconDisplay = styled(Icon)`
  display: none;

  ${media.sm(css`
    display: inline-block;
  `)};
`;

const IconHide = styled(Icon)`
  display: inline-block;

  ${media.sm(css`
    display: none;
  `)};
`;

const BreadCrumbs = () => {
  return (
    <DisplayBlockFull d={["contents", "contents", "block"]}>
      <BreadCrumbsNav>
        <Button>
          <IconDisplay
            name={"arrow_back"}
            weight="100"
            size={"30px"}
            color={"black"}
          />
          terug
        </Button>
        <LevelHide>Home</LevelHide>
        <IconDisplay
          name={"chevron_right"}
          weight="100"
          size={"24px"}
          color={"black"}
        />
        <IconHide
          name={"chevron_left"}
          weight="100"
          size={"24px"}
          color={"black"}
        />
        <Level>Speelgoed</Level>
        <IconDisplay
          name={"chevron_right"}
          weight="100"
          size={"24px"}
          color={"black"}
        />

        <Advertentie>Advertentie</Advertentie>
      </BreadCrumbsNav>
    </DisplayBlockFull>
  );
};

export default BreadCrumbs;
