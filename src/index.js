import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global'
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
     <BrowserRouter>
          <App />
      </BrowserRouter>
=======
    <BrowserRouter>
      <GlobalStyles/>
        <App />
    </BrowserRouter>
>>>>>>> 3f9fec00906b3c1428ca076fbdf78661d14d136f
  </React.StrictMode>,
  document.getElementById('root')
);