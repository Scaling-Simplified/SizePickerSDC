import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../../context/productContext';

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  margin-top: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 20px;
  width: 50%;
  box-sizing: border-box;
`;

const Title = styled.span`
  font-size: 20px;
  line-height: 18px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-family: AdihausDIN;
  font-weight: 700;
  font-size: 16px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.photo});
`;

function ProductInfo() {
  const { currentShoe, selectedSize } = useContext(ProductContext);
  const photo = currentShoe.photoUrl;
  return (
    <Wrapper>
      <Column>
        <Image photo={photo} />
      </Column>
      <Column>
        <Title>{currentShoe.name}</Title>
        <Price>${currentShoe.price}</Price>
        <p>
          Color:
          {}
          {currentShoe.color}
        </p>
        <p>
          Size:
          {}
          {selectedSize.size}
        </p>
        <p>Quantity: 1</p>
      </Column>
    </Wrapper>
  );
}

export default ProductInfo;
