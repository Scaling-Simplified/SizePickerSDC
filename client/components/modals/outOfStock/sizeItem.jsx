import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductContext from '../../context/productContext';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 5px;
  margin-right: 5px;
  cursor: pointer;
  border: 1px solid ${(props) => (props.selected ? 'black' : '#767677')};
  min-width: 40px;
  height: 40px;
  text-align: center;
  box-shadow: ${(props) => props.selected && 'inset 0 -2px 0 0 black'};
  &:hover {
    box-shadow: inset 0 -2px 0 0 black;
  }
  transition: box-shadow .1s;
  box-sizing: border-box;
`;

function SizeItem({ size, id }) {
  const { outOfStock, setOutOfStock } = useContext(ProductContext);
  const selected = outOfStock.selected.id === id;
  return (
    <Box
      selected={selected}
      onClick={
        () => setOutOfStock({ selected: { id, size }, all: [...outOfStock.all] })
      }
    >
      {size}
    </Box>
  );
}

SizeItem.propTypes = {
  size: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SizeItem;
