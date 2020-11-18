import React, { useContext } from 'react';
import styled from 'styled-components';
import Star from './star';
import productContext from '../context/productContext';

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
  display: flex;
  flex-direction: row;
`;

function ReviewsButton() {
  const { ratingInfo } = useContext(productContext);
  const { numOfReviews, averageRating } = ratingInfo;
  return (
    <Reviews>
      <StarContainer>
        <Star fill={averageRating} />
        <Star fill={averageRating - 1} />
        <Star fill={averageRating - 2} />
        <Star fill={averageRating - 3} />
        <Star fill={averageRating - 4} />
      </StarContainer>
      {numOfReviews}
    </Reviews>
  );
}

export default ReviewsButton;
