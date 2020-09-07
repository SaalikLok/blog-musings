import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FixedBar } from '../components';
import { BREAKPOINT } from '../utils/constants';

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`;

export const HeaderLogo = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo>🌌</Logo>
      </Link>
      <Link to="/microblog">Microblog</Link>
      <a href="https://saaliklok.com" target="blank">
        <p>About Saalik</p>
      </a>
    </HeaderWrapper>
  );
};
