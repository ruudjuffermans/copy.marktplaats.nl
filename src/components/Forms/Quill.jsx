import { Field } from "formik";
import styled from "styled-components";

import QuillRoot from "./QuillRoot";

const FormControl = styled.div`
  margin-bottom: 50px;
`;

const Quill = ({ name }) => {
  return (
    <FormControl>
      <label htmlFor={name}>{name}</label>
      <Field id={name} name={name}>
        {({ field }) => (
          <QuillRoot
            value={field.value}
            onChange={field.onChange(field.name)}
          />
        )}
      </Field>
    </FormControl>
  );
};

export default Quill;
