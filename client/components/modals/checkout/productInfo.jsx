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

const Image = styled.div`
  width: 100%;
  background-image: url(https://assets.adidas.com/images/w_600,f_auto,q_auto/559d69bc561f475786a3abc600b3adf6_9366/ZX_2K_Boost_Shoes_White_FX8834_01_standard.jpg);
`;

function ProductInfo() {
  return (
    <Wrapper>
      <Column>
        <Image />
      </Column>
      <Column>
        <Title>ZX 2K BOOST SHOES</Title>
        <p>$150</p>
        <p>Color: Cloud White / Cloud White / Grey One</p>
        <p>Size: M 10 / W 11</p>
        <p>Quantity: 1</p>
      </Column>
    </Wrapper>
  );
}

export default ProductInfo;
