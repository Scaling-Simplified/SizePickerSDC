import React from 'react';
import styled from 'styled-components';
import Star from './star';

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
  transition: color .1s, background-color .1s;
`;

const StarContainer = styled.div`
  margin-right: 5px;
`;

function ReviewsButton() {
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
