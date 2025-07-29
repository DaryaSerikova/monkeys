import { IProduct } from "@/shared/types/IProduct";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



interface ProductState {
  products: IProduct[]; ///
  status: 'loading' | 'succeeded' | 'failed'  | ''
  error: string;
}

const initialState: ProductState = {
  products: [],
  status: '',
  error: '',
}

export const fetchProducts  = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response = await fetch('http://o-complex.com:1337/products?page=1&page_size=20')
    const objResponse = await response.json()

    return (await objResponse.items) as IProduct[];
  }
)


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {state.status = 'loading'})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload; //items
        state.status = 'succeeded'
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      })

  },
});

export default productSlice.reducer;