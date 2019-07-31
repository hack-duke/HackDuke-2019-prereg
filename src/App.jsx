import React from "react";
import Header from "./Header.jsx";
import styled, { css } from "styled-components";
import HackDukeLogo from "./hourglass.png";
import Form from "./Form.jsx";
import TrustBadgeImage from "./mlh-trust-badge-2020-white.svg";
import { desktopOnly } from "./utils.jsx";

const LogoOuter = styled.div`
  display: flex;
  justify-content: flex-end;
  height: auto;
  margin: 0px, 20px;
  ${desktopOnly(css`
    flex: 1;
  `)}
`;

const LogoImage = styled.img`
  max-width: 300px;
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0px, 20px;
  display: none;
  /* top: 5%;
  right: 60%; */
  ${desktopOnly(css`
    display: block;
  `)}
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
  float:left
  top: 0px
  bottom: 0px
  margin: 0 0px;
  padding-left: 90%
  padding-right: 0;
  width: 5%
  height: 0%;
`;

const Container = styled.div`
  float: left
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0px;

  ${desktopOnly(css`
    padding: 0px;
    flex-direction: row;
  `)}
`;

const HeaderFormOuter = styled.div`
  position: absolute
  top: 10%
  padding: 0px;
  margin-left: 20%;
  margin-top: 0px;
  width: 80%

  ${desktopOnly(css`
    flex: 1;
    width: 20%
    margin-top: 0;
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
      <HeaderFormOuter>
        <Header />
        <Form />
      </HeaderFormOuter>
    </Container>
  </div>
);

export default App;
