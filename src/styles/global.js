import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --verde: #3DD598;
    --branco: #F9F9F9;
    --vermelho: #F8565D;
    --amarelo: #FBC442;
    --cinza-escuro: #21343A;
    --cinza-claro: #30444D;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  input {
    font-weight: 300;
  }

  h1, h2, h3, h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
