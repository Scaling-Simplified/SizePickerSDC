import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductContext from '../context/productContext';

const StyledSizeBlock = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  border-right: 1px solid #ebedee;
  border-bottom: 1px solid #ebedee;
  width: 92px;
  height: 40px;
  cursor: pointer;
  margin-top: 0;
  background-color: ${props => props.selected && 'black'};
  color: ${props => props.selected && 'white'};
  &:hover {
    background-color: black;
    color: white
  }
  box-sizing: border-box;
`;

function SizeItem({ size, id }) {
  const { selectedSize, setSelectedSize } = useContext(ProductContext);
  const selected = selectedSize === id;
  return (
    <StyledSizeBlock selected={selected} onClick={() => setSelectedSize(id)}>
      <span>{ size }</span>
    </StyledSizeBlock>
  );
}

export default SizeItem;

SizeItem.propTypes = {
  size: PropTypes.string.isRequired,
};
