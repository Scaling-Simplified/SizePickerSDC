import React from 'react';
import styled from 'styled-components';
import ProductInfo from './productInfo';

function App() {
  const Container = styled.div`
    max-width: 450px;
    display: flex;
    flex-direction: column;
    padding: 2rem 2.5rem;
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
    font-size: 14px;
  `;

  return (
    <Container>
      <ProductInfo />
    </Container>
  );
}

export default App;
