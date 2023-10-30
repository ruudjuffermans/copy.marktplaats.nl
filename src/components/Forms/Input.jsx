import React from "react";
import { Field, ErrorMessage } from "formik";
import styled, { css } from "styled-components";
import TextError from "./TextError";

const StyledField = styled(Field)`
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormControl = styled.div`
  margin-bottom: 20px;
`;

const Error = styled.div`
  color: red;
`;

const Input = ({ label, name, ...rest }) => {
  return (
    <FormControl>
      <label htmlFor={name}>{label}</label>
      <StyledField id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </FormControl>
  );
};

export default Input;
