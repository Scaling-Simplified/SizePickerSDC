import React, { useContext } from 'react';
import styled from 'styled-components';
import ReviewsButton from './reviews';
import Installments from './installments';
import ProductContext from '../context/productContext';

const Title = styled.h1`
  font-size: 42px;
  line-height: 38px;
  font-family: AdihausDIN-Cn,adihausDIN Cn;
  font-style: italic;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1.5px;
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
  font-family: AdihausDIN;
  font-size: 18px;
  margin-top: 20px;
  font-weight: 700;
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
