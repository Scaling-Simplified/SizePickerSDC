import React, { useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import Heart from './heart';
import ProductContext from '../context/productContext';

const HeartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  margin-left: 10px;
  box-sizing: border-box;
  cursor: pointer;
  &:active {
    transform: scale(.95, .95);
  }
  transition: transform .1s;
`;

function WishListButton() {
  const { currentShoe, favorites, setFavorites } = useContext(ProductContext);
  const newFavorites = [...favorites];
  const {
    _id,
    id,
    name,
    price,
    photo_url,
  } = currentShoe;
  const current = {
    _id,
    id,
    name,
    price,
    photo_url,
  };
  console.log(favorites);
  return (
    <HeartContainer onClick={() => {
      if (_.find(favorites, current)) {
        _.remove(newFavorites, { id: current.id });
      } else {
        newFavorites.push(currentShoe);
      }
      setFavorites(newFavorites);
    }}
    >
      <Heart />
    </HeartContainer>
  );
}

export default WishListButton;
