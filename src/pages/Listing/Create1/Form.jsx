import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import ListingInput from "./Input";
import styled, { css } from "styled-components";
import media from "utils/media";

const FormControlGroup = styled.div`
  position: relative;
`;

const Container = styled.div`
  width: calc(100% - 40px);

  .show {
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
`;

const InputBox = styled.div`
  width: calc(33% - 5px);
  display: inline-block;
  min-width: 250px;
  margin-bottom: 6px;
  transition: opacity 0.2s ease-out;
  opacity: 0;
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

  margin: 24px 0 0;
  padding: 15px 14px;

  :disabled {
    background: #e6e4e1;
    box-shadow: none;
    color: #fff;
    cursor: default;
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

const SmallText = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;

  margin-top: 4px;
`;

const loginFormDataObject = {
  cat1: "",
  cat2: "",
  cat3: "",
};

const CreateListingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState(loginFormDataObject);
  const { cat1, cat2, cat3 } = loginFormData;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
    console.log(loginFormData);
  };

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmit = async () => {
    console.log(cat1);
    try {
      navigate(`/create/${cat1}-${cat2}`);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        cat1,
        cat2,
        cat3,
      }}
      onSubmit={() => {
        formSubmit();
      }}
    >
      {(formik) => (
        <Form>
          <Container>
            <InputBox className="show">
              <ListingInput
                show={true}
                type="text"
                name="cat1"
                onChange={handleFormChange}
              />
            </InputBox>
            <InputBox className={loginFormData.cat1 ? "show" : ""}>
              <ListingInput
                show={loginFormData.cat1}
                type="text"
                name="cat2"
                onChange={handleFormChange}
              />
            </InputBox>
            <InputBox className={loginFormData.cat2 ? "show" : ""}>
              <ListingInput
                show={loginFormData.cat2}
                type="text"
                name="cat3"
                onChange={handleFormChange}
              />
            </InputBox>
          </Container>
          <FormControlGroup>
            <FormSubmitButton type="submit" disabled={!loginFormData.cat3}>
              Verder
            </FormSubmitButton>
          </FormControlGroup>
        </Form>
      )}
    </Formik>
  );
};

export default CreateListingForm;
