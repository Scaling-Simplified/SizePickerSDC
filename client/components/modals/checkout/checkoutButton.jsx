import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Arrow from '../../addToBag/arrow';

const Checkout = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  box-sizing: border-box;
  margin-top: 10px;
  &:active {
    transform: scale(.97, .97)
  }
  transition: transform .1s
`;

const TransparencyWrapper = styled.div`
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
  transition: opacity .1s;
`;

const Text = styled.span`
  font-family: adihaus;
  color: black;
  padding-top: 3px;
  letter-spacing: 2px;
  font-size: 13px;
  text-transform: uppercase;
`;

// TODO: add text here
function CheckoutButton({ label }) {
  return (
    <Checkout>
      <TransparencyWrapper>
        <Text>{label}</Text>
        <Arrow color="black" />
      </TransparencyWrapper>
    </Checkout>
  );
}

export default CheckoutButton;

CheckoutButton.propTypes = {
  label: PropTypes.string.isRequired,
};
