import Icon from "components/Icon";
import Text from "components/Text";
import Cookies from "js-cookie";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const UserMenuEl = styled.div`
  display: block;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  right: -100px;
  top: 0;
  transform: ${(props) => (props.open ? "none" : "translateX(260px)")};
  transition: transform 0.3s ease-in-out;
  width: 220px;
  background-color: ${(props) => props.theme.colors.sidemenu};
  box-shadow: 0 0 40px 0 rgb(45 60 77 / 60%);
  z-index: 101;
`;

const UL = styled.ul`
  background: #fff;

  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

const Seperator = styled.li`
  background-color: ${(props) => props.theme.colors.sidemenu};
  height: 16px;
`;

const SideMenuItem = styled.a`
  background-color: transparent;
  cursor: pointer;
  display: block;
  outline: 0;
  overflow: hidden;
  padding: 12px 16px;
  text-align: inherit;
  width: 100%;
  text-decoration: none;
  color: #116db4;
  font-size: 14px;
  line-height: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.sidemenu};

  :hover {
    color: #007bc5;
    text-decoration: underline;
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

const SideMenuHeading = ({ children, close }) => {
  return (
    <li
      style={{
        padding: "12px 16px",
        backgroundColor: "#f7f7f6",
        borderBottom: "1px solid #f7f7f6",
        color: "#70849c",
      }}
    >
      <Text as="span" fontSize="16px" lineHeight="32px">
        {children}
      </Text>
      <a style={{ float: "right" }} onClick={close}>
        <Icon
          style={{ cursor: "pointer" }}
          name={"close"}
          weight="100"
          size={"30px"}
          color={"black"}
        />
      </a>
    </li>
  );
};

const SideMenuI = ({ children, to, onClick }) => {
  return (
    <li>
      <SideMenuItem href={to} onClick={onClick}>
        {children}
      </SideMenuItem>
    </li>
  );
};

const UserMenu = ({ isOpen, close, logout }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((user) => ({ ...user }));

  return (
    <UserMenuEl open={isOpen}>
      {user ? (
        <UL>
          <SideMenuHeading close={close}> Mijn Marktplaats</SideMenuHeading>
          <Seperator />
          <SideMenuI>Plaats Advertentie</SideMenuI>
          <Seperator />
          <SideMenuI>Advertentiemandje</SideMenuI>
          <SideMenuI>Berichten</SideMenuI>
          <SideMenuI>Mijn Advertenties</SideMenuI>
          <SideMenuI>Mijn Favorieten</SideMenuI>
          <SideMenuI>Zoekopdrachten</SideMenuI>
          <SideMenuI>Mijn Verkopers</SideMenuI>
          <SideMenuI>Recent Bekeken</SideMenuI>
          <SideMenuI>Mijn Profiel</SideMenuI>
          <SideMenuI>Mijn Ervaringen</SideMenuI>
          <Seperator />
          <SideMenuI>Help en Info</SideMenuI>
          <SideMenuI>Voorwaarden</SideMenuI>
          <SideMenuI>Veiligheidscentrum</SideMenuI>
          <Seperator />
          <SideMenuI onClick={() => logout()}>Uitloggen</SideMenuI>
        </UL>
      ) : (
        <UL>
          <SideMenuHeading close={close}> Mijn Marktplaats</SideMenuHeading>
          <Seperator />
          <SideMenuI>Plaats Advertentie</SideMenuI>
          <Seperator />
          <SideMenuI>Berichten</SideMenuI>
          <Seperator />
          <SideMenuI>Help en Info</SideMenuI>
          <SideMenuI>Voorwaarden</SideMenuI>
          <SideMenuI>Veiligheidscentrum</SideMenuI>
          <Seperator />
          <SideMenuI to={"/account/login"}>Inloggen</SideMenuI>
        </UL>
      )}
    </UserMenuEl>
  );
};

export default UserMenu;
