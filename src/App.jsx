import React from 'react';
import styled, { css } from 'styled-components';
import Form from './Form.jsx';
import { MLHBadge } from './MLHBadge';
import { desktopCss } from './utils.jsx';
import hourglass2 from './hourglass2.png';
import { Grommet } from 'grommet';

const Container = styled.div`
  padding: 36px;
  display: flex;
  min-height: 100%;
  max-width: 800px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  ${desktopCss`
    justify-content: space-between;
    flex-direction: row;
  `}
`;

const HourglassImage = styled.img.attrs({ src: hourglass2 })`
  margin-bottom: 32px;
  max-width: 144px;

  ${desktopCss`
    margin-right: 68px;
    max-height: 550px;
    max-width: initial;
    margin-bottom: 0;
  `}
`;

const App = () => (
  <Grommet full>
    <MLHBadge />
    <Container>
      <HourglassImage />
      <Form />
    </Container>
  </Grommet>
);

export default App;
