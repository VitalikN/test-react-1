import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { productsReducer } from './productSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
  },
});
