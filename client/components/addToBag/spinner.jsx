import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 1px solid transparent;
  border-left-color: white;
  border-radius: 50%;
  margin-left: 20px;
  animation: 1.25s ${Spin} linear infinite;
  height: 24px;
  width: 24px;
  box-sizing: border-box;
`;

function Spinner() {
  return <Loader />;
}

export default Spinner;
