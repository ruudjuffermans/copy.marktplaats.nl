import TextLink from "components/TextLink";
import React from "react";
import RegisterForm from "./Form";
import styled, { css } from "styled-components";
import media from "utils/media";

const PageWrapper = styled.div`
  min-height: 100vh;
  margin-bottom: -150px;
  background-color: #f0efed;
`;

const PageContent = styled.div`
  max-width: ${(props) => (props.mw ? props.mw : "1000px")};
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-top: 20px;
  padding-bottom: 40px;

  padding-top: 12px;
  padding-bottom: 48px;

  ${media.xs(css`
    padding-left: 10px;
    padding-right: 10px;
  `)};
`;

const PageHeadingH1 = styled.h1`
  font-family: "roboto slab", "serif";
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
`;

const PageHeadingH2 = styled.h2`
  font-family: "roboto slab", "serif";
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  color: #2d3c4d;

  display: none;

  ${media.xs(css`
    display: block;
    text-align: center;
    margin-top: 24px;
  `)};
`;

const PageSubHeading = styled.div`
  margin-bottom: 24px;
  text-align: center;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
`;

const PageCard = styled.div`
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 14%);
  color: #2d3c4d;
  overflow: hidden;
`;

export const CardBlock = styled.div`
  padding: 16px;
  ${media.sm(css`
    padding: 20px;
  `)};

  :not(:first-child) {
    border-top: 1px solid #e6e4e1;
  }
`;

export const MessageBlock = styled.div`
  padding: 16px 24px;
  ${media.sm(css`
    padding: 32px 48px;
  `)};

  :not(:first-child) {
    border-top: 1px solid #e6e4e1;
  }
`;

const AccountNav = styled.div`
  text-align: center;
`;

const TermsConditions = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  color: #818a95;
  color: var(--mp-color-meta-text, #818a95);
  font-size: 14px;
  line-height: 20px;
  padding: 16px;
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

export function accountNav(page) {
  return (
    <CardBlock>
      <AccountNav>
        {page === "login" ? (
          <AccountTab active>Inloggen</AccountTab>
        ) : (
          <AccountTab href={"/login"}>Inloggen</AccountTab>
        )}

        {page === "register" ? (
          <AccountTab active>Account Aanmaken</AccountTab>
        ) : (
          <AccountTab href={"/register"}>Account Aanmaken</AccountTab>
        )}
      </AccountNav>
    </CardBlock>
  );
}

function subHeading() {
  return (
    <>
      Heb je al een account?{" "}
      <TextLink href="/account/login">Log dan nu in</TextLink>
    </>
  );
}

const Register = () => {
  return (
    <>
      <CardBlock>
        <AccountNav>
          <AccountTab href={"/login"}>Inloggen</AccountTab>
          <AccountTab active>Account Aanmaken</AccountTab>
        </AccountNav>
      </CardBlock>
      <CardBlock>
        <RegisterForm />
      </CardBlock>
    </>
  );
};

export default Register;
