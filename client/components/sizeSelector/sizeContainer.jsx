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
  const { allSizes, setAllSizes } = useContext(ProductContext);
  //const sizes = [...Array(12).keys()];
  //setAllSizes([0, 1, 2, 3, 4, 5]);
  return (
    <Grid>
      {allSizes.map((val) => (
        <SizeItem size={val} />
      ))}
    </Grid>
  );
}

export default SizeContainer;
