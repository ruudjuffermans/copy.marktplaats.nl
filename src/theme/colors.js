import { isColor } from "utils/stylingFunctions";

const shadow = {
  shadow1: "rgba(0, 0, 0, 0.2)",
  shadow2: "rgba(0, 0, 0, 0.1)",
  shadow3: "rgba(0, 0, 0, 0.3)",
  shadowInset: "rgba(255, 255, 255, 0.5)",
};

const base = {
  primary: "#eda566",
  secondary: "#eda",
  info: "#1A73E8",
  success: "#4CAF50",
  warning: "#fb8c00",
  danger: "#F44335",
};

const dark = {
  background1: "#18191a",
  bgSecondary: "#242526",
  bgThird: "#3a3b3c",
  bgForth: "#3a3b3c",
  test: "#c34",
  hover: "#e7edf8",
};

const light = {
  background1: "#f7f7f6",
  bgSecondary: "#f0f2f5",
  bgThird: "#e4e6eb",
  test: "#11e",
  sidemenu: "#f7f7f6",
  sidemenuoverlay: "rgba(45, 60, 77, 0.6)",
  sidemenuoverlay: "rgba(0, 0, 0, 0.6)",
  headerbutton: "#1A73E8",
  hover: "#e7edf8",
};

function getColor(strColor) {
  return strColor
    ? base
      ? [strColor]
      : isColor(strColor)
      ? strColor
      : "red"
    : base.primary;
}

const colors = {
  base,
  dark,
  light,
  shadow,
  getColor,
};

export default colors;
