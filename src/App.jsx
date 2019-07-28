import React from "react";

import styled, { css } from "styled-components";
import HackDukeLogo from "./hackduke-logo-2019.png";
import Form from "./Form.jsx";
import TrustBadgeImage from "./mlh-badge.png";
import { desktopOnly } from "./utils.jsx";

const LogoOuter = styled.div`
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
const MLHBadge = styled.img`
  flex: 1;
  height: 5%;
  min-height: 180px;
  width: 100px
  background-size: contain;
  background-position: right;

  margin-right: 0px;
  margin-top: 0px;
  padding: 0 0px;
`;

const MLHWrapper = styled.div`
  top: 0px
  margin: 0 0px;
  padding-left: 90%
  left:100%
  padding-right: 0;
  height: 0%;
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
  <div>
    <MLHWrapper>
      <a
        href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white"
        target="_blank"
        // rel="noopener"
      >
        <MLHBadge src={TrustBadgeImage} alt="mlh badge" />
      </a>
    </MLHWrapper>
    <Container>
      <LogoOuter>
        <LogoImage src={HackDukeLogo} alt="HackDuke Logo" />
      </LogoOuter>
      <Form />
    </Container>
  </div>
);

export default App;
