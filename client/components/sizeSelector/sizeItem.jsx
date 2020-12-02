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
  background-color: ${(props) => props.selected && 'black'};
  font-weight: ${(props) => props.selected && '800'} !important;
  color: ${(props) => props.selected && 'white'};
  &:hover {
    background-color: black;
    color: white;
  }
  box-sizing: border-box;
`;

function SizeItem({ size, id, stock }) {
  const { selectedSize, setSelectedSize, setAddError } = useContext(ProductContext);
  const selected = selectedSize.id === id;
  return (
    <StyledSizeBlock
      selected={selected}
      onClick={() => {
        setSelectedSize({ id, size, stock });
        setAddError(false);
      }}
    >
      <span>{size}</span>
    </StyledSizeBlock>
  );
}

export default SizeItem;

SizeItem.propTypes = {
  size: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};
