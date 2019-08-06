import { validate } from 'email-validator';
import { Box, Button, FormField, Text, TextInput } from 'grommet';
import React, { useMemo, useState, useCallback } from 'react';
import { useDebounce } from 'use-debounce';
import { Spinner } from './Spinner';
import { getUniversitySuggestions, isUniversity } from './university-util';
import styled, { css } from 'styled-components';
import { StatusGood, StatusWarning } from 'grommet-icons';

const TransitionedBox = styled(Box)`
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
  const isValid = name.length >= 3 && validate(email) && isUniversity(school);

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
      background="white"
      round="small"
      responsive={false}
      elevation="medium"
      css={css`
        position: relative;
      `}
    >
      <TransitionedBox pad="medium" hidden={!!result}>
        <FormField label="Name">
          <TextInput
            placeholder="First Last"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormField>
        <FormField label="Email">
          <TextInput
            placeholder="me@example.com"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
        </FormField>
        <FormField label="School">
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
        <Button
          disabled={!isValid || submitting}
          label={
            submitting ? (
              <Box direction="row" gap="xsmall" justify="center">
                <Spinner /> <Text size="medium"> SUBMITTING... </Text>
              </Box>
            ) : (
              'NOTIFY ME'
            )
          }
          onClick={onSubmit}
          primary={true}
          type="submit"
          fill="horizontal"
          margin={{ top: 'small' }}
        />
      </TransitionedBox>
      <TransitionedBox
        pad="medium"
        hidden={!result}
        height="100%"
        width="100%"
        css={css`
          position: absolute;
        `}
      >
        {result && (
          <>
            <Box margin={{ vertical: 'auto' }} align="center">
              {result.success ? (
                <StatusGood size="72px" color="status-ok" />
              ) : (
                <StatusWarning size="72px" color="status-warning" />
              )}
              <Text
                color="dark-1"
                textAlign="center"
                margin={{ top: 'medium' }}
              >
                {result.status}
              </Text>
            </Box>
            <Button
              color="light-6"
              label={result.success ? 'CLOSE' : 'GO BACK'}
              onClick={onCloseResult}
              type="submit"
              fill="horizontal"
            />
          </>
        )}
      </TransitionedBox>
    </Box>
  );
};

export default Form;
