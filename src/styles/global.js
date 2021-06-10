import { createGlobalStyle } from "styled-components";

<<<<<<< HEAD
export default createGlobalStyle`
=======
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

>>>>>>> 3f9fec00906b3c1428ca076fbdf78661d14d136f
  :root {
    --verde: #3DD598;
    --branco: #F9F9F9;
    --vermelho: #F8565D;
    --amarelo: #FBC442;
    --cinza-escuro: #21343A;
    --cinza-claro: #30444D;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
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
<<<<<<< HEAD
`;
=======
`

export default GlobalStyles
>>>>>>> 3f9fec00906b3c1428ca076fbdf78661d14d136f
