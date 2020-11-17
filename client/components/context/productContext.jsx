/* eslint-disable no-underscore-dangle */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import dataMassage from './dataMassage';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedSize, setSelectedSize] = useState(5);
  const [favorites, setFavorites] = useState([]);
  const [currentShoe, setCurrentShoe] = useState({});
  const [lowStock, setLowStock] = useState({});

  useEffect(() => {
    async function getShoes() {
      const res = await axios.get('/api/sizes/1');
      setCurrentShoe(res.data);
      setLowStock(dataMassage.getLowStock(res.data.skus));
    }
    getShoes();
  }, []);

  console.log(lowStock);

  return (
    <ProductContext.Provider value={{
      selectedSize,
      setSelectedSize,
      favorites,
      setFavorites,
      currentShoe,
      setCurrentShoe,
      lowStock,
      setLowStock,
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
