import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import RegisterInput from "./Input";
import styled, { css } from "styled-components";
import media from "utils/media";
import TextLink from "components/TextLink";
import { REGISTER_USER } from "../../../../state/userSlice";

export const CardBlock = styled.div`
  padding: 16px;
  ${media.sm(css`
    padding: 20px;
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

  :last-child {
    margin-top: 12px;
  }
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
  width: 100%;

  ${media.sm(css`
    float: right;
    width: auto;
  `)};
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
  max-width: 400px;
  margin: 0 auto;
`;

const SmallText = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
`;

const FormCancelButton = styled.a`
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
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  background: #f7f7f6;
  border-color: #e6e4e1;
  box-shadow: inset 0 -2px 0 0 #ebebe9;
  color: #2d3c4d;
  width: 100%;
  margin-top: 8px;

  ${media.sm(css`
    margin-top: 0;
    float: left;
    width: auto;
  `)};

  /* width: 100%; */

  /* margin-top: 8px; */
`;

const registerFormDataObject = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerFormData, setRegisterFormData] = useState(
    registerFormDataObject
  );
  const { username, email, password, passwordConfirm } = registerFormData;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  const registerValidation = Yup.object({
    username: Yup.string()
      .required("What's your First name ?")
      .min(2, "Fisrt name must be between 2 and 16 characters.")
      .max(16, "Fisrt name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().required("Password is required"),
    passwordConfirm: Yup.string().required("Given passwords do not match."),
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/register`,
        {
          email,
          password,
          passwordConfirm,
          username,
        }
      );
      console.log(response);

      dispatch(REGISTER_USER(response.data.token));
      Cookies.set(
        "user",
        JSON.stringify({
          token: response.data.token,
          email: response.data.email,
        })
      );
      navigate("/account/registered");
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <CardBlock>
      <Formik
        enableReinitialize
        initialValues={{
          username,
          email,
          password,
          passwordConfirm,
        }}
        validationSchema={registerValidation}
        onSubmit={() => {
          formSubmit();
        }}
      >
        {(formik) => (
          <Form>
            {error}
            <FieldSet>
              <Ledgend align="center">Gebruik je e-mailadres</Ledgend>
              <Wrapper>
                <RegisterInput
                  type="text"
                  name="username"
                  label="Je naam op Marktplaats"
                  onChange={handleFormChange}
                />
                <RegisterInput
                  type="text"
                  name="email"
                  label="E-mailadress"
                  onChange={handleFormChange}
                />
                <RegisterInput
                  type="password"
                  name="password"
                  label="Wachtwoord (minimaal 8 tekens, hoofdlettergevoelig)"
                  onChange={handleFormChange}
                  bottom
                />
                <RegisterInput
                  type="password"
                  name="passwordConfirm"
                  label="Herhaal wachtwoord (ter controle)"
                  onChange={handleFormChange}
                  bottom
                />
                <FormControlGroup>
                  <SmallText>
                    We zullen je met regelmaat e-mails sturen die gerelateerd
                    zijn aan onze diensten. Je kunt je te allen tijde voor deze
                    marketing e-mails afmelden via{" "}
                    <TextLink href="#">deze link</TextLink>, of middels de
                    uitschrijflink in de e-mails zelf.
                  </SmallText>
                </FormControlGroup>
                <FormControlGroup>
                  <SmallText>
                    * Door een account aan te maken met je e-mailadres of door
                    in te loggen met Google, word je een klant van Marktplaats
                    en accepteer je onze{" "}
                    <TextLink href="#" target="_blank">
                      Gebruiksvoorwaarden
                    </TextLink>{" "}
                    en{" "}
                    <TextLink href="#" target="_blank">
                      Privacyverklaring
                    </TextLink>
                    . Je zult systeemberichten gerelateerd aan je advertenties
                    en berichten van de klantenservice ontvangen.
                  </SmallText>
                </FormControlGroup>
                <FormControlGroup>
                  <FormSubmitButton type="submit">
                    Maak account aan
                  </FormSubmitButton>
                  <FormCancelButton>Annuleren</FormCancelButton>
                </FormControlGroup>
              </Wrapper>
            </FieldSet>
          </Form>
        )}
      </Formik>
    </CardBlock>
  );
};

export default RegisterForm;
