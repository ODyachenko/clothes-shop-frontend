import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ProductType } from '../../../@types';

// Define a type for the slice state
interface IProductState {
  currentProduct: Partial<ProductType>;
  activeTab: number;
  productsCount: number;
}

// Define the initial state using that type
const initialState: IProductState = {
  currentProduct: {},
  productsCount: 0,
  activeTab: 1,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductType>) => {
      state.currentProduct = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTab = action.payload;
    },
    setProductsCount: (state, action: PayloadAction<number>) => {
      state.productsCount = action.payload;
    },
  },
});

export const { setProduct, setActiveTab, setProductsCount } =
  productSlice.actions;
export default productSlice.reducer;
