import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartType } from '../../../@types';

// Define a type for the slice state
interface IProductState {
  cartList: Partial<CartType[]>;
  cartItem: CartType;
  isAdded: boolean;
}

// Define the initial state using that type
const initialState: IProductState = {
  cartList: [],
  isAdded: false,
  cartItem: {
    productItemId: 0,
    size: 0,
    color: 0,
    unit_price: '0',
    quantity: 1,
    inventory: 1,
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartList: (state, action: PayloadAction<CartType[]>) => {
      state.cartList = action.payload;
    },
    setCartItemId: (state, action: PayloadAction<number>) => {
      state.cartItem.productItemId = action.payload;
    },
    setCartItemSize: (state, action: PayloadAction<number>) => {
      state.cartItem.size = action.payload;
    },
    setCartItemColor: (state, action: PayloadAction<number>) => {
      state.cartItem.color = action.payload;
    },
    setCartItemPrice: (state, action: PayloadAction<string>) => {
      state.cartItem.unit_price = action.payload;
    },
    setCartItemQuantity: (state, action: PayloadAction<number>) => {
      state.cartItem.quantity = action.payload;
    },
    setCartItemInventory: (state, action: PayloadAction<number>) => {
      state.cartItem.inventory = action.payload;
    },
    setIsAdded: (state, action: PayloadAction<boolean>) => {
      state.isAdded = action.payload;
    },
    resetCartItem: (state) => {
      state.cartItem = initialState.cartItem;
    },
  },
});

export const {
  setCartList,
  setCartItemId,
  setCartItemSize,
  setCartItemColor,
  setCartItemPrice,
  setCartItemQuantity,
  setCartItemInventory,
  setIsAdded,
  resetCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;
