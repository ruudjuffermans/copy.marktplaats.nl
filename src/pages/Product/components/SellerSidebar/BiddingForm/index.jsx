import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import BiddingInput from "./Input";
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
  font-family: Roboto Slab, "serif";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  background: #116db4;
  color: #fff;
  background-color: #fff;
  border-color: #116db4;
  color: #116db4;
  width: 100%;

  :hover {
    background-color: #e7edf8;
    border-color: #116db4;
    color: #116db4;
  }
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
      }}
      validationSchema={resetValidation}
      onSubmit={() => {
        formSubmit();
      }}
    >
      {(formik) => (
        <Form>
          <BiddingInput
            type="number"
            name="amount"
            step="0.01"
            onChange={handleFormChange}
          />

          <FormControlGroup>
            <FormSubmitButton type="submit">Plaats bod</FormSubmitButton>
          </FormControlGroup>
        </Form>
      )}
    </Formik>
  );
};

export default ResetForm;
