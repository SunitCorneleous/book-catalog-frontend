import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAccessToken, setLoggedIn, setUser } from './authSlice';

const LOGIN_API_URL = 'http://localhost:5000/api/v1/user/login';
const LOGIN_WITH_TOKEN_API_URL =
  'http://localhost:5000/api/v1/user/login-with-token';

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

export const loginWithToken = createAsyncThunk(
  'auth/loginWithToken',
  async (accessToken, thunkAPI) => {
    // You may want to perform additional validation on the access token here
    try {
      // Simulate an API call to verify the token and fetch user data
      const data = await fetch(LOGIN_WITH_TOKEN_API_URL, {
        headers: {
          Authorization: accessToken!,
        },
      });

      if (data.status !== 200) {
        return thunkAPI.rejectWithValue(data); // Pass data to the rejectWithValue method
      }

      return await data.json();
    } catch (error) {
      console.error('Error logging in with token:', error.message);
      throw error;
    }
  }
);
