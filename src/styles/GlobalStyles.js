import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";
import typography from "./typography";

const GlobalStyles = createGlobalStyle`
    ${normalize}
    ${typography}
`;

export default GlobalStyles;
