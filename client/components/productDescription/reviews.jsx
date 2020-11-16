import React from 'react';
import styled from 'styled-components';
import Star from './star';

function ReviewsButton() {
  const Reviews = styled.span`
    text-decoration: underline;
    display: flex;
    cursor: pointer;
    background-color: 'white';
    color: 'black';
    &:hover {
      background-color: black;
      color: white
    }
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
