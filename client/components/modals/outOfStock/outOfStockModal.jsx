/* eslint-disable no-underscore-dangle */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ProductContext from '../../context/productContext';
import BaseModal from '../baseModal';
import SizeItem from './sizeItem';
import EmailField from './emailField';
import Asterisk from './asterisk';
import Checkbox from './checkbox';
import HoverLink from '../../hoverLink';
import SignUpButton from './signUpButton';

const Text = styled.p`
  font-family: AdihausDIN, Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: black;
`;

const Header = styled.p`
  font-size: 16px;
  margin: 16px 0;
  line-height: 22px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: ${(props) => props.top || '0px'};
`;

function OutOfStockModal() {
  const {
    modalView,
    setModalView,
    outOfStock,
    setOutOfStock,
    validInputs,
    setValidInputs,
  } = useContext(ProductContext);
  const message = "Select your size and we'll email you if it's back in stock";
  return (
    <BaseModal
      title="Find my size"
      show={modalView.outOfStock}
      handleExit={() => {
        setModalView({ outOfStock: false });
        setOutOfStock({ all: [...outOfStock.all], selected: { size: '', id: '' } });
      }}
    >
      <Header>{message}</Header>
      <FlexContainer>
        <Text>Size</Text>
        <Asterisk shrink />
      </FlexContainer>
      <FlexContainer>
        {outOfStock.all.map((item) => (
          <SizeItem key={item._id} size={item.size} id={item._id} />
        ))}
      </FlexContainer>
      <EmailField />
      <FlexContainer top="20px">
        <Checkbox handleClick={(bool) => setValidInputs({ ...validInputs, checkbox: bool })}>
          Yes, I am over 13 years old
          <Asterisk />
        </Checkbox>
      </FlexContainer>
      <FlexContainer top="20px">
        <Checkbox>
          Sign me up to adidas Creators Club, featuring exclusive offers, latest product info, news
          about upcoming events and more. Please see our Terms & Conditions and{' '}
          <HoverLink message="Privacy Policy" /> and Creators Club{' '}
          <HoverLink message="Terms & Conditions" /> for more details. I agree to receive
          personalised email marketing messages from adidas America, Inc. and runtastic GmbH
          ("runtastic").
          <Asterisk />
        </Checkbox>
      </FlexContainer>
      <SignUpButton enabled={Object.values(validInputs).every(Boolean)} />
    </BaseModal>
  );
}

export default OutOfStockModal;
