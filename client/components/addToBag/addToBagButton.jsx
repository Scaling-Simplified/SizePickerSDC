import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import Arrow from './arrow';
import Spinner from './spinner';
import ProductContext from '../context/productContext';

const BorderBox = styled.div`
  grid-column: 1;
  grid-row: 1;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  z-index: ${(props) => (props.sizePicker && '-1')};
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

function AddToBag({ sizePicker, label, handleClick }) {
  const {
    checkoutProcess,
    setCheckoutProcess,
    currentShoe,
    selectedSize,
    setCart,
  } = useContext(ProductContext);

  async function addShoeToCart() {
    const selected = {
      name: currentShoe.name,
      itemId: currentShoe.id,
      color: currentShoe.color,
      price: currentShoe.price,
      photoUrl: currentShoe.photoUrl,
      size: selectedSize.size,
      stock: selectedSize.stock,
    };
    // disable button activate spinner
    setCheckoutProcess({ adding: true });
    //const res = await axios.post('/api/cart', selected);
    //setCart(res.data);

    setTimeout(() => setCheckoutProcess({ adding: false, show: true }), 1200);
  }

  return (
    <Grid>
      <AddToBagButton onClick={handleClick}>
        <TransparencyWrapper>
          <Text>{label}</Text>
          {!checkoutProcess.adding && <Arrow />}
          {checkoutProcess.adding && <Spinner />}
        </TransparencyWrapper>
      </AddToBagButton>
      <BorderBox sizePicker={sizePicker} />
    </Grid>
  );
}

export default AddToBag;

AddToBag.defaultProps = {
  sizePicker: false,
  handleClick: () => {},
};

AddToBag.propTypes = {
  sizePicker: PropTypes.bool,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
