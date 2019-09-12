import React, { useState, useMemo } from 'react';
import { FormField, TextInput, Button } from 'grommet';
import { validate } from 'email-validator';
import { getUniversitySuggestions, isUniversity } from './university-util.js';
import { useDebounce } from 'use-debounce';
import styled, { css } from 'styled-components';
import { desktopOnly } from './utils.jsx';

const FormOuter = styled.div`
  background: white;
  border-radius: 6px;
  padding: 24px;
  margin-top: 40px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  width: 100%;

  ${desktopOnly(css`
    flex: 1;
    margin-left: 0px;
    margin-top: 0;
  `)}
`;


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [debouncedSchool] = useDebounce(school, 50, { maxWait: 250 });
<<<<<<< Updated upstream
  const isValid = name.length >= 3 && validate(email) && isUniversity(school);

  return (
    <div>
      <FormOuter>
        <FormField label="Name 🏷">
          <TextInput
            placeholder="First Last"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormField>
        <FormField label="Email 📧">
          <TextInput
            placeholder="me@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormField>
        <FormField label="School 🏫">
          <TextInput
            placeholder="Duke University"
            suggestions={useMemo(
              () => getUniversitySuggestions(debouncedSchool),
              [debouncedSchool]
            )}
            value={school}
            onChange={e => setSchool(e.target.value)}
            onSelect={e => setSchool(e.suggestion)}
          />
        </FormField>

      </FormOuter>
=======
  const [year, setYear] = useState('');
  const isValid = name.length >= 3 && validate(email) && isUniversity(school) && year.length >= 4;

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState();


>>>>>>> Stashed changes

      <Button
        disabled={!isValid}
        label="NOTIFY ME"
        primary={true}
        type="submit"
        fill="horizontal"
        margin={{ top: 'small' }}
        color="#5052FF"
        style={{ padding: 10, borderRadius: 12}}
      />
    </div>

<<<<<<< Updated upstream
=======
        ${desktopCss`
          width: initial;
        `}
      `}
    >
      <Text color="dark-1">
        <Heading level={1} size="large" margin={{ bottom: 'xxsmall' }}>
          HackDuke
        </Heading>
        <Paragraph size="xxlarge" margin={{ bottom: 'medium' }}>
          November 2-3, 2019
        </Paragraph>
        <Paragraph size="large" margin={{ bottom: 'small' }}>Come <b>Code for Good </b>
         with us at Duke University (Durham, NC)!
        Applications are open now until October 15.
        </Paragraph>
      </Text>

      <Button
        label={
          submitting ? (
            <Box direction="row" gap="xsmall" justify="center">
              <Spinner /> <Text size="medium"> LOADING... </Text>
            </Box>
          ) : (<b>
            APPLY NOW ☛ ☛ ☛ </b>
          )
        }

        href = "https://hackduke.typeform.com/to/i83hAq"
        target = '_blank'
        onClick={() => {}}
        primary={true}
        type="button"
        fill="horizontal"
        margin={{ top: 'small' }}
      />


    </Box>
>>>>>>> Stashed changes
  );
};

export default Form;
