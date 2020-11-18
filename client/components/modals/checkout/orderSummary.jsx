import React, { useContext } from 'react';
import styled from 'styled-components';
import CheckoutButton from './checkoutButton';
import ViewBagButton from '../../addToBag/addToBagButton';

const Wrapper = styled.div`
  width: 50%;
  margin-top: 20px;
  padding-left: 20px;
  border-left: 1px solid black;
  box-sizing: border-box;
`;

function OrderSummary() {
  return (
    <Wrapper>
      <h5>Your Bag</h5>
      <p>5 items</p>
      <div>
        <span>Total Product Cost:</span>
        <span>$200</span>
      </div>
      <div>
        <span>Total Delivery Cost:</span>
        <span>FREE</span>
      </div>
      <div>
        <span>Total:</span>
        <span>$200</span>
      </div>
      <div>
        <p>Installment options</p>
        <p>Select ‘Affirm’, ‘Klarna’, or ‘Afterpay’ at checkout to pay in interest-free installments.</p>
      </div>
      <ViewBagButton />
      <ViewBagButton />
    </Wrapper>
  );
}

export default OrderSummary;
