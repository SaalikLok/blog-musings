import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StarDiv = styled.div`
  animation: ${rotate} 6s linear infinite;
  background: #667eea;
  width: 35px;
  height: 35px;
  position: relative;
  text-align: center;
  transform: rotate(20deg);
  margin: 0 auto;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 35px;
    width: 35px;
    background: #667eea;
    transform: rotate(135deg);
    margin: 0 auto;
  }
`;

const StarText = styled.p`
    text-align: center;
    font-size: 14px;
    opacity: 0.8;
    color: #667eea;
`

const Star = (props) => {
  return (<div>
      <StarDiv/>
      <StarText>{props.starVal} stars</StarText>
      </div>);
};

Star.propTypes = {
    starVal: PropTypes.number.isRequired
};

export default Star;
