import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { AppProvider } from './context/app_context'

ReactDOM.render(
  <ProductsProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </ProductsProvider>



  ,
  document.getElementById('root')
);

