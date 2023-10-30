import { pxToRem } from "utils/stylingFunctions";

const breakpoints = [
  pxToRem(480),
  pxToRem(768),
  pxToRem(992),
  pxToRem(1200),
  pxToRem(1400),
];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export default breakpoints;
