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

function Heart() {
  return (
    <Wrapper>
      <svg height="1.5rem" width="1.5rem" viewBox="0 0 20 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"
        />
      </svg>
    </Wrapper>
  );
}

export default Heart;
