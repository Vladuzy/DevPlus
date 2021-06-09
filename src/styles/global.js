import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
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
    font-family: 'Roboto Mono', monospace;
  }

  input {
    font-weight: 300;
  }

  h1, h2, h3, h4 {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`