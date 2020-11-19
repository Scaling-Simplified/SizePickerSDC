import React from 'react';
import styled from 'styled-components';
import WishListButton from './wishListButton';
import AddToBagButton from './addToBagButton';
import MembershipLink from '../membershipLink/membershipLink';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  box-sizing: border-box;
`;

function BottomButtons() {
  return (
    <>
      <ButtonsContainer>
        <AddToBagButton sizePicker label="Add to bag" />
        <WishListButton />
      </ButtonsContainer>
      <MembershipLink />
    </>
  );
}

export default BottomButtons;
