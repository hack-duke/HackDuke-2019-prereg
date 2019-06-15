import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    font-family: 'Open Sans', sans-serif;
    background: #a1c99b;
    margin: 0;
}

html, body, #root {
  height: 100%;
}
`;

const rootElement = document.getElementById('root');
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  rootElement
);
