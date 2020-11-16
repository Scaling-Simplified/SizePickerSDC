import React from 'react';
import styled from 'styled-components';
import SizeContainer from './sizeContainer';
import ModalLink from '../modalLink';

function SizeSelector() {
  const SelectSizeText = styled.span`
    margin: 20px 0;
    font-family: adihaus;
    box-sizing: border-box;
  `;

  return (
    <>
      <SelectSizeText>Select size</SelectSizeText>
      <SizeContainer />
      <ModalLink message="Size out of stock?" />
    </>
  );
}

export default SizeSelector;
