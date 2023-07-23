/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_API_URL =
  'https://book-catalog-backend-psi.vercel.app/api/v1/user/login';
const LOGIN_WITH_TOKEN_API_URL =
  'https://book-catalog-backend-psi.vercel.app/api/v1/user/login-with-token';

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post(LOGIN_API_URL, loginData);

      const data = await response.data;

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
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
    } catch (error: unknown) {
      console.error('Error logging in with token:', error);
      throw error;
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, _thunkAPI) => {
  try {
    localStorage.removeItem('access_token');
  } catch (error: unknown) {
    console.error('Error logging out:', error);
    throw error;
  }
});
