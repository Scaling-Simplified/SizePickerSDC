import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ProductInfo from './productDescription/productInfo';
import SizePicker from './sizeSelector/sizePicker';
import BottomButtons from './addToBag/bottomButtons';
import CheckoutModal from './modals/checkout/checkoutModal';

const Container = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 14px;
  box-sizing: border-box;
`;

const GlobalStyle = createGlobalStyle`
  h5 {
    font-family: AdineuePRO,Helvetica,Arial,sans-serif;
    font-size: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ProductInfo />
      <SizePicker />
      <BottomButtons />
      <CheckoutModal />
    </Container>
  );
}

export default App;
