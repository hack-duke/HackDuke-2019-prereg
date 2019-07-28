import React from "react";
import ReactDom from "react-dom";

import "./app.css";
import styled, { css } from "styled-components";
import HackDukeLogo from "./hackduke-logo-2019.png";
import Form from "./Form.jsx";
import TrustBadgeImage from "./mlh-logo.svg";
const mobileOnly = rules => css`
  @media screen and (min-width: 960px) {
    {rules}
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

const MLHBadge = styled.div`
  flex: 1;
  background-image: url(${TrustBadgeImage});
  height: 20%;
  min-height: 180px;
  width: 100%;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  margin-right: 0px;
`;
const NavItemsWrapper = styled.div`
  margin: 0 auto;
  padding: 0 0px;
  padding-right: 0;
  height: 0%;
`;
const FormOuter = styled.div`
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 24px;
  margin-top: 40px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  width: 100%;

  @media screen and (min-width: 960px) {
    margin-left: 40px;
    margin-top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (min-width: 960px) {
    padding: 40px;
    height: 100%;
    flex-direction: row;
  }
`;

function App() {
  return (
    <div>
      <NavItemsWrapper>
        <a
          href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white"
          target="_blank"
          // rel="noopener"
        >
          <MLHBadge />
        </a>
      </NavItemsWrapper>
      <Container>
        <LogoImage />

        <FormOuter>
          <Form />
        </FormOuter>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
