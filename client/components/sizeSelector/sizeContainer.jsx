/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import styled from 'styled-components';
import SizeItem from './sizeItem';
import ProductContext from '../context/productContext';

const Grid = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(80px,1fr));
grid-gap: 0px;
border-top: 1px solid #ebedee;
border-left: 1px solid #ebedee;
margin-bottom: 5px;
`;

function SizeContainer() {
  const { currentShoe } = useContext(ProductContext);
  let items;
  if (currentShoe.skus) {
    items = currentShoe.skus.map((val) => (
      <SizeItem key={val._id} size={val.size} id={val._id} />
    ));
  }

  return (
    <Grid>
      {items}
    </Grid>
  );
}

export default SizeContainer;
