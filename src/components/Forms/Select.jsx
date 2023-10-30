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

  select {
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
  }
`;

const Error = styled.div`
  color: red;
`;

const Select = ({ label, name, options, ...rest }) => {
  return (
    <FormControl>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map(({ key, value }) => {
          return (
            <option key={value} value={value}>
              {key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </FormControl>
  );
};

export default Select;
