import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-width: 320px;
  }
  body {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
