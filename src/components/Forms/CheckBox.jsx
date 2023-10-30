import React from "react";
import { Field, ErrorMessage } from "formik";
import styled, { css } from "styled-components";
import TextError from "./TextError";

const FormControl = styled.div`
  margin-bottom: 20px;

  input {
    display: block;
    width: 33%;
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

const CheckBox = ({ label, name, options, ...rest }) => {
  return (
    <FormControl>
      <label>{name}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={options.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </FormControl>
  );
};

export default CheckBox;
