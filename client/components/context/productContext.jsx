import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedSize, setSelectedSize] = useState(5);
  const [allSizes, setAllSizes] = useState([1, 2, 3, 4, 5, 6]);
  const [favorites, setFavorites] = useState([]);
  const [currentShoe, setCurrentShoe] = useState({});
  return (
    <ProductContext.Provider value={{
      allSizes,
      setAllSizes,
      selectedSize,
      setSelectedSize,
      favorites,
      setFavorites,
      currentShoe,
      setCurrentShoe,
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
