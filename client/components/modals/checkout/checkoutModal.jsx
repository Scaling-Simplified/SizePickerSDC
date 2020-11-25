import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import OrderSummary from './orderSummary';
import ProductInfo from './productInfo';
import ProductContext from '../../context/productContext';
import BaseModal from '../baseModal';

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
    <BaseModal
      title="Successfully added to bag!"
      show={checkoutProcess.show}
      handleExit={() => setCheckoutProcess({
        show: false,
        adding: false,
        added: false,
      })}
    >
      <ProductBagContent>
        <ProductInfo />
        <OrderSummary length={5} total={200} />
      </ProductBagContent>
    </BaseModal>
  );
}

export default CheckoutModal;
