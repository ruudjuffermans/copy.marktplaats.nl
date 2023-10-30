import React from "react";
import LoginForm from "./Form";
import styled, { css } from "styled-components";
import media from "utils/media";

export const CardBlock = styled.div`
  padding: 16px;
  ${media.sm(css`
    padding: 20px;
  `)};

  cursor: default;
  tab-size: 4;
  --google-font-color-materialsymbolsoutlined: none;
  color: #2d3c4d;
  padding: 0;
  box-sizing: border-box;
  background-repeat: no-repeat;
  margin: 0;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;

  :not(:first-child) {
    border-top: 1px solid #e6e4e1;
  }
`;

const AccountNav = styled.div`
  text-align: center;
`;

const AccountTab = styled.a`
  padding: 8px 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  border-bottom: 2px solid transparent;
  box-sizing: border-box;
  color: #818a95;
  display: inline-block;
  line-height: 23px;
  margin: 0 8px;
  outline: 0;
  text-decoration: none;
  vertical-align: middle;

  ${(props) =>
    props.active &&
    css`
      font-family: Roboto, sans-serif;
      font-family: var(--mp-font-base, "Roboto", sans-serif);
      font-style: normal;
      font-weight: 400;
      border-bottom-color: #2d3c4d;
      color: #2d3c4d;
    `}

  :hover {
    border-bottom-color: #2d3c4d;
    color: #2d3c4d;
    text-decoration: none;
  }
`;

const Login = () => {
  return (
    <>
      <CardBlock>
        <AccountNav>
          <AccountTab active>Inloggen</AccountTab>
          <AccountTab href={"/register"}>Account Aanmaken</AccountTab>
        </AccountNav>
      </CardBlock>
      <CardBlock>
        <LoginForm />
      </CardBlock>
    </>
  );
};

export default Login;
