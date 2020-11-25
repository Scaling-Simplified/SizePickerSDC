import React from 'react';

function Checkmark() {
  return (
    <svg
      width="2rem"
      height="1.75rem"
      viewBox="0 0 16 24"
    >
      <path
        fill="none"
        stroke="white"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M1 13l4 4L15 7"
      />
    </svg>
  );
}

export default Checkmark;
