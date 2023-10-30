import TextLink from "components/TextLink";
import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";

const Form = styled.form`
  margin: 20px;
`;

const FieldSet = styled.fieldset`
  border: none;
  border-top: 1px solid #e6e4e1;
  margin-top: 24px;
  padding-top: 214px;

  legend {
    padding: 0 12px;
  }
`;
const Ledgend = styled.legend`
  font-style: normal;

  font-size: 14px;
  line-height: 20px;
  font-family: "Roboto slab", sans-serif;
  font-weight: 300;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;
const FormControlGroup = styled.div`
  position: relative;

  :not(:first-child) {
    margin-top: 12px;
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

const FormLabel = styled.label`
  font-family: "Roboto slab", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: none;
  margin-bottom: 4px;

  ${media.xs(css`
    display: block;
  `)};

  ${media.sm(css`
    box-sizing: border-box;
    left: 0;
    padding: 7.5px 12px 7.5px 0;
    position: absolute;
    text-align: right;
    top: 0;
    width: 25%;
  `)};
`;

const FormInput = styled.input`
  font-family: "Roboto slab", sans-serif;
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

const FormToggle = styled.label`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  display: block;
  position: relative;
`;

const ToggleInput = styled.input`
  left: 10px;
  margin: 0;
  outline: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  ${(props) => {
    console.log(props);
    return;
  }}
`;

const ToggleSpan = styled.span`
  font-family: var(--mp-font-base--light, "Roboto slab", sans-serif);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  border: 1px solid #b6bbc1;
  border-radius: 3px;
  display: block;
  outline: 0;
  padding: 6.5px 4px 6.5px 30px;
  pointer-events: none;

  background: #e7f0f7;
`;

const LoginForm = () => {
  return (
    <Form>
      <FieldSet>
        <Ledgend align="center">Log in met je e-mailadres</Ledgend>
        <Wrapper>
          <FormControlGroup>
            <FormLabel>E-mailadres</FormLabel>
            <FormInput></FormInput>
          </FormControlGroup>
          <FormControlGroup>
            <FormLabel>Wachtwoord</FormLabel>
            <FormInput></FormInput>
            <ForgotPasswordLink>
              <TextLink href="/account/forgot">Wachtwoord vergeten?</TextLink>
            </ForgotPasswordLink>
          </FormControlGroup>
          <FormControlGroup>
            <FormToggle>
              <ToggleInput type="checkbox"></ToggleInput>
              <ToggleSpan>Ingelogd blijven</ToggleSpan>
            </FormToggle>
          </FormControlGroup>
          <FormControlGroup>
            <FormInput type="hidden"></FormInput>
          </FormControlGroup>
          <ForgotPasswordLink>
            <TextLink href="/account/forgot">Wachtwoord vergeten?</TextLink>
          </ForgotPasswordLink>

          <FormControlGroup>123</FormControlGroup>
        </Wrapper>
      </FieldSet>
    </Form>
  );
};

export default LoginForm;
