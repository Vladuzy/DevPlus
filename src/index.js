import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/global";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from './providers'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
