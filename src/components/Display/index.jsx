import styled from "styled-components";

const Display = styled.div`
  ${(props) =>
    props.d && Array.isArray(props.d)
      ? props.d.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "display", x)
        )
      : `display: ${props.d}`};
`;

export default Display;
