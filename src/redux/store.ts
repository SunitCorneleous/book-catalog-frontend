import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import bookSearchSlice from './features/bookSearch/bookSearchSlice';
import bookFilterSlice from './features/bookFilter/bookFilterSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    bookSearch: bookSearchSlice,
    bookFilter: bookFilterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
