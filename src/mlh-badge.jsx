import React from 'react';
import styled from 'styled-components';
import TrustBadgeImage from './mlh-trust-badge-2020-white.svg';

const MLHWrapper = styled.img`
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: fixed;
  right: 50px;
  top: 0;
  width: 10%;
  z-index: 10000;
`;

export const MLHBadge = () => (
  <a
    href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white"
    target="_blank"
  >
    <MLHWrapper
      src={TrustBadgeImage}
      alt="Major League Hacking 2020 Hackathon Season"
    />
  </a>
);
