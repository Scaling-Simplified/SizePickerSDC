import React, { useContext } from 'react';
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
  const { modalView, setModalView, cart } = useContext(ProductContext);
  const total = cart.reduce((acc, curr) => acc + curr, 0);
  return (
    <BaseModal
      title="Successfully added to bag!"
      show={modalView.checkoutShow}
      handleExit={() =>
        setModalView({
          checkoutShow: false,
          checkoutAdding: false,
          checkoutAdded: false,
        })
      }
    >
      <ProductBagContent>
        <ProductInfo />
        <OrderSummary length={cart.length} total={total} />
      </ProductBagContent>
    </BaseModal>
  );
}

export default CheckoutModal;
