import { validate } from 'email-validator';
import { Box, Button, FormField, TextInput, Text } from 'grommet';
import React, { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { getUniversitySuggestions, isUniversity } from './university-util';
import { Spinner } from './Spinner';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [debouncedSchool] = useDebounce(school, 50, { maxWait: 250 });
  const isValid = name.length >= 3 && validate(email) && isUniversity(school);

  const [submitting, setSubmitting] = useState(false);

  return (
    <Box
      background="white"
      pad="medium"
      round="small"
      responsive={false}
      elevation="medium"
    >
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
        onClick={() => setSubmitting(true)}
        primary={true}
        type="submit"
        fill="horizontal"
        margin={{ top: 'small' }}
      />
    </Box>
  );
};

export default Form;
