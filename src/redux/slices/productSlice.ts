import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ProductType } from '../../../@types';

// Define a type for the slice state
interface IProductState {
  currentProduct: Partial<ProductType>;
}

// Define the initial state using that type
const initialState: IProductState = {
  currentProduct: {},
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductType>) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
