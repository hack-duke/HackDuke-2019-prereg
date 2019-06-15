import React from 'react';

import styled, { css, createGlobalStyle } from 'styled-components';
import HackDukeLogo from './hackduke-logo-2019.png';
import Form from './Form.jsx';

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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;

  ${desktopOnly(css`
    padding: 40px;
    flex-direction: row;
  `)}
`;

const App = () => (
  <Container>
    <LogoImage />
    <FormOuter>
      <Form />
    </FormOuter>
  </Container>
);

export default App;