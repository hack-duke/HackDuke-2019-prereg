import React from "react";
import { Heading, Text, Paragraph, Clock } from 'grommet';


const Header = () => {
  return(
    <div>
      <Heading level={1} size="large">HackDuke</Heading>
      <Paragraph size="large">Code for Good with us at Durham, NC</Paragraph>
      <Paragraph size="large">November 2-3rd, 2019</Paragraph>
    </div>
  );
};

export default Header;
