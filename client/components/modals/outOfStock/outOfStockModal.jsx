import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../../context/productContext';
import BaseModal from '../baseModal';

function OutOfStockModal() {
  const { outOfStockModal, setOutOfStockModal } = useContext(ProductContext);
  const message = 'Select your size and we\'ll email you if it\'s back in stock';
  return (
    <BaseModal
      title="Find my size"
      show={outOfStockModal}
      handleExit={() => setOutOfStockModal(false)}
    >
      <p>{message}</p>
    </BaseModal>
  );
}

export default OutOfStockModal;
