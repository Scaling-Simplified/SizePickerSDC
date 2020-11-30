import React, { useContext } from 'react';
import styled from 'styled-components';
import WishListButton from './wishListButton';
import AddToBagButton from './addToBagButton';
import MembershipLink from '../membershipLink/membershipLink';
import ProductContext from '../context/productContext';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

function BottomButtons() {
  const { modalView, setModalView, currentShoe, selectedSize, setCart, cart } = useContext(
    ProductContext
  );
  let label;
  if (modalView.checkoutAdding) {
    label = 'Adding...';
  } else if (modalView.checkoutShow) {
    label = 'Added!';
  } else {
    label = 'Add to bag';
  }

  async function addShoeToCart() {
    // const selected = {
    //   name: currentShoe.name,
    //   itemId: currentShoe.id,
    //   color: currentShoe.color,
    //   price: currentShoe.price,
    //   photoUrl: currentShoe.photoUrl,
    //   size: selectedSize.size,
    //   stock: selectedSize.stock,
    // };
    // const res = await axios.post('/api/cart', selected);
    // setCart(res.data);

    setModalView({ checkoutAdding: true });
    setTimeout(() => setModalView({ checkoutAdding: false, checkoutShow: true }), 1200);
    setCart([...cart, currentShoe.price]);
  }

  return (
    <>
      <ButtonsContainer>
        <AddToBagButton label={label} handleClick={addShoeToCart} icon={modalView} />
        <WishListButton />
      </ButtonsContainer>
      <MembershipLink
        handleClick={() => setModalView({ creatorsClub: true })}
        message="JOIN HIDDEN TEMPLE TO GET UNLIMITED FREE SHIPPING, RETURNS, & EXCHANGES"
      />
      <MembershipLink
        handleClick={() => setModalView({ returns: true })}
        message="FREE 90 DAY EXTENDED HOLIDAY RETURNS & EXCHANGES"
      />
    </>
  );
}

export default BottomButtons;
