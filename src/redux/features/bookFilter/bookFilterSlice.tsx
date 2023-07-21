import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  year: '',
  genre: '',
};

const bookFilterSlice = createSlice({
  name: 'bookFilter',
  initialState,
  reducers: {
    setBookYear: (state, action) => {
      state.year = action.payload;
    },

    setBookGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { setBookYear, setBookGenre } = bookFilterSlice.actions;

export default bookFilterSlice.reducer;
