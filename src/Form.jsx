import React, { useState, useMemo } from "react";
import { FormField, TextInput, Button } from "grommet";

import { validate } from "email-validator";
import { getUniversitySuggestions, isUniversity } from "./university-util.js";
import { useDebounce } from "use-debounce";
import styled, { css } from "styled-components";
import { desktopOnly } from "./utils.jsx";

const FormOuter = styled.div`
  background: white;
  border-radius: 0px;
  padding: 0px;
  margin-top: 0%;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  width: 100%;

  ${desktopOnly(css`
    flex: 1;
    margin-left: 0px;
    margin-top: 0;
  `)}
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [debouncedSchool] = useDebounce(school, 50, { maxWait: 250 });
  const isValid = name.length >= 3 && validate(email) && isUniversity(school);

  return (
    <div>
      <FormOuter>
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
      </FormOuter>

      <Button
        disabled={!isValid}
        label="NOTIFY ME"
        primary={true}
        type="submit"
        fill="horizontal"
        margin={{ top: "small" }}
        color="#5052FF"
      />
    </div>
  );
};

export default Form;
