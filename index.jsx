import React from 'react';
import ReactDom from 'react-dom';

import styled, { css, createGlobalStyle } from 'styled-components';
import HackDukeLogo from './hackduke-logo-2019.png';
import Form from './Form.jsx';

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
}
`;

const desktopOnly = rules => css`
  @media screen and (min-width: 960px) {
    ${rules}
  }
`;

const LogoImage = styled.div`
  flex: 1;
  background-image: url(${HackDukeLogo});
  height: 100%;
  min-height: 180px;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const FormOuter = styled.div`
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 24px;
  margin-top: 40px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  width: 100%;

  ${desktopOnly(css`
    margin-left: 40px;
    margin-top: 0;
  `)}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;

  ${desktopOnly(css`
    padding: 40px;
    height: 100%;
    flex-direction: row;
  `)}
`;

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <LogoImage />
      <FormOuter>
        <Form />
      </FormOuter>
    </Container>
  </>
);

const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement);
