import styled, { css } from "styled-components";
import Icon from "components/Icon";
import Text from "components/Text";
import { useNavigate } from "react-router-dom";
import { useMediaMD, useMediaSM } from "utils/useMedia";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import useClickOutside from "utils/clickOutside";
import Cookies from "js-cookie";
import { MainHeaderButton, LinkButton } from "components/Button";
import { USERMENU_OPEN } from "state/uiSlice";
import { LOGOUT_USER } from "../../../../../state/userSlice";

const HeaderR = styled.div`
  flex: auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5px;
`;

const DropDown = styled.div`
  position: relative;
`;

const DropDownMenu = styled.ul`
  font-family: Roboto, sans-serif;
  text-size-adjust: 100%;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: #116db4;
  box-sizing: border-box;
  background: white;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.14) 0 1px 4px 1px;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  left: 0;
  min-width: 220px;
  position: absolute;
  top: 36px;
  z-index: 99999000010;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const DropDownMenuItem = styled.a`
  font-family: Roboto, sans-serif;
  text-size-adjust: 100%;
  font-weight: 400;
  list-style-type: none;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  display: block;
  outline: 0;
  overflow: hidden;
  padding: 12px 16px;
  text-align: inherit;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  border-bottom: 1px solid #f7f7f6;
  text-decoration: none;
  color: #116db4;

  :hover {
    background-color: #e7edf8;
    color: #116db4;
    text-decoration: underline;
  }
`;

const HeaderLink = ({ title, onClick, link }) => {
  const small = useMediaSM();
  return small ? (
    <HeaderButton onClick={onClick} href={link} title={title}>
      <Text>{title}</Text>
    </HeaderButton>
  ) : (
    <></>
  );
};

const HeaderButton = styled.a`
  display: flex;
  font-size: 12px;
  font-weight: 300;
  padding: 0 5px;
  min-height: 32px;
  line-height: 32px;
  border: 0;
  cursor: pointer;
  border-radius: 3px;
  :hover {
    color: #007bc5;
    background-color: #f7f7f6;
  }
`;

const HeaderBtn = ({ icon, title, link, onClick }) => {
  const medium = useMediaMD();

  return (
    <LinkButton to={link || "/"} title={title} onClick={onClick}>
      <Icon
        style={{ cursor: "pointer" }}
        name={icon}
        weight="100"
        scale={medium ? "0.8" : "1.0"}
        size={"30px"}
        color={"black"}
      />
      {medium && <Text>{title}</Text>}
    </LinkButton>
  );
};

const LinkButton2 = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 300;
  padding: 0 5px;
  min-height: 32px;
  line-height: 32px;
  color: #116db4;
  border: 0;
  cursor: pointer;
  border-radius: 3px;
  :hover {
    color: #007bc5;
    background-color: #f7f7f6;
  }
`;

const DropBtn = ({ icon, title, onClick }) => {
  const medium = useMediaMD();

  return (
    <LinkButton2 title={title} onClick={onClick}>
      <Icon
        style={{ cursor: "pointer" }}
        name={icon}
        weight="100"
        scale={medium ? "0.8" : "1.0"}
        size={"30px"}
        color={"black"}
      />
      {medium && <Text>{title}</Text>}
    </LinkButton2>
  );
};
const MainHeaderBtn = ({ icon, title, link }) => {
  const medium = useMediaMD();
  return (
    <MainHeaderButton to={link}>
      {icon && (
        <Icon
          name={icon}
          weight="100"
          size={"30px"}
          rotate="-20deg"
          color={"white"}
        />
      )}
      {medium && <Text color={"white"}>{title}</Text>}
    </MainHeaderButton>
  );
};

const RightSide = () => {
  const [userMenuSmall, setUserMenuSmall] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleUserMenuSmall = () => setUserMenuSmall(!userMenuSmall);
  const { user, ui } = useSelector((state) => ({ ...state }));
  const smallmenu = useRef(null);
  const medium = useMediaMD();

  const toggleUserMenu = () => {
    if (!medium) {
      dispatch(USERMENU_OPEN());
      setUserMenuSmall(false);
    } else {
      toggleUserMenuSmall();
    }
  };

  const logout = () => {
    Cookies.remove("user");
    dispatch(LOGOUT_USER());
    navigate(0);
  };

  useClickOutside(smallmenu, () => {
    setUserMenuSmall(false);
  });

  return (
    <HeaderR>
      <MainHeaderBtn
        icon={"push_pin"}
        title={"Plaats advertentie"}
        link={"/create"}
      />
      {user.user ? (
        <DropDown ref={smallmenu}>
          <DropBtn
            icon={"person"}
            title={user.user.username}
            onClick={toggleUserMenu}
          />
          <DropDownMenu isOpen={userMenuSmall}>
            <ul>
              <DropDownMenuItem href={"/"}>Mijn Advertenties</DropDownMenuItem>
            </ul>
            <ul>
              <DropDownMenuItem href={"/"}>Mijn Favorieten</DropDownMenuItem>
            </ul>
            <ul>
              <DropDownMenuItem href={"/"}>Zoekopdrachten</DropDownMenuItem>
            </ul>
            <ul>
              <DropDownMenuItem href={"/"}>Mijn Verkopers</DropDownMenuItem>
            </ul>
            <ul>
              <DropDownMenuItem href={"/"}>Recent bekeken</DropDownMenuItem>
            </ul>
            <ul>
              <DropDownMenuItem href={"/"}>Mijn Profiel</DropDownMenuItem>
            </ul>
            <ul>
              <DropDownMenuItem href={"/"}>Mijn Ervaringen</DropDownMenuItem>
            </ul>
            <ul>
              <DropDownMenuItem onClick={() => logout()}>
                Uitloggen
              </DropDownMenuItem>
            </ul>
          </DropDownMenu>
        </DropDown>
      ) : medium ? (
        <HeaderBtn icon={"person"} title={"inloggen"} link={"/login"} />
      ) : (
        <DropBtn icon={"person"} title={"Inloggen"} onClick={toggleUserMenu} />
      )}
      <HeaderBtn
        icon={"notifications"}
        title={"Meldingen"}
        link={"/notifications"}
      />
      <HeaderBtn icon={"sms"} title={"Berichten"} link={"/messages"} />
    </HeaderR>
  );
};

export default RightSide;
