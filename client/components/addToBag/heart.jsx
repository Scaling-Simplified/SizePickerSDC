import React, { useState } from 'react';
import styled from 'styled-components';

function Heart() {
  const [heartFilled, setHeartFilled] = useState(false);
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      opacity: 50%;
    }
  `;

  return (
    <Wrapper onClick={() => setHeartFilled(!heartFilled)}>
      <svg
        viewBox="0 0 20 24"
        width="1.5rem"
        height="1.5rem"
      >
        <path
          fill={heartFilled ? 'currentColor' : 'none'}
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
