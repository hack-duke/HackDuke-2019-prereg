import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App.jsx';

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
    font-family: 'Karla', sans-serif;
    margin: 0;
    background: linear-gradient(0deg, #d9ccd6, #ffd6ba);
}

html, body, #root {
  height: 100%;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
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
