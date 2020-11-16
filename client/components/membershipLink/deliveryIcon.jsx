import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 41px;
  margin-right: 5px;
`;

function DeliveryIcon() {
  return (
    <IconWrapper>
      <svg
        width="1.25rem"
        height="1.25rem"
        viewBox="0 0 19 19"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
        >
          <path
            d="M13.42 13.5H9.5"
          />
          <path
            strokeLinecap="square"
            d="M4.5 5.5h10l4 3v5h-2m-10 0h-2m0-6h-4"
          />
          <circle
            cx="8"
            cy="13"
            r="1.5"
          />
          <circle
            cx="15"
            cy="13"
            r="1.5"
          />
          <path
            strokeLinecap="square"
            d="M1.5 9.5h3m-2 2h2"
          />
        </g>
      </svg>
    </IconWrapper>
  );
}

export default DeliveryIcon;
