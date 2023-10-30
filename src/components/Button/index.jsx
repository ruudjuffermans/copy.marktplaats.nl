import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import media from "utils/media";

const LinkButton = styled(Link)`
  display: flex;
  font-size: 12px;
  font-weight: 300;
  padding: 0 5px;
  min-height: 32px;
  line-height: 32px;
  color: #116db4;
  border: 0;
  border-radius: 3px;
  :hover {
    color: #007bc5;
    background-color: #f7f7f6;
  }
`;

const MainHeaderButton = styled(Link)`
  color: #fff;
  display: flex;
  font-size: 12px;
  font-weight: 300;
  padding: 3px;
  min-height: 32px;
  line-height: 32px;
  border: 0;
  border-radius: 3px;
  background: #137bcb;
  box-shadow: inset 0 -2px 0 0 #116db4;
  border: 1px solid transparent;
  border-color: #137bcb;
  cursor: pointer;

  ${media.sm(css`
    padding: 0 8px;
  `)}
  :hover {
    background: #1589e3;
  }
`;

const MainButton = styled(Link)`
  color: #fff;
  display: flex;
  font-size: 12px;
  font-weight: 300;
  padding: 3px;
  min-height: 32px;
  line-height: 32px;
  border: 0;
  border-radius: 3px;
  background: #137bcb;
  box-shadow: inset 0 -2px 0 0 #116db4;
  border: 1px solid transparent;
  border-color: #137bcb;

  :hover {
    background: #1589e3;
  }
`;

function buttonVariant(outlined, color) {
  return outlined
    ? css`
        background-color: #fff;
        border-color: ${color};
        color: ${color};
      `
    : css`
        background-color: ${color};
        border-color: ${color};
        color: #fff;
      `;
}

const Button = styled.button`
  font-family: Roboto, serif;
  font-size: 16px;
  font-weight: 400;
  padding: 0 16px;
  line-height: 42px;
  height: 44px;
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none;

  ${(props) => {
    return buttonVariant(
      props.outlined,
      props.theme.functions.getColor(props.color)
    );
  }}

  &:disabled {
    /* pointer-event: "none"; */
    opacity: 0.65;
  }
`;

export { Button, MainButton, LinkButton, MainHeaderButton };
