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

const LineItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2px;
  border-bottom: ${(props) => (props.border && '1px solid black')};
  margin-bottom: ${(props) => (props.border && '6px')};
  font-family: ${(props) => (props.bold && 'adihaus')};
  padding-top: ${(props) => (props.bold && '2px')};
  box-sizing: border-box;
`;

const Price = styled.span`
  font-size: 16px;
`;

const Installments = styled.span`
  font-size: 16px;
  margin-bottom: 26px;
`;

const ButtonWrapper = styled.div`
  display: block;
  margin-top: 26px;
`;

function OrderSummary() {
  return (
    <Wrapper>
      <h5>Your Bag</h5>
      <p>5 items</p>
      <LineItem>
        <span>Total Product Cost:</span>
        <Price>$200</Price>
      </LineItem>
      <LineItem border>
        <span>Total Delivery Cost:</span>
        <Price>Free</Price>
      </LineItem>
      <LineItem bold>
        <span>Total:</span>
        <Price>$200</Price>
      </LineItem>
      <p>Installment options</p>
      <Installments>
        Select ‘Affirm’, ‘Klarna’, or ‘Afterpay’ at checkout to pay in interest-free installments.
      </Installments>
      <ButtonWrapper>
        <ViewBagButton label="View bag" />
        <CheckoutButton label="Checkout" />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default OrderSummary;
