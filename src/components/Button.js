import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const Button = styled.a`
  align-items: center;
  border: 3px solid var(--accent-color);
  border-radius: 100px;
  color: var(--accent-color);
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  margin: 2vh auto;
  padding: 5px 20px;
  text-align: center;
  transition: box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  width: 200px;

  :hover {
    box-shadow: 0px 9px 0 0 var(--accent-color);
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;
  }
`;
