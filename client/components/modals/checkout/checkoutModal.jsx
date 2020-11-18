import React, { useContext } from 'react';
import styled from 'styled-components';
import OrderSummary from './orderSummary';
import ProductInfo from './productInfo';

// close modal on click
const Background = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
  background-color: white;
  width: 50%;
  max-width: 90vw;
  max-height: 92vh;
  overflow: auto;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Title = styled.h5`
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 30px;
  margin: 0;
`;

const ProductBagContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%
`;

function CheckoutModal() {
  return (
    <Background>
      <ModalContent>
        <Title>Successfully added to bag!</Title>
        <ProductBagContent>
          <ProductInfo />
          <OrderSummary />
        </ProductBagContent>
      </ModalContent>
    </Background>
  );
}

export default CheckoutModal;
