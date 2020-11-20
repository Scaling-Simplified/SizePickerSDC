import React, { useContext } from 'react';
import styled from 'styled-components';

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
  return (
    <Wrapper>
      <Column>
        <Image />
      </Column>
      <Column>
        <Title>ZX 2K BOOST SHOES</Title>
        <Price>$150</Price>
        <p>Color: Cloud White / Cloud White / Grey One</p>
        <p>Size: M 10 / W 11</p>
        <p>Quantity: 1</p>
      </Column>
    </Wrapper>
  );
}

export default ProductInfo;
