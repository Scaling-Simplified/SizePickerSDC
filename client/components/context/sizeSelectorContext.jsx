import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SizeContext = createContext();

export const SizeProvider = ({ children }) => {
  const [selectedSize, updateSelectedSize] = useState(null);
  const [allSizes, updateAllSizes] = useState([]);
  return (
    <SizeContext.Provider value={{
      allSizes,
      selectedSize,
      updateAllSizes,
      updateSelectedSize,
    }}
    >
      { children }
    </SizeContext.Provider>
  );
};

export default SizeContext;

SizeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
