import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_API_URL = 'http://localhost:5000/api/v1/user/login';

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post(LOGIN_API_URL, loginData);

      const data = await response.data;

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(data); // Pass data to the rejectWithValue method
      }

      return data;
    } catch (error) {
      // Handle login errors here
      // You can customize the error message based on your API response
      const errorMessage = error.response
        ? error.response.data.message
        : 'An error occurred during login.';
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
