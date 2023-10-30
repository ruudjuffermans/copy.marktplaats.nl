import Icon from "components/Icon";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import media from "utils/media";

const NavEl = styled.nav`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  height: 48px;
  line-height: 16px;
  margin: 8px 12px;
  max-width: 100%;
  position: relative;
  z-index: 50;
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%), 0 -1px 2px rgb(0 0 0 / 5%);

  ${media.xs(css`
    margin: 0;
  `)};
`;
const MenuBar = styled.div`
  position: relative;
  z-index: 3;
  background-color: #fff;

  ${media.xs(css`
    align-items: center;
    display: flex;
    flex-direction: column;
  `)};
`;

const MenuWrapper = styled.div`
  background-color: #fff;
  ${media.xs(css`
    display: flex;
    max-width: 980px;
  `)};

  ${media.md(css`
    /* min-width: 980px; */
    overflow: visible;
  `)};
`;

const MenuItem = styled.div`
  display: none;
  ${(props) =>
    !props.dropdown &&
    css`
      border-left: 1px solid #e5e5e4;
      display: none;
    `}

  ${(props) =>
    media[props.display](css`
      display: block;
    `)};

  ${(props) =>
    props.dropdown &&
    props.open &&
    css`
      position: relative;
      ::before {
        background: #fff;
        bottom: -2px;
        content: "";
        height: 2px;
        position: absolute;
        right: 0;
        width: 1800px;
      }
    `}
`;

const MenuItemLink = styled.a`
  color: #2d3c4d;
  display: block;
  line-height: 24px;
  padding: 12px;
  text-decoration: none;
  :hover {
    background-color: #e7edf8;
    outline: 0;
    text-decoration: underline;
  }
`;

const MenuItemExpand = styled.div`
  color: #2d3c4d;
  display: block;
  line-height: 24px;
  padding: 12px;
  text-decoration: none;

  align-items: center;
  box-shadow: 0 1px 2pxrgba (0, 0, 0, 0.15), 0 -1px 2pxrgba (0, 0, 0, 0.05);
  cursor: pointer;
  display: flex;
  flex: 1 0 auto;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  outline: 0;
  position: relative;

  :hover {
    background-color: #e7edf8;
    outline: 0;
    text-decoration: underline;
  }

  ${(props) =>
    !props.dropdown &&
    css`
      border-left: 1px solid #e5e5e4;
      display: none;
    `}

  ${media.xs(css`
    box-shadow: none;
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
  `)};

  ${(props) =>
    props.dropdown &&
    props.open &&
    css`
      position: relative;
      ::before {
        background: #fff;
        bottom: -2px;
        content: "";
        height: 2px;
        position: absolute;
        right: 0;
        width: 1800px;
      }
    `}
`;

const CatBox = styled.span`
  flex: 1 1 auto;
`;

const CatIcon = styled.span`
  flex: 0 0 auto;
`;

