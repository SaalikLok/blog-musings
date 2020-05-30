import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from '../components';
import { BREAKPOINT } from '../utils/constants';

const Container = styled.footer`
  font-size: 17px;
  margin-top: 20vh;
  padding-bottom: 10vh;
  padding-top: 5vh;
  text-align: left;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`;

const TextSpan = styled.span`
  margin-right: 5vw;
`;

export const Footer = () => {
  return (
    <Container>
      <TextSpan>&copy; Saalik Lokhandwala 2020</TextSpan>
      <TextSpan>
        A{' '}
        <a
          href="https://lytebulb.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lytebulb
        </a>{' '}
        Project
      </TextSpan>
      <ButtonLink
        href="https://twitter.com/saaliklok"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </ButtonLink>
      <ButtonLink
        href="https://github.com/saaliklok"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </ButtonLink>
      <ButtonLink
        href="https://linkedin.com/in/saaliklok"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </ButtonLink>
    </Container>
  );
};
