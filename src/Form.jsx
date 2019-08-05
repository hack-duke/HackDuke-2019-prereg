import { validate } from 'email-validator';
import { Box, Button, FormField, Heading, Paragraph, TextInput } from 'grommet';
import React, { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { getUniversitySuggestions, isUniversity } from './university-util.js';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [debouncedSchool] = useDebounce(school, 50, { maxWait: 250 });
  const isValid = name.length >= 3 && validate(email) && isUniversity(school);

  return (
    <Box>
      <Heading level={1} size="large" margin={{ bottom: 'small' }}>
        HackDuke
      </Heading>
      <Paragraph size="large">Code for Good with us at Durham, NC</Paragraph>
      <Paragraph size="large" margin={{ bottom: 'medium' }}>
        November 2-3rd, 2019
      </Paragraph>
      <Box background="white" pad="small" round="medium" responsive={false} elevation="medium">
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
          disabled={!isValid}
          label="NOTIFY ME"
          primary={true}
          type="submit"
          fill="horizontal"
          margin={{ top: 'small' }}
          color="#5052FF"
        />
      </Box>
    </Box>
  );
};

export default Form;
