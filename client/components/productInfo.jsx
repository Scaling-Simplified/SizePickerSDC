import React from 'react';
import styled from 'styled-components';
import ReviewsButton from './reviews';

function ProductInfo() {
  const Title = styled.h1`
    font-size: 2.5rem;
    line-height: 2rem;
  `;

  const Category = styled.span`
    font-size: 1rem;
    font-weight: 400;
  `;

  const PreHeader = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <>
      <PreHeader>
        <Category>Originals</Category>
        <ReviewsButton />
      </PreHeader>
      <Title>ZX 2K BOOST SHOES</Title>
    </>
  );
}

export default ProductInfo;
