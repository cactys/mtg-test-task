import { createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  IFetchReviewsFulfilledAction,
  IReview,
  IReviewsInitialState,
} from '../interfaces';
import { fetchReviews } from '../thunk/fetchReviews';

const initialState: IReviewsInitialState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action: PayloadAction<IReview>) {
      state.reviews.push(action.payload);
    },
  },
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

export const { setReviews } = reviewSlice.actions;
export default reviewSlice.reducer;
