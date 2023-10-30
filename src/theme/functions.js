import media from "utils/media";
import colors from "./colors";
import typography from "./typography";

function isColor(strColor) {
  const s = new Option().style;
  s.color = strColor;
  return s.color;
}

function getColor(strColor) {
  return colors.base[strColor] ? colors.base[strColor] : isColor(strColor);
}

function isNaLN(i) {
  if (isNaN(i)) {
    return false;
  }

  if (i > 6) {
    return false;
  }

  return true;
}

const responsive = ["zero", "xs", "sm", "md", "lg", "xl"];
const keydict = {
  "font-weight": typography.fontWeight,
  "font-size": typography.fontSize,
  "line-height": typography.lineHeights,
};

function responsiveStatement(m, key, value) {
  if (m === 0) {
    return `${key}: ${
      isNaLN(value) ? (keydict[key] ? keydict[key][value] : value) : value
    };`;
  }
  return media[responsive[m]](
    `${key}: ${
      isNaLN(value) ? (keydict[key] ? keydict[key][value] : value) : value
    };`
  );
}

export default { getColor, responsiveStatement };
