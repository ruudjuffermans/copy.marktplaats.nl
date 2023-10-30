import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import LoginInput from "./Input";
import styled, { css } from "styled-components";
import media from "utils/media";
import TextLink from "components/TextLink";
import LoginCheckBox from "./CheckBox";
import { LOGIN_USER } from "../../../../state/userSlice";

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

function pageHeading(heading, subHeading) {
  return subHeading ? (
    <>
      <PageHeadingH2>{heading}</PageHeadingH2>
      <PageSubHeading>{subHeading}</PageSubHeading>
    </>
  ) : (
    <PageHeadingH1>{heading}</PageHeadingH1>
  );
}

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

const PageCard = styled.div`
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 14%);
  color: #2d3c4d;
  overflow: hidden;
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

const AccountLayout = ({ mw, heading, subHeading, children }) => {
  return (
    <PageWrapper>
      <PageContent mw={mw}>
        <PageHeadingH2>{heading}</PageHeadingH2>
        <PageSubHeading>{subHeading}</PageSubHeading>
        <PageCard>{children}</PageCard>
        {heading === "login" && (
          <TermsConditions>
            * Door in te loggen via Google accepteer je onze{" "}
            <TextLink href="#" target="_blank">
              Gebruiksvoorwaarden
            </TextLink>{" "}
            en{" "}
            <TextLink href="#" target="_blank">
              Privacyverklaring
            </TextLink>
            .
          </TermsConditions>
        )}
      </PageContent>
    </PageWrapper>
  );
};

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

const FieldSet = styled.fieldset`
  border: none;
  border-top: 1px solid #e6e4e1;
  margin-top: 24px;
  padding-top: 24px;

  legend {
    padding: 0 12px;
  }
`;

const FormControlGroup = styled.div`
  position: relative;
  text-align: center;
  ${media.sm(css`
    padding-left: 25%;
    padding-right: 25%;
  `)};

  :not(:first-child) {
    margin-top: 12px;
  }

  :last-child {
    margin-top: 24px;
  }
`;

const ForgotPasswordLink = styled.div`
  text-align: right;
  line-height: 35px;
  ${media.sm(css`
    position: absolute;
    right: 0;
    top: 0;
  `)};
`;

const FormSubmitButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  min-height: 40px;
  padding: 11px 24px;
  text-align: center;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  font-family: Roboto Slab, "serif";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  background: #116db4;
  box-shadow: inset 0 -2px 0 0 #0f5f9d;
  color: #fff;
`;

const Ledgend = styled.legend`
  font-style: normal;

  font-size: 14px;
  line-height: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

const SmallText = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;

  margin-top: 4px;
`;

const loginFormDataObject = {
  email: "",
  password: "",
  remember: false,
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState(loginFormDataObject);
  const { email, password, remember } = loginFormData;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleFormChangeToggle = () => {
    setLoginFormData({ ...loginFormData, remember: !remember });
  };

  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().required("Password is required"),
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/login`,
        {
          email,
          password,
        }
      );
      console.log(data);
      Cookies.set("user", JSON.stringify(data));
      dispatch(LOGIN_USER(data));
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <CardBlock>
      <Formik
        enableReinitialize
        initialValues={{
          email,
          password,
          remember,
        }}
        validationSchema={loginValidation}
        onSubmit={() => {
          formSubmit();
        }}
      >
        {(formik) => (
          <Form>
            <FieldSet>
              <Ledgend align="center">Log in met je e-mailadres</Ledgend>
              <Wrapper>
                <LoginInput
                  type="text"
                  name="email"
                  label="E-mailadres"
                  placeholder="E-mailadres"
                  onChange={handleFormChange}
                />
                <LoginInput
                  type="password"
                  name="password"
                  label="Wachtwoord"
                  placeholder="Wachtwoord"
                  onChange={handleFormChange}
                  bottom
                >
                  <ForgotPasswordLink>
                    <TextLink href="/reset">Wachtwoord vergeten?</TextLink>
                  </ForgotPasswordLink>
                </LoginInput>
                <LoginCheckBox
                  type="checkbox"
                  name="remember"
                  placeholder="Ingelogd blijven"
                  onChange={handleFormChangeToggle}
                >
                  <SmallText>
                    Gebruik je een publieke of gedeelde computer?
                    <br />
                    Zet het vinkje voor ingelogd blijven dan uit ter bescherming
                    van je account.
                  </SmallText>
                </LoginCheckBox>
                <FormControlGroup>
                  <FormSubmitButton type="submit">
                    Inloggen met je e-mailadres
                  </FormSubmitButton>
                </FormControlGroup>
              </Wrapper>
            </FieldSet>
          </Form>
        )}
      </Formik>
    </CardBlock>
  );
};

export default LoginForm;
