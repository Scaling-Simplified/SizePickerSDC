import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSizeBlock = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ebedee;
  border-bottom: 1px solid #ebedee;
  width: 92px;
  height: 40px;
  cursor: pointer;
  margin-top: 0;
  &:hover {
    background-color: black;
    color: white
  }
  box-sizing: border-box;
`;

function SizeItem({ size }) {
  return (
    <StyledSizeBlock>
      <span>{ size }</span>
    </StyledSizeBlock>
  );
}

export default SizeItem;

SizeItem.propTypes = {
  size: PropTypes.string.isRequired,
};
