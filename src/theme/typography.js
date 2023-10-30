import { pxToRem } from "utils/stylingFunctions";
import { css } from "styled-components";

const fontFamily = [
  "Roboto",
  "Roboto Slab",
  "Bree Serif",
  "Inter",
  "Quicksand",
  "Tiro Devanagari Marathi",
];

fontFamily.title = fontFamily[1];
fontFamily.text = fontFamily[1];

const fontSize = [
  pxToRem(10.4),
  pxToRem(12),
  pxToRem(14),
  pxToRem(16),
  pxToRem(20),
  pxToRem(24),
  pxToRem(30),
  pxToRem(38),
  pxToRem(48),
  pxToRem(60),
];

fontSize.xs = fontSize[0];
fontSize.sm = fontSize[1];
fontSize.md = fontSize[2];
fontSize.lg = fontSize[3];
fontSize.xl = fontSize[4];

const fontWeight = [100, 200, 300, 400, 500, 600, 700, 800, 900];

fontWeight.xs = fontWeight[0];
fontWeight.sm = fontWeight[1];
fontWeight.md = fontWeight[2];
fontWeight.lg = fontWeight[3];
fontWeight.xl = fontWeight[4];

const lineHeights = [1, 1.2, 1.4, 1.6, 4];

lineHeights.xs = lineHeights[0];
lineHeights.sm = lineHeights[1];
lineHeights.md = lineHeights[2];
lineHeights.lg = lineHeights[3];
lineHeights.xl = lineHeights[4];

const heading = {};
heading.h1 = css`
  font-family: Roboto, serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

heading.h2 = css`
  font-family: Roboto, serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

export default { fontSize, fontFamily, fontWeight, lineHeights };
