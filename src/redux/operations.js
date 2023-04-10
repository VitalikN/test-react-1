import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('?limit=40');
      // console.log(data);
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
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchProduct = createAsyncThunk(
  'products/searchProduct',
  async (searchProduct, thunkAPI) => {
    try {
      const { data } = await axios.get(`/search?q=${searchProduct}&limit=100`);

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

export const fetchCategories = createAsyncThunk(
  'products/fetchAllCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productCategories = createAsyncThunk(
  'products/productCategories',
  async (productCategories, thunkAPI) => {
    try {
      const { data } = await axios.get(`/category/${productCategories}`);
      console.log(data.products);
      console.log('productCategories', productCategories);
      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
