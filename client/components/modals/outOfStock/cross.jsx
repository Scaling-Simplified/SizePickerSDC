import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
`;

function Cross() {
  return (
    <Wrapper>
      <svg width="1.75rem" height="1.75rem" viewBox="0 0 14 24">
        <path d="M13 6l-6 6 6 6M1 6l6 6-6 6" fill="none" stroke="#e32b2b" strokeMiterlimit="10" strokeWidth="2" />
      </svg>
    </Wrapper>
  );
}

export default Cross;
