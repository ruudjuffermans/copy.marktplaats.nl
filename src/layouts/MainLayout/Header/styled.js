import styled from "styled-components";

const HeaderTopRibbon = styled.div`
  height: 5px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

const HeaderBottomRibbon = styled.div`
  height: 2px;
  background-color: ${(props) => props.theme.colors.background1};
  box-shadow: inset 0 1px 2px 0 rgb(0 0 0 / 14%);
`;

export { HeaderTopRibbon, HeaderBottomRibbon };
