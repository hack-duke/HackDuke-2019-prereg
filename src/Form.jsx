import { validate } from 'email-validator';
import {
  Box,
  Button,
  FormField,
  Text,
  TextInput,
  Heading,
  Paragraph
} from 'grommet';
import React, { useMemo, useState, useCallback } from 'react';
import { useDebounce } from 'use-debounce';
import { Spinner } from './Spinner';
import { getUniversitySuggestions, isUniversity } from './university-util';
import styled, { css } from 'styled-components';
import { StatusGood, StatusWarning } from 'grommet-icons';
import { desktopCss } from './utils';

const TransitionedBox = styled(Box).attrs({ responsive: false, pad: 'medium' })`
  transform: scale(1);
  opacity: 1;
  transition: opacity 0.15s, transform 0.15s;

  ${({ hidden }) =>
    hidden &&
    css`
      transform: scale(0.95);
      opacity: 0;
      pointer-events: none;
      z-index: 999;
    `}
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [debouncedSchool] = useDebounce(school, 50, { maxWait: 250 });
  const [year, setYear] = useState('');
  const isValid = name.length >= 3 && validate(email) && isUniversity(school) && year.length >= 4;

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState();

  const onSubmit = async () => {
    setSubmitting(true);

    let result;
    try {
      const fetchResult = await window.fetch(
        'https://prereg.hackduke.org/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, university: school, email })
        }
      );
      result = await fetchResult.json();
    } catch (e) {
      result = {
        success: false,
        status: 'An unknown error occurred. Please refresh and try again.'
      };
    }

    setResult(result);
  };

  const onCloseResult = () => {
    if (result.success) {
      setName('');
      setEmail('');
      setSchool('');
    }
    setSubmitting(false);
    setResult(undefined);
  };

  return (
    <Box
      css={css`
        width: 100%;

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
  );
};

export default Form;
