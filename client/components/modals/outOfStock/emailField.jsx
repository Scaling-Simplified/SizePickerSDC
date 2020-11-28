import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cross from './cross';
import Asterisk from './asterisk';
import ProductContext from '../../context/productContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const TextBox = styled.div`
  min-height: 50px;
  width: 100%;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
`;

const Input = styled.input`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 16px;
  border: 1px solid #767677;
  line-height: 22px;
  min-height: 50px;
  padding: 13px 20px;
  text-transform: none;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 0 0 #e32b2b;
  z-index: 105;
  box-shadow: ${(props) => ((props.valid || props.valid === null) ? 'none' : '0 1px 0 0 #e32b2b')};
  border-bottom: ${(props) => ((props.valid || props.valid === null) ? '1px solid #767677' : '2px solid #e32b2b')};
  overflow: visible;
  &:focus {outline: none;};
`;

const Label = styled.label`
  color: #767677;
  font-size: ${(props) => (props.focus ? '14px' : '16px')};
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  position: absolute;
  letter-spacing: 1px;
  left: 20px;
  top: ${(props) => (props.focus ? '3%' : '48%')};
  background-color: ${(props) => (props.focus ? 'white' : 'none')};
  transform: translateY(-50%);
  transition: top .2s, font-size .2s, background-color .2s;
  padding: 0 3px;
`;

const Error = styled.p`
  color: #e32b2b;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 5px;
  padding-left: 20px;
  box-sizing: border-box;
`;

function EmailField() {
  const [inputState, setInputState] = useState({ focus: false, valid: null });
  const [email, setEmail] = useState('');
  const { validInputs, setValidInputs } = useContext(ProductContext);
  function checkInput() {
    if (email.length <= 0) {
      setInputState({ valid: false, focus: false });
      setValidInputs({ ...validInputs, email: false });
    } else {
      setInputState({ ...inputState, focus: true });
      if (!(/.+@.+\..+/.test(email))) {
        setInputState({ ...inputState, valid: false });
        setValidInputs({ ...validInputs, email: false });
      } else {
        setInputState({ ...inputState, valid: true });
        setValidInputs({ ...validInputs, email: true });
      }
    }
  }
  return (
    <Wrapper>
      <TextBox valid={inputState.valid}>
        <Input
          type="email"
          valid={inputState.valid}
          onFocus={() => setInputState({ ...inputState, focus: true })}
          onBlur={checkInput}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label focus={inputState.focus}>
          <>
            Email
            <Asterisk shrink={inputState.focus}>*</Asterisk>
          </>
        </Label>
        {(inputState.valid === false) && <Cross />}
      </TextBox>
      {(inputState.valid === false) && (
      <Error>
        Please enter a valid e-mail address
      </Error>
      )}
    </Wrapper>
  );
}

export default EmailField;
