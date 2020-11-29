import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  cursor: pointer;
  box-sizing: border-box;
`;

function Bag() {
  return (
    <Wrapper>
      <svg height="1.5rem" width="1.5rem" viewBox="0 0 16 24">
        <title>bag-inactive</title>
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2">
          <path d="M1 7h14v14H1z" />
          <path d="M11 10V3H5v7" />
        </g>
      </svg>
    </Wrapper>
  );
}

export default Bag;
