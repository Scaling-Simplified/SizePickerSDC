import React from 'react';
import styled from 'styled-components';

function TransparencyWrapper() {
  const Wrapper = styled.div`
    opacity: 75%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return <Wrapper />;
}

export default TransparencyWrapper;
