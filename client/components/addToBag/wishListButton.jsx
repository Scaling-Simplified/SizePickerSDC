import React from 'react';
import styled from 'styled-components';

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
  `;

  return (
    <HeartContainer />
  );
}

export default WishListButton;
