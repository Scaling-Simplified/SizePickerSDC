import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Header from './header/HeaderApp';
import { ProductProvider } from './components/context/productContext';

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('SizePicker')
);

// Header is purely aesthetic
// This and the 'header' folder in components can be safely deleted
// with no loss of functionality
ReactDOM.render(
  <ProductProvider>
    <Header />
  </ProductProvider>,
  document.getElementById('Header')
);
