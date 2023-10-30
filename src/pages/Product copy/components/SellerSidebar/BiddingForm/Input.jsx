import { useField, ErrorMessage } from "formik";
import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";

const FormControlGroup = styled.div`
  border: 1px solid #c2c2c1;
  padding: 0 12px;
  margin-top: 4px;
  box-sizing: border-box;
  border-radius: 4px;
  display: inline-flex;
  height: 44px;
  overflow: hidden;
  position: relative;
  width: auto;

  :hover {
    border: 1px solid #007bc5;
  }

  :focus-within {
    border: 2px solid #0077d2;
  }
`;

const InputPrefix = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  align-items: center;
  color: #2d3c4d;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 4px;
`;

const FormInput = styled.input`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding: 0;
  background: 0 0;
  border: 0;
  color: #2d3c4d;
  margin: 0;
  outline: 0;
  width: 100%;
`;

const Flexible = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResetInput = ({ label, placeholder, children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Flexible>
      <FormControlGroup>
        <InputPrefix>€</InputPrefix>
        <FormInput
          step="0.01"
          pattern="^\d*(\.\d{0,2})?$"
          type={field.type}
          name={field.name}
          placeholder={placeholder}
          {...field}
          {...props}
        />
        {children}
      </FormControlGroup>
    </Flexible>
  );
};

export default ResetInput;
