import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import OrderSummary from './orderSummary';
import ProductInfo from './productInfo';
import ExitButton from './exitButton';
import ProductContext from '../../context/productContext';
import {
  Background,
  ClickableBackground,
  ModalContentWrapper,
  ModalContent,
  Title,
} from '../baseModal';

const ProductBagContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
  z-index: 2;
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
        <ExitButton
          handleClick={() => setCheckoutProcess({
            show: false,
            adding: false,
            added: false,
          })}
        />
      </ModalContent>
      <ClickableBackground
        show={checkoutProcess.show}
        onClick={() => setCheckoutProcess({ show: false })}
      />
    </Background>
  );
}

export default CheckoutModal;
