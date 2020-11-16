import React from 'react';
import styled from 'styled-components';
import Heart from './heart';

function WishListButton() {
  const HeartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid black;
    margin-left: 10px;
    box-sizing: border-box;
    cursor: pointer;
  `;

  return (
    <HeartContainer>
      <Heart />
    </HeartContainer>
  );
}

export default WishListButton;
