import React from "react";
import breakpoints from "theme/breakpoints";

import { useMediaQuery } from "react-responsive";

const useMediaXS = () =>
  useMediaQuery({ query: `(min-width: ${breakpoints.xs})` });

const useMediaSM = () =>
  useMediaQuery({ query: `(min-width: ${breakpoints.sm})` });

const useMediaMD = () =>
  useMediaQuery({ query: `(min-width: ${breakpoints.md})` });

const useMediaLG = () =>
  useMediaQuery({ query: `(min-width: ${breakpoints.lg})` });

const useMediaXL = () =>
  useMediaQuery({ query: `(min-width: ${breakpoints.xl})` });

export { useMediaXS, useMediaSM, useMediaMD, useMediaLG, useMediaXL };
