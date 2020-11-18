import React, { useContext } from 'react';
import styled from 'styled-components';
import ReviewsButton from './reviews';
import Installments from './installments';
import ProductContext from '../context/productContext';

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

function ProductInfo() {
  const { currentShoe } = useContext(ProductContext);
  const { id } = currentShoe;
  return (
    <>
      <PreHeader>
        <span>Originals</span>
        <ReviewsButton />
      </PreHeader>
      <Title>{currentShoe.name}</Title>
      <Color>{currentShoe.color}</Color>
      <Price>
        $
        {currentShoe.price}
      </Price>
      <Installments currentId={id} />
    </>
  );
}

export default ProductInfo;
