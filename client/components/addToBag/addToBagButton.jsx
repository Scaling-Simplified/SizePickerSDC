import React from 'react';
import styled from 'styled-components';

function AddToBag() {
  const AddToBagButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 309px;
    height: 50px;
    border: 1px solid black;
    padding: 0 21px;
    box-sizing: border-box;
  `;

  return (
    <AddToBagButton>
      <span>ADD TO BAG</span>
    </AddToBagButton>
  );
}

export default AddToBag;
