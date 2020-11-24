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
  const { checkoutProcess, setCheckoutProcess } = useContext(ProductContext);
  let label;
  if (checkoutProcess.adding) {
    label = 'Adding...';
  } else if (checkoutProcess.added) {
    label = 'Added';
  } else {
    label = 'Add to bag';
  }

  async function addShoeToCart() {
    setCheckoutProcess({ adding: true });
    setTimeout(() => setCheckoutProcess({ adding: false, show: true }), 1200);
  }

  return (
    <>
      <ButtonsContainer>
        <AddToBagButton sizePicker label={label} handleClick={addShoeToCart} />
        <WishListButton />
      </ButtonsContainer>
      <MembershipLink />
    </>
  );
}

export default BottomButtons;
