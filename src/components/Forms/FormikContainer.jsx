import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import styled, { css } from "styled-components";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

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

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "select an option", value: "" },
    { key: "blue", value: "1" },
    { key: "red", value: "2" },
    { key: "yellow", value: "3" },
  ];

  const radioOptions = [
    { key: "select an option", value: "" },
    { key: "blue", value: "1" },
    { key: "red", value: "2" },
    { key: "yellow", value: "3" },
  ];

  const checkboxOptions = [
    { key: "blue", value: "blue" },
    { key: "red", value: "red" },
    { key: "yellow", value: "yellow" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    quill: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
    quill: Yup.string().required("required"),
    description: Yup.string().required("required"),
    selectOption: Yup.string().required("required"),
    radioOption: Yup.string().required("required"),
    checkboxOption: Yup.array().required("required"),
  });
  const onSubmit = (values) => console.log("submit", { values });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="email"
              name="email"
            />
            <FormikControl
              control="textarea"
              label="description"
              name="description"
            />
            <FormikControl
              control="select"
              options={dropdownOptions}
              label="selectOption"
              name="selectOption"
            />
            <FormikControl
              control="radio"
              options={radioOptions}
              label="radio options"
              name="radioOption"
            />
            <FormikControl
              control="checkbox"
              options={checkboxOptions}
              label="checkbox options"
              name="checkboxOption"
            />
            <FormikControl control="quill" name="quill" />
            <button type="submit">submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
