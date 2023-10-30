import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import ResetInput from "./Input";
import styled, { css } from "styled-components";
import media from "utils/media";
import Text from "components/Text";

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

const MediumText = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;

  margin-bottom: 32px;
`;

const resetFormDataObject = {
  email: "",
};

const ResetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [resetFormData, setResetFormData] = useState(resetFormDataObject);
  const { email, password, remember } = resetFormData;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setResetFormData({ ...resetFormData, [name]: value });
  };

  const resetValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          email,
          password,
        }
      );
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
      }}
      validationSchema={resetValidation}
      onSubmit={() => {
        formSubmit();
      }}
    >
      {(formik) => (
        <Form>
          <MessageBlock>
            <Text type="h2">
              Voer je e-mail adres in om je wachtwoord <br />
              opnieuw in te stellen
            </Text>
            <ResetInput
              type="text"
              name="email"
              label="E-mailadres"
              onChange={handleFormChange}
            />

            <MediumText>
              Wij sturen een link naar het door jou ingevulde e-mailadres.
              Gebruik deze link om vervolgens een nieuw wachtwoord op
              Marktplaats.nl in te stellen.
            </MediumText>
            <FormControlGroup>
              <FormSubmitButton type="submit">Versturen</FormSubmitButton>
            </FormControlGroup>
          </MessageBlock>
        </Form>
      )}
    </Formik>
  );
};

export default ResetForm;
