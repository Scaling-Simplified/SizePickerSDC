import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../../context/productContext';
import BaseModal from '../baseModal';

const size = styled.p`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 2px;
`;

function OutOfStockModal() {
  const { modalView, setModalView } = useContext(ProductContext);
  const message = 'Select your size and we\'ll email you if it\'s back in stock';
  return (
    <BaseModal
      title="Find my size"
      show={modalView.outOfStock}
      handleExit={() => setModalView({ outOfStock: false })}
    >
      <p>{message}</p>
    </BaseModal>
  );
}

export default OutOfStockModal;
