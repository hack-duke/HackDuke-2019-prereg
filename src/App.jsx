import React from 'react';

import styled, { css } from 'styled-components';
import HackDukeLogo from './hourglass2.png';
import Form from './Form.jsx';
import Header from './Header.jsx'
import { desktopOnly } from './utils.jsx';

const LogoOuter = styled.div`
  display: flex;
  justify-content: flex-end;
  ${desktopOnly(css`
    flex: 1;
  `)}
`;

const LogoImage = styled.img`
  max-width: 350px;
  height: auto;
  width: 100%;
  margin: auto;
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
    <LogoOuter>
      <LogoImage src={HackDukeLogo} alt="HackDuke Logo" />
    </LogoOuter>
    <div>
      <Header />
      <Form />
    </div>

  </Container>
);

export default App;
