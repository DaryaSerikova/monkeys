import { IReview } from "@/shared/types/IReview"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface ReviewsState {
  reviews: IReview[],
  status: 'loading' | 'succeeded' | 'failed'  | '',
  error: string,
}

const initialState: ReviewsState = {
  reviews: [],
  status: '',
  error: '',
}

export const fetchReviews = createAsyncThunk(
  'reviews/fetchAll',
  async () => {
    const response = await fetch('http://o-complex.com:1337/reviews');
    return (await response.json()) as IReview[];
  }
)

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => { state.status = 'loading' })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      })
  }
})

export default reviewSlice.reducer;