import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #FAFAFA;
    --grey-0: #EAE8E8;
    --grey-1: #B3AEAE;
    --red-0: #C63A3A;
    --red-1: #932222;
    --red-2: #ffc0c0;
    --yellow-0: #FFD953;
    --yellow-1: #FEC600;
    --shadow-0: 0px 1px 4px 1px rgba(0, 0, 0, 0.25);
    --shadow-1: 0px 5px 30px 1px rgba(165, 165, 165, 0.25);
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    font-size: 100%;
    font: inherit;
  }
  body {
    background-color: var(--grey-0);
  }
  ol,
  ul {
  }
  body,
  html {
    width: 100%;
    height: 100vh;
  }
  body,
  input,
  textarea,
  select,
  ::placeholder {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    font-weight: 400;
    font-size: 1rem;
    color: var(--text-1);
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
