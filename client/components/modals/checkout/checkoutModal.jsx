import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import OrderSummary from './orderSummary';
import ProductInfo from './productInfo';
import ExitButton from './exitButton';
import ProductContext from '../../context/productContext';

const Background = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
`;

const ClickableBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  z-index: -1;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  width: 50%;
  max-width: 90vw;
  max-height: 92vh;
  overflow: auto;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  box-sizing: border-box;
  z-index: 0;
`;

const Title = styled.h5`
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 30px;
  margin: 0;
  z-index: 1;
`;

const ProductBagContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%
  z-index: 1;
`;

function CheckoutModal() {
  const { showCheckout, setShowCheckout } = useContext(ProductContext);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    showCheckout && (document.body.style.overflow = 'hidden');
    // eslint-disable-next-line no-unused-expressions
    !showCheckout && (document.body.style.overflow = '');
  }, [showCheckout]);
  return (
    <Background show={showCheckout}>
      <ModalContent>
        <ExitButton onClick={() => setShowCheckout(false)} />
        <Title>Successfully added to bag!</Title>
        <ProductBagContent>
          <ProductInfo />
          <OrderSummary />
        </ProductBagContent>
      </ModalContent>
      <ClickableBackground onClick={() => setShowCheckout(false)} />
    </Background>
  );
}

export default CheckoutModal;
