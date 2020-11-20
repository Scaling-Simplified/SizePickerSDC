/* eslint-disable no-underscore-dangle */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import dataMassage from './dataMassage';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedSize, setSelectedSize] = useState({ id: null, size: null, stock: 100 });
  const [favorites, setFavorites] = useState([]);
  const [currentShoe, setCurrentShoe] = useState({});
  const [outOfStock, setOutOfStock] = useState([]);
  const [ratingInfo, setRatingInfo] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getShoes() {
      const res = await axios.get('/api/shoes/9');
      const [noStock, hasStock] = dataMassage.getOutOfStock(res.data.skus);
      res.data.skus = hasStock;
      setCurrentShoe(res.data);
      setOutOfStock(noStock);
      setRatingInfo({ numOfReviews: res.data.numOfReviews, averageRating: res.data.averageRating });
    }
    getShoes();
  }, []);

  return (
    <ProductContext.Provider value={{
      selectedSize,
      setSelectedSize,
      favorites,
      setFavorites,
      currentShoe,
      setCurrentShoe,
      outOfStock,
      setOutOfStock,
      ratingInfo,
      setRatingInfo,
      showCheckout,
      setShowCheckout,
      cart,
      setCart,
    }}
    >
      { children }
    </ProductContext.Provider>
  );
};

export default ProductContext;

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
