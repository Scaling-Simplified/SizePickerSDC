import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ProductInfo from './productDescription/productInfo';
import SizePicker from './sizeSelector/sizePicker';
import BottomButtons from './addToBag/bottomButtons';
import CheckoutModal from './modals/checkout/checkoutModal';
import OutOfStockModal from './modals/outOfStock/outOfStockModal';
import InstallmentsModal from './modals/installments/installmentsModal';
import CreatorsClubModal from './modals/creatorsClub/creatorsClubModal';
import ReturnsModal from './modals/returns/returnsModal';

const Container = styled.div`
  width: 450px;
  height: 100vh;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  font-family: AdihausDIN, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  border-left: 1px solid rgb(235, 237, 238);
  box-sizing: border-box;
  @media (min-width: 1280px) {
    width: 430px;
    padding: 30px 30px;
  }
  @media (min-width: 1440px) {
    width: 450px;
    padding: 30px 40px;
  }
  @media (min-width: 1680px) {
    width: 490px;
    padding: 30px 60px;
  }
`;

const GlobalStyle = createGlobalStyle`
  h5 {
    font-family: AdineuePRO,Helvetica,Arial,sans-serif;
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  p {
    margin-top: 0;
    margin-bottom: 2px;
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
      <OutOfStockModal />
      <InstallmentsModal />
      <CreatorsClubModal />
      <ReturnsModal />
    </Container>
  );
}

export default App;
