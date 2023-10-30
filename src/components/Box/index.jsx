import styled, { css } from "styled-components";

const Box = styled.div`
  ${(props) =>
    props.m && Array.isArray(props.m)
      ? props.m.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "margin", x)
        )
      : `margin: ${props.m}`};

  ${(props) =>
    props.mx && Array.isArray(props.mx)
      ? props.mx.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "margin", `0 ${x}`)
        )
      : `margin: 0 ${props.mx}`};

  ${(props) =>
    props.my && Array.isArray(props.my)
      ? props.my.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "margin", `${x} 0`)
        )
      : `margin: ${props.my} 0`};

  ${(props) =>
    props.ml && Array.isArray(props.ml)
      ? props.ml.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "margin-left", x)
        )
      : `margin-left: ${props.ml}`};

  ${(props) =>
    props.mr && Array.isArray(props.mr)
      ? props.mr.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "margin-right", x)
        )
      : `margin-right: ${props.mr}`};

  ${(props) =>
    props.mt && Array.isArray(props.mt)
      ? props.mt.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "margin-top", x)
        )
      : `margin-top: ${props.mt}`};

  ${(props) =>
    props.mb && Array.isArray(props.mb)
      ? props.mb.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "margin-bottom", x)
        )
      : `margin-bottom: ${props.mb}`};

  ${(props) =>
    props.p && Array.isArray(props.p)
      ? props.p.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "padding", x)
        )
      : `padding: ${props.p}`};

  ${(props) =>
    props.px && Array.isArray(props.px)
      ? props.px.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "padding", `0 ${x}`)
        )
      : `padding: 0 ${props.px}`};

  ${(props) =>
    props.py && Array.isArray(props.py)
      ? props.py.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "padding", `${x} 0`)
        )
      : `padding: ${props.py} 0`};

  ${(props) =>
    props.pl && Array.isArray(props.pl)
      ? props.pl.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "padding-left", x)
        )
      : `padding-left: ${props.pl}`};

  ${(props) =>
    props.pr && Array.isArray(props.pr)
      ? props.pr.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "padding-right", x)
        )
      : `padding-right: ${props.pr}`};

  ${(props) =>
    props.pt && Array.isArray(props.pt)
      ? props.pt.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "padding-top", x)
        )
      : `padding-top: ${props.pt}`};

  ${(props) =>
    props.pb && Array.isArray(props.pb)
      ? props.pb.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "padding-bottom", x)
        )
      : `padding-bottom: ${props.pb}`};

  ${(props) =>
    props.maxWidth && Array.isArray(props.maxWidth)
      ? props.maxWidth.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "max-width", x)
        )
      : `max-width: ${props.maxWidth}`};

  ${(props) =>
    props.minWidth && Array.isArray(props.minWidth)
      ? props.minWidth.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "min-width", x)
        )
      : `min-width: ${props.minWidth}`};

  ${(props) =>
    props.width && Array.isArray(props.width)
      ? props.width.map((x, i) =>
          props.theme.functions.responsiveStatement(i, "width", x)
        )
      : `width: ${props.width}`};
`;

export default Box;
