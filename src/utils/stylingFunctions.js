// chroma-js is a library for all kinds of color conversions and color scales.
import chroma from "chroma-js";

function isColor(strColor) {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== "";
}

/**
  The hexToRgb() function helps you to change the hex color code to rgb
  using chroma-js library.
 */
function hexToRgb(color) {
  return chroma(color).rgb().join(", ");
}

/**
  The rgba() function helps you to create a rgba color code, it uses the hexToRgb() function
  to convert the hex code into rgb for using it inside the rgba color format.
 */
function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

/**
  The pxToRem() function helps you to convert a px unit into a rem unit,
 */
function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

/**
  The linearGradient() function helps you to create a linear gradient color background
 */
function linearGradient(color, colorState, angle = 195) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

/**
  The boxShadow() function helps you to create a box shadow for an element
 */
function boxShadow(color, opacity, offset = [], radius = [], inset = "") {
  const [x, y] = offset;

  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
    spread
  )} ${rgba(color, opacity)}`;
}

/**
  The gradientChartLine() function helps you to create a gradient color for the chart line
 */
function gradientChartLine(chart, color, opacity = 0.2) {
  const ctx = chart.getContext("2d");
  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  const primaryColor = rgba(color, opacity).toString();

  gradientStroke.addColorStop(1, primaryColor);
  gradientStroke.addColorStop(0.2, "rgba(72, 72, 176, 0.0)");
  gradientStroke.addColorStop(0, "rgba(203, 12, 159, 0)");

  return gradientStroke;
}

export {
  linearGradient,
  pxToRem,
  hexToRgb,
  boxShadow,
  isColor,
  rgba,
  gradientChartLine,
};
