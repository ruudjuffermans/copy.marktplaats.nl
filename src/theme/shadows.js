import { boxShadow } from "utils/stylingFunctions";

const shadows = {
  xs: boxShadow("#000", 0.15, [0, 2], [9, -5]),
  sm: boxShadow("#000", 0.12, [0, 5], [10, 0]),
  md: `${boxShadow("#000", 0.1, [0, 4], [6, -1])}, ${boxShadow(
    "#000",
    0.06,
    [0, 2],
    [4, -1]
  )}`,
  lg: `${boxShadow("#000", 0.1, [0, 10], [15, -3])}, ${boxShadow(
    "#000",
    0.05,
    [0, 4],
    [6, -2]
  )}`,
  xl: `${boxShadow("#000", 0.1, [0, 20], [25, -5])}, ${boxShadow(
    "#000",
    0.04,
    [0, 10],
    [10, -5]
  )}`,
  xxl: boxShadow("#000", 0.05, [0, 20], [27, 0]),
  inset: {
    xs: boxShadow("#000", 0.15, [0, 2], [9, -5], "inset"),
    sm: boxShadow("#000", 0.12, [0, 5], [10, 0], "inset"),
    md: `${boxShadow("#000", 0.1, [0, 4], [6, -1], "inset")}, ${boxShadow(
      "#000",
      0.06,
      [0, 2],
      [4, -1],
      "inset"
    )}`,
    lg: `${boxShadow("#000", 0.1, [0, 10], [15, -3], "inset")}, ${boxShadow(
      "#000",
      0.05,
      [0, 4],
      [6, -2],
      "inset"
    )}`,
    xl: `${boxShadow("#000", 0.1, [0, 20], [25, -5], "inset")}, ${boxShadow(
      "#000",
      0.04,
      [0, 10],
      [10, -5],
      "inset"
    )}`,
    xxl: boxShadow("#000", 0.05, [0, 20], [27, 0], "inset"),
  },
};

export default shadows;
