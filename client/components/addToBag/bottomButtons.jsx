import React, { useContext } from 'react';
import styled from 'styled-components';
import WishListButton from './wishListButton';
import AddToBagButton from './addToBagButton';
import MembershipLink from '../membershipLink/membershipLink';
import ProductContext from '../context/productContext';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  box-sizing: border-box;
`;

function BottomButtons() {
  const { checkoutProcess } = useContext(ProductContext);
  let label;
  if (checkoutProcess.adding) {
    label = 'Adding...';
  } else if (checkoutProcess.added) {
    label = 'Added';
  } else {
    label = 'Add to bag';
  }

  return (
    <>
      <ButtonsContainer>
        <AddToBagButton sizePicker label={label} />
        <WishListButton />
      </ButtonsContainer>
      <MembershipLink />
    </>
  );
}

export default BottomButtons;
