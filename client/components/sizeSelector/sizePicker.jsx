import React, { useContext } from 'react';
import styled from 'styled-components';
import SizeContainer from './sizeContainer';
import ModalLink from '../modalLink';
import ProductContext from '../context/productContext';

const SelectSizeText = styled.span`
  margin: 20px 0;
  font-family: AdihausDIN;
  font-weight: 700;
  box-sizing: border-box;
`;

const LowStockText = styled.span`
  color: #e63f3f; /* TODO: find real color */
  margin-top: 5px;
  margin-bottom: 14px;
  line-height: 20px;
  box-sizing: border-box;
`;

function SizeSelector() {
  const { selectedSize } = useContext(ProductContext);
  return (
    <>
      <SelectSizeText>Select size</SelectSizeText>
      <SizeContainer />
      {selectedSize.stock < 6
        && (
        <LowStockText>
          {`Only ${selectedSize.stock} left in stock`}
        </LowStockText>
        )}
      <ModalLink message="Size out of stock?" />
    </>
  );
}

export default SizeSelector;
