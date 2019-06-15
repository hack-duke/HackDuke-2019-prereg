import React from 'react';

import styled, { css, createGlobalStyle } from 'styled-components';
import HackDukeLogo from './hackduke-logo-2019.png';
import Form from './Form.jsx';

const desktopOnly = rules => css`
  @media screen and (min-width: 768px) {
    ${rules}
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  ${desktopOnly(css`
    flex: 1;
  `)}
`;

const LogoImage = styled.img`
  max-width: 400px;
  height: auto;
  width: 100%;
  margin: auto;
`;

const FormOuter = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  margin-top: 40px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  width: 100%;

  ${desktopOnly(css`
    flex: 1;
    margin-left: 40px;
    margin-top: 0;
  `)}
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    <LogoWrapper>
      <LogoImage src={HackDukeLogo} alt="HackDuke Logo" />
    </LogoWrapper>
    <FormOuter>
      <Form />
    </FormOuter>
  </Container>
);

export default App;
