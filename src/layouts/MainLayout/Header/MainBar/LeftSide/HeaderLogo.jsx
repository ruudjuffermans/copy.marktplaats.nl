import React from "react";
import styled from "styled-components";
import { useMediaSM } from "utils/useMedia";

const HeaderLogoBig = styled.img.attrs({
  src: "/img/logo-big.svg",
  width: "140",
})`
  cursor: pointer;
  margin-right: 10px;
  min-width: 140px;
`;

const HeaderLogoSmall = styled.img.attrs({
  src: "/img/logo-small.svg",
  width: "32",
})`
  cursor: pointer;
  margin: 3px 8px 3px 0;
  min-width: 32px;
`;

const HeaderLogo = () => {
  const wide = useMediaSM();
  return wide ? <HeaderLogoBig /> : <HeaderLogoSmall />;
};

export default HeaderLogo;
