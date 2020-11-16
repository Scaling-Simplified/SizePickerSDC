import React from 'react';
import styled from 'styled-components';
import Arrow from './arrow';

function AddToBag() {
  const AddToBagButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    width: 309px;
    height: 50px;
    border: 1px solid black;
    padding: 0 21px;
    box-sizing: border-box;
    cursor: pointer;
  `;

  const Text = styled.span`
    font-family: adihaus;
    color: white;
    padding-top: 3px;
  `;

  return (
    <AddToBagButton>
      <Text>ADD TO CART</Text>
      <Arrow />
    </AddToBagButton>
  );
}

export default AddToBag;
