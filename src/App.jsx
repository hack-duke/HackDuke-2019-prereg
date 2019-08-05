import React from 'react';
import styled, { css } from 'styled-components';
import Form from './Form.jsx';
import { MLHBadge } from './mlh-badge';
import { desktopOnly } from './utils.jsx';
import hourglass2 from './hourglass2.png';

const Container = styled.div`
  padding: 36px;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 760px;
  margin: 0 auto;
`;

const HourglassImage = styled.img.attrs({ src: hourglass2 })`
  max-height: 540px;
  margin-right: 40px;
`;

const App = () => (
  <>
      <MLHBadge />

  <Container>
    <HourglassImage/>
    <Form />
  </Container>
</>
);

export default App;
