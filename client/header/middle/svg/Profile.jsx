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

function Profile() {
  return (
    <Wrapper>
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 20 24">
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2">
          <path d="M19 20.5L15.63 16H4.38L1 20.5" />
          <circle cx="10" cy="8.5" r="4.5" />
        </g>
      </svg>
    </Wrapper>
  );
}

export default Profile;
