import styled, { css } from "styled-components";
import PropTypes from "prop-types";

function textHeading(heading) {
  switch (heading) {
    case "h1":
      return css`
        font-family: Roboto, serif;
        font-size: 44px;
        font-weight: 400;
        line-height: 60px;
        margin: 0;
      `;
    case "h2":
      return css`
        font-family: Roboto, serif;
        font-size: 32px;
        font-weight: 400;
        line-height: 40px;
        margin: 0;
      `;
    case "h3":
      return css`
        font-family: Roboto, serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        margin: 0;
      `;
    case "h4":
      return css`
        font-family: Roboto, serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        margin: 0;
      `;
    case "h5":
      return css`
        font-family: Roboto, serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        margin: 0;
      `;
    case "d1":
      return css`
        font-family: Roboto Slab, serif;
        font-size: 44px;
        font-weight: 400;
        line-height: 60px;
        margin: 0;
      `;
    case "d2":
      return css`
        font-family: Roboto Slab, serif;
        font-size: 32px;
        font-weight: 400;
        line-height: 40px;
        margin: 0;
      `;
    case "d3":
      return css`
        font-family: Roboto Slab, serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        margin: 0;
      `;
    case "d4":
      return css`
        font-family: Roboto Slab, serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        margin: 0;
      `;
    case "d5":
      return css`
        font-family: Roboto Slab, serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        margin: 0;
      `;
    default:
      return null;
  }
}

const attributes = css`
  ${(props) =>
    props.fontSize && Array.isArray(props.fontSize)
      ? props.fontSize.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "font-size", x)
        )
      : `font-size: ${props.fontSize}`};

  ${(props) =>
    props.fontWeight && Array.isArray(props.fontWeight)
      ? props.fontWeight.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "font-weight", x)
        )
      : `font-weight: ${props.fontWeight}`};

  ${(props) =>
    props.lineHeight && Array.isArray(props.lineHeight)
      ? props.lineHeight.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "line-height", x)
        )
      : `line-height: ${props.lineHeight}`};

  ${(props) =>
    props.fontFamily &&
    `font-family: ${props.theme.typography.fontFamily[props.fontFamily]};`}

  ${(props) => {
    return (
      props.color && `color: ${props.theme.functions.getColor(props.color)};`
    );
  }}
`;

const StyledText = styled.div`
  ${(props) => {
    return textHeading(props.heading);
  }}

  ${attributes}
`;

// const Text = styled.div`
//   ${(props) => props.variant && props.theme.typography.variants[props.variant]}
//   ${(props) =>
//     props.fontSize && Array.isArray(props.fontSize)
//       ? props.fontSize.map((x, i) =>
//           props.theme.functions.responsiveStatement(i, "font-size", x)
//         )
//       : `font-size: ${props.fontSize}`};

//   ${(props) =>
//     props.fontWeight && Array.isArray(props.fontWeight)
//       ? props.fontWeight.map((x, i) =>
//           props.theme.functions.responsiveStatement(i, "font-weight", x)
//         )
//       : `font-weight: ${props.fontWeight}`};

//   ${(props) =>
//     props.lineHeight && Array.isArray(props.lineHeight)
//       ? props.lineHeight.map((x, i) =>
//           props.theme.functions.responsiveStatement(i, "line-height", x)
//         )
//       : `line-height: ${props.lineHeight}`};

//   ${(props) =>
//     props.fontFamily &&
//     `font-family: ${props.theme.typography.fontFamily[props.fontFamily]};`}

//   ${(props) => {
//     console.log(props.theme.functions.getColor(props.color));
//     return (
//       props.color && `color: ${props.theme.functions.getColor(props.color)};`
//     );
//   }}
// `;

const Text = ({ heading, children, ...props }) => {
  return (
    <StyledText heading={heading} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
