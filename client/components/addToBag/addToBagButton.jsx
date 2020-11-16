import React from 'react';
import styled from 'styled-components';
import Arrow from './arrow';

function AddToBag() {
  const BorderBox = styled.div`
    grid-column: 1;
    grid-row: 1;
    border: 1px solid black;
    width: 309px;
    height: 50px;
    box-sizing: border-box;
    transform: translate(3px, 3px);
    z-index: -1;
  `;

  const AddToBagButton = styled.div`
    display: grid;
    background-color: black;
    width: 309px;
    height: 50px;
    border: 1px solid black;
    box-sizing: border-box;
    transform: translate(-3px, -3px);
  `;

  const TransparencyWrapper = styled.div`
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 21px;
    cursor: pointer;
    box-sizing: border-box;
    &:hover {
      opacity: 50%;
    }
  `;

  const Grid = styled.div`
    display: grid;
    width: 309px;
    height: 50px;
  `;

  const Text = styled.span`
    font-family: adihaus;
    color: white;
    padding-top: 3px;
    letter-spacing: 2px;
    font-size: 13px;
  `;

  return (
    <>
      <AddToBagButton>
        <TransparencyWrapper>
          <Text>ADD TO BAG</Text>
          <Arrow />
        </TransparencyWrapper>
        <BorderBox />
      </AddToBagButton>
    </>
  );
}

export default AddToBag;
