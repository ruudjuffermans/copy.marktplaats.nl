import { css } from "styled-components";
import breakpoints from "theme/breakpoints";

const xs = (inner) => css`
  @media only screen and (min-width: ${breakpoints.xs}) {
    ${inner}
  }
`;

const sm = (inner) => css`
  @media only screen and (min-width: ${breakpoints.sm}) {
    ${inner}
  }
`;

const md = (inner) => css`
  @media only screen and (min-width: ${breakpoints.md}) {
    ${inner}
  }
`;

const lg = (inner) => css`
  @media only screen and (min-width: ${breakpoints.lg}) {
    ${inner}
  }
`;

const xl = (inner) => css`
  @media only screen and (min-width: ${breakpoints.xl}) {
    ${inner}
  }
`;

const media = { xs, sm, md, lg, xl };

export default media;
