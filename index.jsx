import React from 'react';
import ReactDom from 'react-dom';

import './app.css';
import styled from 'styled-components';
import HackDukeLogo from './hackduke-logo-2019.png';
import Form from './Form.jsx';

const LogoImage = styled.div`
    flex: 1;
    background-image: url(${HackDukeLogo});
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const FormOuter = styled.div`
    flex: 1;
    background: white;
    border-radius: 8px;
    padding: 24px;
    margin-left: 40px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    align-items: center;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;

    @media screen and (min-width: 960px) {
      flex-direction: row;
    }
`;

function App() {
    return (
        <Container>
            <LogoImage />
            <FormOuter>
                <Form />
            </FormOuter>
        </Container>
    );
}

const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement);
