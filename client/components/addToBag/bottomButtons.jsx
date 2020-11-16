import React from 'react';
import styled from 'styled-components';
import WishListButton from './wishListButton';
import AddToBagButton from './addToBagButton';

function BottomButtons() {
  const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    box-sizing: border-box;
  `;

  return (
    <ButtonsContainer>
      <AddToBagButton />
      <WishListButton />
    </ButtonsContainer>
  );
}

export default BottomButtons;
