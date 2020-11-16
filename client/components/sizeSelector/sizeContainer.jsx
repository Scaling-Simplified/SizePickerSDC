import React from 'react';
import styled from 'styled-components';
import HoverLink from '../hoverLink';

function SizeContainer() {
  const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px,1fr));
    grid-gap: 0px;
    border-top: 1px solid #ebedee;
    border-left: 1px solid #ebedee;
    margin-bottom: 15px;
  `;
  const sizes = [...Array(12).keys()];
  return (
    <Grid>
      {sizes.map((val) => (
        <HoverLink
          message={val}
          decoration="none"
          marginTop="0"
          height="40px"
          border="1px solid #ebedee"
        />
      ))}
    </Grid>
  );
}

export default SizeContainer;
