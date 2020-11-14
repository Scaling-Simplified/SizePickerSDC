import React, { useState } from 'react';
import styled from 'styled-components';
import ProductInfo from './productInfo';

function App() {
  const Container = styled.div`
    max-width: 450px;
    display: flex;
    flex-direction: column;
    font-family: AdihausDIN Cn,Helvetica,Arial,sans-serif;
    padding: 2rem 2.5rem;
  `;

  return (
    <Container>
      <ProductInfo />
    </Container>
  );
}

export default App;
