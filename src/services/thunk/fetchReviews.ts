import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '..';

const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async function (_, { rejectWithValue }) {
    try {
      const { selectedLanguage } = store.getState().language;

      const res = await fetch(`http://localhost:3030/${selectedLanguage}`);

      if (!res.ok) throw new Error('Server Error!');

      const data = await res.json();

      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export { fetchReviews };
