import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  min-height: 24px;
  max-height: 24px;
  min-width: 24px;
  max-width: 24px;
  margin-right: 14px;
  justify-content: center;
  border: ${(props) => (props.checked ? '1px solid black' : '1px solid #767677')};
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
  transition: border-color 0.1s;
  box-sizing: border-box;
  background-color: ${(props) => (props.checked ? 'black' : 'white')};
`;

function Checkmark({ checked }) {
  return (
    <Wrapper checked={checked}>
      <svg height="1.25rem" width="1.25rem" viewBox="0 0 16 24">
        <path fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="2" d="M1 13l4 4L15 7" />
      </svg>
    </Wrapper>
  );
}

Checkmark.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Checkmark;
