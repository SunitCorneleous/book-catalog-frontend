import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keyword: '',
};

const booksFilterSlice = createSlice({
  name: 'booksFilter',
  initialState,
  reducers: {
    setFilterBook: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { setFilterBook } = booksFilterSlice.actions;

export default booksFilterSlice.reducer;
