import { validate } from 'email-validator';
import { Box, Button, FormField, Text, TextInput } from 'grommet';
import React, { useMemo, useState, useCallback } from 'react';
import { useDebounce } from 'use-debounce';
import { Spinner } from './Spinner';
import { getUniversitySuggestions, isUniversity } from './university-util';
import styled, { css } from 'styled-components';
import { StatusGood, StatusWarning } from 'grommet-icons';

const TransitionedBox = styled(Box)`
  transform: scale(1.0);
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

const mockSubmit = async (name, email, school) =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          false
            ? {
                success: true,
                status:
                  'Thank you for pre-registering! Please check your inbox for a confirmation email.'
              }
            : {
                success: false,
                status:
                  "That email address doesn't look real. Please refresh and try again."
              }
        ),
      1000
    )
  );

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
    setResult(await mockSubmit(name, email, school));
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
