import React, { useState } from 'react';
import styled from 'styled-components';
import Star from './star';

function ReviewsButton() {
  const [highlight, setHighlight] = useState(false);

  const Reviews = styled.span`
    text-decoration: underline;
    display: flex;
    cursor: pointer;
    background-color: ${highlight ? 'black' : 'white'};
    color: ${highlight ? 'white' : 'black'};
  `;
  const StarContainer = styled.div`
    margin-right: 5px;
  `;

  return (
    <Reviews
      onMouseEnter={() => setHighlight(true)}
      onMouseLeave={() => setHighlight(false)}
    >
      <StarContainer>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StarContainer>
      160
    </Reviews>
  );
}

export default ReviewsButton;
