import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Text from "components/Text";
import media from "utils/media";
import Icon from "components/Icon";
import TextLink from "components/TextLink";
import LoginForm from "./Form";
import Overlay from "components/Overlay";
import { LOGIN_CLOSE } from "state/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const ModalCard = styled.div`
  box-sizing: border-box;
  position: fixed;
  overflow: auto;
  outline: 0;
  -webkit-overflow-scrolling: touch;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  z-index: 3000060;
  width: 100%;
  height: 100%;

  ${media.xs(css`
    width: 360px;
    min-width: 360px;
    max-width: 360px;

    margin-right: -50%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    height: auto;
    min-height: auto;
    max-height: 90vh;
  `)}
`;

const Header = styled.div`
  border-bottom: 1px solid #e5e5e4;
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 0 8px;
`;

const HeaderButtonWrapper = styled.div`
  flex-grow: 0;
  min-width: 46px;
`;

const HeaderButton = styled.button`
  border: 1px solid;
  border-radius: 4px;
  height: 44px;
  padding: 0 8px;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  border-color: transparent;
  color: #116db4;

  :hover {
    background-color: #e7edf8;
    color: #116db4;
  }
`;

const HeaderTitle = styled.h5`
  padding: 16px 12px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const Content = styled.div`
  padding: 16px;
  flex: 1;
  overflow: auto;
`;

const LoginCenteringSpacing = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

const LoginModal = ({ modal, setModal }) => {
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ui.loginModal) {
      document.body.classList.add("body-lock");
    } else {
      document.body.classList.remove("body-lock");
    }
  }, [ui.loginModal]);

  return (
    <Overlay show={ui.loginModal} zIndex={99}>
      <ModalCard>
        <Header>
          <HeaderButtonWrapper>
            <HeaderButton onClick={() => dispatch(LOGIN_CLOSE())}>
              <Icon
                style={{ cursor: "pointer" }}
                name={"close"}
                weight="100"
                scale="0.8"
                size={"30px"}
                color={"black"}
              />
            </HeaderButton>
          </HeaderButtonWrapper>
          <HeaderTitle>Inloggen</HeaderTitle>
          <HeaderButton />
        </Header>
        <Content>
          <LoginForm />
          <LoginCenteringSpacing>
            <Text fontSize={"16px"} lineHeight={"22px"} fontFamily={0}>
              Nog geen account?{" "}
              <TextLink href="/account/register">Registreer hier</TextLink>
            </Text>
          </LoginCenteringSpacing>
          <Text>
            <span>
              Door in te loggen via Google accepteer je onze{" "}
              <a href="./#">Gebruiksvoorwaarden</a> en{" "}
              <a href="./#">Privacyverklaring</a>.
            </span>
          </Text>
        </Content>
      </ModalCard>
    </Overlay>
  );
};

export default LoginModal;
