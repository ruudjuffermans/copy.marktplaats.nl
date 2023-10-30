import { useField, ErrorMessage } from "formik";
import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";

const FormControlGroup = styled.div`
  position: relative;

  :not(:first-child) {
    margin-top: 12px;
  }
`;

const FormLabel = styled.label`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: block;
  margin-bottom: 4px;

  ${media.xs(css`
    display: block;
  `)};
`;

const FormInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border: 1px solid #b6bbc1;
  border-radius: 3px;
  box-shadow: inset 0 3px 0 0 hsl(213deg 8% 74% / 20%);
  box-sizing: border-box;
  color: #2d3c4d;
  display: inline-block;
  height: 35px;
  padding: 4px 8px;
  vertical-align: middle;
  width: 100%;

  :focus {
    border-color: #116db4;
    box-shadow: 0 0 0 3px rgb(17 109 180 / 20%),
      inset 0 2px 0 0 hsl(213deg 8% 74% / 20%);
    outline: 0;
  }
`;

const LoginInput = ({ label, placeholder, children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControlGroup>
      <FormLabel>{label}</FormLabel>
      <FormInput
        type={field.type}
        name={field.name}
        className={meta.touched && meta.error ? "input_error_border" : ""}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className="input_error_message">error</div>
      )}
      {children}
    </FormControlGroup>
  );
};

export default LoginInput;
