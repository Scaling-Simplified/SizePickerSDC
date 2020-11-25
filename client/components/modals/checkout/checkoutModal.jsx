import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import OrderSummary from './orderSummary';
import ProductInfo from './productInfo';
import ExitButton from './exitButton';
import ProductContext from '../../context/productContext';
import { Background, ClickableBackground, ModalContent } from '../baseModal';

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
  const { checkoutProcess, setCheckoutProcess } = useContext(ProductContext);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    checkoutProcess.show && (document.body.style.overflow = 'hidden');
    // eslint-disable-next-line no-unused-expressions
    !checkoutProcess.show && (document.body.style.overflow = '');
  });
  return (
    <Background show={checkoutProcess.show}>
      <ModalContent show={checkoutProcess.show}>
        <ModalContentWrapper>
          <Title>Successfully added to bag!</Title>
          <ProductBagContent>
            <ProductInfo />
            <OrderSummary length={5} total={200} />
          </ProductBagContent>
        </ModalContentWrapper>
        <ExitButton handleClick={() => setCheckoutProcess({ show: false })} />
      </ModalContent>
      <ClickableBackground
        show={checkoutProcess.show}
        onClick={() => setCheckoutProcess({ show: false })}
      />
    </Background>
  );
}

export default CheckoutModal;
