/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice } from '@reduxjs/toolkit';
import { loginAsync } from './authThunk';

interface IAuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  user: object | null;
  isLoading: boolean;
  isError: boolean;
  error: null | string;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  accessToken: null,
  user: null,
  isLoading: false,
  isError: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, (state, action) => {
        state.isLoading = true;
        state.accessToken = null;
        state.user = null;
        state.isError = false;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isError = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.data.accessToken;
        state.user = action.payload.data.user;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.accessToken = null;
        state.user = null;
        state.isError = true;
        state.isLoggedIn = false;
        state.error = action.error.message!;
      });

    /* 
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.accessToken = null;
        state.user = null;
      });
      */
  },
});

export const { setLoggedIn, setAccessToken, setUser } = authSlice.actions;
export default authSlice.reducer;
