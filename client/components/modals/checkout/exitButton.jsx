import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  position: absolute;
  right: -17px;
  top: -17px;
  background-color: white;
  border: 1px solid black;
  max-height: 36px;
  max-width: 36px;
  z-index: 2;
  cursor: pointer;
  &:active {
    transform: scale(.95, .95);
  }
  transition: transform .1s;
`;

function ExitButton() {
  return (
    <Button>
      <svg width="1.75rem" height="1.75rem" viewBox="0 0 14 24">
        <path d="M13 6l-6 6 6 6M1 6l6 6-6 6" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" />
      </svg>
    </Button>
  );
}

export default ExitButton;
