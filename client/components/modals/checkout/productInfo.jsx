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
  font-family: adihaus;
  font-size: 16px;
  margin-bottom: 2px;
`;

const Image = styled.img`
  width: 100%;
  content: url(https://myfecbucket.s3-us-west-1.amazonaws.com/fec+pictures/nmd_rwb/NMD_R1_Shoes_Blue_FV1734_01_standard.jpg);
`;

function ProductInfo() {
  const { currentShoe, selectedSize } = useContext(ProductContext);
  return (
    <Wrapper>
      <Column>
        <Image />
      </Column>
      <Column>
        <Title>{currentShoe.name}</Title>
        <Price>
          $
          {currentShoe.price}
        </Price>
        <p>
          Color:
          { }
          {currentShoe.color}
        </p>
        <p>
          Size:
          { }
          {selectedSize.size}
        </p>
        <p>Quantity: 1</p>
      </Column>
    </Wrapper>
  );
}

export default ProductInfo;
