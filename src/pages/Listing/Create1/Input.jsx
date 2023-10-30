import { useField, ErrorMessage } from "formik";
import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";

const FormControlGroup = styled.div`
  position: relative;
  margin: 2px;
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

const FormSelect = styled.select`
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

const FormInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f7f7f6;
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
  margin: 1px;

  :focus {
    border-color: #116db4;
    box-shadow: 0 0 0 3px rgb(17 109 180 / 20%),
      inset 0 2px 0 0 hsl(213deg 8% 74% / 20%);
    outline: 0;
  }
`;

const LoginInput = ({ show = true, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControlGroup style={{ display: show ? "block" : "none" }}>
      <FormSelect
        name="colorss"
        value={123}
        className={show ? "show" : ""}
        {...field}
        {...props}
        style={{ display: show ? "block" : "none" }}
      >
        <option value="" label="Select a color" disabled>
          Select a color
        </option>
        <option value="red" label="red">
          red
        </option>
        <option value="blue" label="blue">
          blue
        </option>

        <option value="green" label="green">
          green
        </option>
      </FormSelect>
    </FormControlGroup>
  );
};

export default LoginInput;
