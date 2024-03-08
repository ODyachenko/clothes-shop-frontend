import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface IReviewState {
  showReviewForm: boolean;
}

// Define the initial state using that type
const initialState: IReviewState = {
  showReviewForm: false,
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setShowReviewForm: (state, action: PayloadAction<boolean>) => {
      state.showReviewForm = action.payload;
    },
  },
});

export const { setShowReviewForm } = reviewSlice.actions;
export default reviewSlice.reducer;
