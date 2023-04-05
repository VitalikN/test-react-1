import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProducts,
  addProduct,
  removeProduct,
  productDetails,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchProducts.pending]: handlePending,
    [fetchProducts.rejected]: handleRejected,

    [addProduct.pending]: handlePending,
    [addProduct.rejected]: handleRejected,

    [removeProduct.pending]: handlePending,
    [removeProduct.rejected]: handleRejected,

    [fetchProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [removeProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        product => product.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [productDetails.pending]: handlePending,
    [productDetails.rejected]: handleRejected,
    [productDetails.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.items = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
