import React from "react";
import Box from "components/Box";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import styled, { css } from "styled-components";
import * as Yup from "yup";
import TextError from "./TextError";

const Input = styled(Field)`
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

const initialValues = {
  name: "",
  email: "",
  channel: "",
  address: "",
  numbers: [""],
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email format"),
  channel: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});

const FormEl = () => {
  return (
    <Box m="20px" p="20px">
      <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form style={{ flexDirection: "column", display: "flex" }}>
              <FormControl>
                <label htmlFor="name">Name</label>
                <Input id="name" type="text" name="name" />
                <ErrorMessage name="name" component={TextError} />
              </FormControl>
              <FormControl>
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" name="email" />
                <ErrorMessage name="email" />
              </FormControl>
              <FormControl>
                <label htmlFor="channel">Channel</label>
                <Input id="channel" type="text" name="channel" />
                <ErrorMessage name="channel">
                  {(errorMessage) => {
                    return <Error>{errorMessage}</Error>;
                  }}
                </ErrorMessage>
              </FormControl>
              <FormControl>
                <label htmlFor="address">Address</label>
                <Field name="address">
                  {(props) => {
                    const { field, form, meta } = props;
                    return <Input type="text" id="address" {...field} />;
                  }}
                </Field>
                <ErrorMessage name="address">
                  {(errorMessage) => {
                    return <Error>{errorMessage}</Error>;
                  }}
                </ErrorMessage>
              </FormControl>
              <FormControl>
                <label htmlFor="numbers">Numbers Array</label>
                <FieldArray name="numbers">
                  {(props) => {
                    const { push, remove, form } = props;
                    const { values } = form;
                    const { numbers } = values;
                    return (
                      <div>
                        {numbers.map((numbers, index) => (
                          <div key={index}>
                            <Input name={`numbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                {" "}
                                -{" "}
                              </button>
                            )}
                          </div>
                        ))}
                        <button type="button" onClick={() => push("")}>
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    );
                  }}
                </FieldArray>
                <ErrorMessage name="numbers" />
              </FormControl>

              <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default FormEl;
