import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
     height: 100%;
  }
  body {
    background: #e5ecf0;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
  }
  button {
      cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  max-width: 2170px;
  margin: 0 auto;
`;
