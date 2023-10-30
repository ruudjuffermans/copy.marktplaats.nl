import React from "react";
import CheckBox from "./CheckBox";
import Input from "./Input";
import Quill from "./Quill";
import Radio from "./Radio";
import Select from "./Select";
import TextArea from "./TextArea";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "quill":
      return <Quill {...rest} />;
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
