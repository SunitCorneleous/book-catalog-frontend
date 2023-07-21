/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice } from '@reduxjs/toolkit';
import { loginAsync, loginWithToken } from './authThunk';

interface IAuthState {
  isLoggedIn: boolean;

  user: object | null;
  isLoading: boolean;
  isError: boolean;
  error: null | string;
}

const initialState: IAuthState = {
  isLoggedIn: false,

  user: null,
  isLoading: false,
  isError: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, (state, action) => {
        state.isLoading = true;

        state.user = null;
        state.isError = false;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        localStorage.setItem('access_token', action.payload.data.accessToken);
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isError = false;
        state.isLoggedIn = true;
        state.user = action.payload.data.user;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isError = true;
        state.isLoggedIn = false;
        state.error = action.error.message!;
      })
      .addCase(loginWithToken.pending, (state, action) => {
        state.isLoading = true;
        state.user = null;
        state.isError = false;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(loginWithToken.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isError = false;
        state.isLoggedIn = true;
        state.user = action.payload.data;
      })
      .addCase(loginWithToken.rejected, (state, action) => {
        state.isLoading = false;

        state.user = null;
        state.isError = true;
        state.isLoggedIn = false;
        state.error = action.error.message!;
      });
  },
});

export default authSlice.reducer;
