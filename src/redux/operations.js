import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('?limit=20');

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
      const { data } = await axios.post('/add', newProduct);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// fetch('https://dummyjson.com/products/search?q=phone');

export const searchProduct = createAsyncThunk(
  'products/searchProduct',
  async (searchProduct, thunkAPI) => {
    try {
      const { data } = await axios.get(`/${searchProduct}`);
      console.log('data.products', data.products);

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
      const { data } = await axios.delete(`/${productId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productDetails = createAsyncThunk(
  'products/productDetails',
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/${productId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
