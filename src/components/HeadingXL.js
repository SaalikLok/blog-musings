import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const HeadingXL = styled.h1`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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