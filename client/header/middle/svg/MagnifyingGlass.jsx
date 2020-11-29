import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 30px;
  position: absolute;
  right: 5px;
  top: 8px;
  cursor: pointer;
  box-sizing: border-box;
`;

function MagnifyingGlass() {
  return (
    <Wrapper>
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 20 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="2"
        >
          <circle cx="8" cy="10" r="6" />
          <path d="M13 15l5 5" />
        </g>
      </svg>
    </Wrapper>
  );
}

export default MagnifyingGlass;
