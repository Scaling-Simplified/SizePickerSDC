import React from 'react';
import styled from 'styled-components';
import ProductInfo from './productDescription/productInfo';
import SizePicker from './sizeSelector/sizePicker';
import BottomButtons from './addToBag/bottomButtons';

function App() {
  const Container = styled.div`
    max-width: 450px;
    display: flex;
    flex-direction: column;
    padding: 2rem 2.5rem;
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
    font-size: 14px;
    box-sizing: border-box;
  `;

  return (
    <Container>
      <ProductInfo />
      <SizePicker />
      <BottomButtons />
    </Container>
  );
}

export default App;
