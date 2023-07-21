import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keyword: '',
};

const bookSearchSlice = createSlice({
  name: 'bookSearch',
  initialState,
  reducers: {
    setBookSearch: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { setBookSearch } = bookSearchSlice.actions;

export default bookSearchSlice.reducer;
