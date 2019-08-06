import { Grommet, Heading, Paragraph, Text } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import Form from './Form.jsx';
import hourglass2 from './hourglass2.png';
import { MLHBadge } from './MLHBadge';
import { desktopCss } from './utils.jsx';

const Container = styled.div`
  padding: 36px;
  display: flex;
  min-height: 100vh;
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
  <Grommet
    theme={{
      global: {
        edgeSize: { medium: '18px' },
        colors: {
          focus: '#5356fe',
          brand: '#5356fe',
          'light-6': '#cccccc',
          'status-ok': '#2b9b99',
          'status-warning': '#ffa500'
        }
      },
      button: { padding: { vertical: '8px' }, border: { radius: '8px' } }
    }}
  >
    <MLHBadge />
    <Container>
      <HourglassImage />
      <Text color="dark-1">
        <Heading level={1} size="large" margin={{ bottom: 'small' }}>
          HackDuke
        </Heading>
        <Paragraph size="large">Code for Good in Durham, NC</Paragraph>
        <Paragraph size="large" margin={{ bottom: 'medium' }}>
          November 2-3, 2019
        </Paragraph>
        <Form />
      </Text>
    </Container>
  </Grommet>
);

export default App;
