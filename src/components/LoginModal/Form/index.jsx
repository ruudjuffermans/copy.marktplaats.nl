import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import LoginInput from "./Input";
import styled, { css } from "styled-components";
import TextLink from "components/TextLink";
import LoginCheckBox from "./CheckBox";

const FieldSet = styled.fieldset`
  border: none;
  border-top: 1px solid #e6e4e1;
  margin-top: 24px;
  padding-top: 24px;

  legend {
    padding: 0 12px;
  }
`;

const Centering = styled.div`
  margin: auto 0;
`;

const FormControlGroup = styled.div`
  margin-bottom: 24px;
  margin-top: 12px;
`;

const ForgotPasswordLink = styled.div`
  text-align: right;
  line-height: 35px;
`;

const FormSubmitButton = styled.button`
  font-family: Roboto Slab, "serif";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  background: #116db4;
  box-shadow: inset 0 -2px 0 0 #0f5f9d;
  color: #fff;

  width: 100%;
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
      dispatch({ type: "LOGIN", payload: data });
      Cookies.set("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
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
        <Centering>
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
                    <TextLink href="/account/reset">
                      Wachtwoord vergeten?
                    </TextLink>
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
                  <FormSubmitButton type="submit">Inloggen</FormSubmitButton>
                </FormControlGroup>
              </Wrapper>
            </FieldSet>
          </Form>
        </Centering>
      )}
    </Formik>
  );
};

export default LoginForm;
