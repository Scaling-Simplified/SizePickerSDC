import React from 'react';
import styled from 'styled-components';
import Star from './star';

function ReviewsButton() {
  const Reviews = styled.span`
    font-weight: 700;
    font-size: 1rem;
    text-decoration: underline;
    display: flex;
  `;
  const StarContainer = styled.div`
    margin-right: 5px;
  `;

  return (
    <Reviews>
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
