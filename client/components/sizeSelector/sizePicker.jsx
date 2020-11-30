import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import SizeContainer from './sizeContainer';
import ModalLink from '../modalLink';
import ProductContext from '../context/productContext';

const SelectSizeText = styled.span`
  margin-bottom: 20px;
  font-family: AdihausDIN;
  font-weight: 700;
  box-sizing: border-box;
`;

const LowStockText = styled.span`
  color: #e63f3f;
  margin-top: 5px;
  margin-bottom: 14px;
  line-height: 20px;
  box-sizing: border-box;
`;

const jiggle = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-5px);
  }
  40% {
    transform: translate(5px);
  }
  60% {
    transform: translate(-5px);
  }
  80% {
    transform: translate(5px);
  }
  0% {
    transform: translate(0);
  }
`;

const Jiggle = styled.div`
  animation: ${(props) => props.enabled && `${jiggle} 0.4s ease 1`};
  margin-top: 20px;
`;

function SizeSelector() {
  const { selectedSize, setModalView } = useContext(ProductContext);
  return (
    <>
      <Jiggle enabled={false}>
        <SelectSizeText>Select size</SelectSizeText>
        <SizeContainer />
        {selectedSize.stock < 6 && (
          <LowStockText>{`Only ${selectedSize.stock} left in stock`}</LowStockText>
        )}
      </Jiggle>
      <ModalLink
        handleClick={() => setModalView({ outOfStock: true })}
        message="Size out of stock?"
      />
    </>
  );
}

export default SizeSelector;
