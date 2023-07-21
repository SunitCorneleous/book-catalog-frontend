import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import booksFilterSlice from './features/booksFilter/booksFilterSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    booksFilter: booksFilterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
