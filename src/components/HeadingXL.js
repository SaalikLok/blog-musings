import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const HeadingXL = styled.h1`
  background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
  display: block;
  font-size: 80px;
  letter-spacing: -4px;
  line-height: 1.2;
  margin: 0 auto 10vh auto;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 45px;
  }
`;