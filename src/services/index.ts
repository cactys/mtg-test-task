import { configureStore } from '@reduxjs/toolkit';
import reviewSlice from './slices/reviewSlice';
import languageSlice from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewSlice,
    language: languageSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
