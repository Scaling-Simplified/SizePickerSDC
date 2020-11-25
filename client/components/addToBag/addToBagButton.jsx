import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Arrow from './arrow';
import Spinner from './spinner';
import Checkmark from './checkmark';

const BorderBox = styled.div`
  grid-column: 1;
  grid-row: 1;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  z-index: -1;
`;

const AddToBagButton = styled.div`
  grid-column: 1;
  grid-row: 1;
  background-color: black;
  width: 100%;
  height: 50px;
  border: 1px solid black;
  box-sizing: border-box;
  transform: translate(-3px, -3px);
  &:active {
    transform: translate(0px, 0px);
  }
  transition: transform .1s;
`;

const TransparencyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    opacity: 50%;
  }
  transition: opacity .1s;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
`;

const Text = styled.span`
  font-family: AdihausDIN;
  color: white;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
`;

function AddToBag({ label, handleClick, icon }) {
  return (
    <Grid>
      <AddToBagButton onClick={handleClick}>
        <TransparencyWrapper>
          <Text>{label}</Text>
          {(icon.checkoutAdding && <Spinner />)
          || (icon.checkoutShow && <Checkmark />)
          || <Arrow />}
        </TransparencyWrapper>
      </AddToBagButton>
      <BorderBox />
    </Grid>
  );
}

export default AddToBag;

AddToBag.defaultProps = {
  handleClick: () => {},
  icon: { checkoutAdding: false, checkoutShow: false },
};

AddToBag.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  icon: PropTypes.shape({
    checkoutAdding: PropTypes.bool,
    checkoutShow: PropTypes.bool,
  }),
};
