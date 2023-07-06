import { createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  IFetchReviewsFulfilledAction,
  IReviewsInitialState,
} from '../interfaces';
import { fetchReviews } from '../thunk/fetchReviews';

const initialState: IReviewsInitialState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state: IReviewsInitialState) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        fetchReviews.fulfilled,
        (state: IReviewsInitialState, action: IFetchReviewsFulfilledAction) => {
          state.status = 'resolved';
          state.reviews = action.payload;
        }
      )
      .addMatcher(
        isRejectedWithValue(fetchReviews),
        (state: IReviewsInitialState, action: PayloadAction<unknown>) => {
          state.status = 'rejected';
          state.error = (action.payload as Error).message;
        }
      );
  },
});

export default reviewSlice.reducer;
