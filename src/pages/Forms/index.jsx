import styled, { css } from "styled-components";
import media from "utils/media";
import FormikContainer from "../../components/Forms/FormikContainer";
import Form from "./Form";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Forms = () => {
  return (
    <Wrapper>
      <Form />
      <FormikContainer />
    </Wrapper>
  );
};

export default Forms;
