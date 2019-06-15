import React, { useState, useMemo } from 'react';
import { FormField, TextInput, Button } from 'grommet';
import { validate } from 'email-validator';
import { getUniversitySuggestions, isUniversity } from './university-util.js';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const isValid = name.length >= 3 && validate(email) && isUniversity(school);

  return (
    <>
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
          suggestions={useMemo(() => getUniversitySuggestions(school), [
            school
          ])}
          value={school}
          onChange={e => setSchool(e.target.value)}
          onSelect={e => setSchool(e.suggestion)}
        />
      </FormField>
      <Button
        disabled={!isValid}
        label="Submit"
        primary={true}
        type="submit"
        fill="horizontal"
        margin={{ vertical: 'small' }}
      />
    </>
  );
};

export default Form;
