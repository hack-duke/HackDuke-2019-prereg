import React from 'react';
import styled, { css } from 'styled-components';
import Form from './Form.jsx';
import { MLHBadge } from './mlh-badge';
import { desktopOnly } from './utils.jsx';
import hourglass2 from './hourglass2.png';

const Container = styled.div`
  padding: 36px;
  display: flex;
  min-height: 100%;
  max-width: 780px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  ${desktopOnly(css`
    justify-content: space-between;
    flex-direction: row;
  `)}
`;

const HourglassImage = styled.img.attrs({ src: hourglass2 })`
  margin-bottom: 32px;
  max-width: 144px;

  ${desktopOnly(css`
  margin-right: 80px;  
  max-height: 540px;
  max-width: initial;
  margin-bottom: 0;
`)}
`;

const App = () => (
  <>
    <MLHBadge />

    <Container>
      <HourglassImage />
      <Form />
    </Container>
  </>
);

export default App;
