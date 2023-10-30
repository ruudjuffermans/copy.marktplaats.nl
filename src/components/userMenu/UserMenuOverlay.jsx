import React from "react";
import styled from "styled-components";

const HeaderOverlay = styled.div`
  display: ${(props) => (props.open ? "" : "none")};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.sidemenuoverlay};
  z-index: 100;
`;

const UserMenuOverlay = ({ isOpen, close }) => {
  return <HeaderOverlay open={isOpen} onClick={close} />;
};

export default UserMenuOverlay;
