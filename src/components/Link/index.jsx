import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkEl = styled(Link)`
  color: #116db4;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;

  :hover {
    color: #1490dc;
  }
`;

export default LinkEl;
