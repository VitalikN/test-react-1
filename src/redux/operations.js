import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/');

      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (newProduct, thunkAPI) => {
    try {
      const { data } = await axios.post('/products', newProduct);
      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeProduct = createAsyncThunk(
  'products/removeProduct',
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/products/${productId}`);
      // console.log(data);
      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productDetails = createAsyncThunk(
  'products/productDetails',
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/products/${productId}`);

      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
