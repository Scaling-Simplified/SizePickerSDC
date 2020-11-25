import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  Background,
  ClickableBackground,
  ModalContentWrapper,
  ModalContent,
  Title,
} from '../baseModal';
import Sizes from './sizes';

function OutOfStockModal() {
  return (
    <Background show>
      <ModalContent show>
        <ModalContentWrapper>
          <Title>Find my size</Title>
          <p>Select your size and we&aposll email you if it&aposs back in stock</p>
        </ModalContentWrapper>
      </ModalContent>
      <ClickableBackground />
    </Background>
  );
}

export default OutOfStockModal;
