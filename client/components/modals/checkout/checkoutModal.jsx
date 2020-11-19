import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import OrderSummary from './orderSummary';
import ProductInfo from './productInfo';
import ExitButton from './exitButton';
import ProductContext from '../../context/productContext';

const Background = styled.div`
  display: flex; /*${(props) => (props.show ? 'flex' : 'none')};*/
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const ClickableBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity .2s;
  z-index: -1;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  width: 50%;
  max-width: 90vw;
  max-height: 92vh;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  box-sizing: border-box;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity .45s;
  transition-delay: .1s;
  z-index: 0;
`;

const Title = styled.h5`
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 30px;
  margin: 0;
  z-index: 2;
`;

const ProductBagContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
  z-index: 2;
`;

const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
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
      <ModalContent show={showCheckout}>
        <ModalContentWrapper>
          <Title>Successfully added to bag!</Title>
          <ProductBagContent>
            <ProductInfo />
            <OrderSummary />
          </ProductBagContent>
        </ModalContentWrapper>
        <ExitButton onClick={() => setShowCheckout(false)} />
      </ModalContent>
      <ClickableBackground
        show={showCheckout}
        onClick={() => setShowCheckout(false)}
      />
    </Background>
  );
}

export default CheckoutModal;
