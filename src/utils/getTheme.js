// import { isColor } from "utils/stylingFunctions";
import { merge } from "lodash";
import theme from "theme";
import colors from "theme/colors";

const getThemeColors = (mode) => ({
  ...merge(colors.base, { ...colors[mode] }),
});

export const getTheme = (mode) => ({
  ...theme,
  colors: getThemeColors(mode),
});