const Overlay = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 90%, transparent);
  display: block;
  height: 100vh;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 30px;
  visibility: hidden;
  z-index: 1;

  ${(props) =>
    props.open &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;

const CategoryMenu = styled.ul`
  margin: 0 0 172px;
  max-width: 980px;
  padding: 0;
  width: 100%;

  ${media.xs(css`
    margin: 0;
  `)};

  ${media.sm(css`
    column-count: 3;
  `)};

  ${media.md(css`
    column-count: 4;
  `)};
`;

const CategoryMenuItem = styled.li`
  list-style: none;

  ${media.md(css`
    break-inside: avoid-column;
    width: 240px;
  `)};
`;

const CategoryMenuItemWrapper = styled.div`
  flex: 0 0 auto;
`;

const CategoryMenuItemLink = styled.a`
  color: #2d3c4d;
  display: block;
  line-height: 24px;
  padding: 12px;
  text-decoration: none;

  border-radius: 4px;
  padding: 8px;

  :hover {
    background-color: #e7edf8;
    outline: 0;
    .underline {
      text-decoration: underline;
    }
  }
`;

const FoldOut = styled.div`
  -webkit-overflow-scrolling: touch;
  background: #fff;
  box-shadow: 0 4px 4px rgb(0 0 0 / 14%), 0 4px 4px rgb(0 0 0 / 14%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 172px);
  opacity: 0;
  position: relative;
  transform: translateY(-50px);
  visibility: hidden;
  width: 100%;
  z-index: 2;

  ${media.xs(css`
    border-top: 1px solid transparent;
  `)};

  ${media.sm(css`
    align-items: center;
    flex-direction: column;
    height: auto;
    overflow-y: visible;
    padding: 16px 48px;
  `)};

  ${(props) =>
    props.open &&
    css`
      opacity: 1;
      transform: translateY(0);
      visibility: visible;

      ${media.xs(css`
        border-color: #e5e5e4;
      `)};
    `};
`;

const GenMenuItem = ({ icon, title, display = "xs" }) => {
  return (
    <MenuItem display={display}>
      <MenuItemLink>
        <Icon
          name={icon}
          weight="100"
          rotate={"70"}
          size={"24px"}
          scale={"3"}
          color={"grey"}
          style={{ marginRight: "8px", backgroundSize: "auto 100%" }}
        />
        {title}
      </MenuItemLink>
    </MenuItem>
  );
};

const GenCatMenuItem = ({ icon, title }) => {
  return (
    <CategoryMenuItem>
      <CategoryMenuItemWrapper>
        <CategoryMenuItemLink>
          <Icon
            name={icon}
            weight="100"
            size={"16px"}
            color={"black"}
            style={{ marginRight: "8px" }}
          />
          <span className="underline">{title}</span>
        </CategoryMenuItemLink>
      </CategoryMenuItemWrapper>
    </CategoryMenuItem>
  );
};

const Nav = () => {
  const [userCatMenu, setCatMenu] = useState(false);
  const toggleCatMenu = () => {
    console.log("hitt");
    return setCatMenu(!userCatMenu);
  };
  const catmenu = useRef(null);
  return (
    <>
      <NavEl>
        <MenuBar>
          <MenuWrapper>
            <MenuItemExpand dropdown open={userCatMenu} onClick={toggleCatMenu}>
              <CatBox>Alle categorieën</CatBox>
              <CatIcon>
                <Icon
                  name={"expand_more"}
                  weight="100"
                  rotate={userCatMenu ? "180deg" : "0"}
                  size={"16px"}
                  color={"black"}
                />
              </CatIcon>
            </MenuItemExpand>
            <GenMenuItem icon="local_shipping" title="Auto's" />
            <GenMenuItem icon="scene" title="Huis en Inrichting" />
            <GenMenuItem
              icon="garden_cart"
              title="Tuin en Terras"
              display="sm"
            />
            <GenMenuItem icon="styler" title="Kleding | Dames" display="md" />
            <GenMenuItem
              icon="cast_connected"
              title="Audio, Tv en Foto"
              display="md"
            />
            <GenMenuItem
              icon="baby_changing_station"
              title="Kinderen en Baby's"
            />
          </MenuWrapper>
        </MenuBar>
        <Overlay open={userCatMenu} />
        <FoldOut open={userCatMenu}>
          <CategoryMenu>
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />
            <GenCatMenuItem icon="person" title="123" />

            <CategoryMenuItem>
              <CategoryMenuItemLink>
                <Icon
                  name={"person"}
                  weight="100"
                  size={"16px"}
                  color={"black"}
                  style={{ marginRight: "8px" }}
                />
                <span className="underline">123</span>
              </CategoryMenuItemLink>
            </CategoryMenuItem>
            <CategoryMenuItem>
              <CategoryMenuItemLink>
                <Icon
                  name={"person"}
                  weight="100"
                  size={"16px"}
                  color={"black"}
                  style={{ marginRight: "8px" }}
                />
                <span className="underline">123</span>
              </CategoryMenuItemLink>
            </CategoryMenuItem>
            <CategoryMenuItem>
              <CategoryMenuItemLink>
                <Icon
                  name={"person"}
                  weight="100"
                  size={"16px"}
                  color={"black"}
                  style={{ marginRight: "8px" }}
                />
                <span className="underline">123</span>
              </CategoryMenuItemLink>
            </CategoryMenuItem>
          </CategoryMenu>
        </FoldOut>
      </NavEl>
    </>
  );
};

export default Nav;
