import React from 'react';
import styled from 'styled-components';
import ReviewsButton from './reviews';
import Installments from './installments';

function ProductInfo() {
  const Title = styled.h1`
    font-size: 42px;
    line-height: 2rem;
    font-family: AdihausDIN Cn;
    font-style: italic;
    text-transform: uppercase;
    margin: 0;
  `;

  const PreHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
  `;

  const Color = styled.span`
    margin-top: 10px;
  `;

  const Price = styled.span`
    font-family: Adihaus;
    font-size: 18px;
    margin-top: 20px;
  `;

  return (
    <>
      <PreHeader>
        <span>Originals</span>
        <ReviewsButton
          onMouseOver={() => {}}
        />
      </PreHeader>
      <Title>ZX 2K BOOST SHOES</Title>
      <Color>Cloud White / Grey Two / Core Black</Color>
      <Price>$150</Price>
      <Installments />
    </>
  );
}

export default ProductInfo;
