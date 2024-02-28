import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { PriceValueType } from '../../../@types';

// Define a type for the slice state
export interface IFilterState {
  activeSort: string;
  activeCategory: number;
  activeColor: number;
  activeSize: number;
  activePrice: PriceValueType;
  isFilterApplied: boolean;
}

// Define the initial state using that type
const initialState: IFilterState = {
  activeSort: '-rating',
  activeCategory: 0,
  activeColor: 0,
  activeSize: 0,
  activePrice: {
    min: 0,
    max: 1000,
  },
  isFilterApplied: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveSort: (state, action: PayloadAction<string>) => {
      state.activeSort = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },
    setActiveColor: (state, action: PayloadAction<number>) => {
      state.activeColor = action.payload;
    },
    setActiveSize: (state, action: PayloadAction<number>) => {
      state.activeSize = action.payload;
    },
    setActivePrice: (state, action: PayloadAction<PriceValueType>) => {
      state.activePrice = action.payload;
    },
    setIsFilterApplied: (state) => {
      state.isFilterApplied = !state.isFilterApplied;
    },
    setDefaultState: (state) => {
      state.activeCategory = 0;
      state.activeColor = 0;
      state.activeSize = 0;
      state.activePrice = {
        min: 0,
        max: 1000,
      };
    },
  },
});

export const {
  setActiveSort,
  setActiveCategory,
  setActiveColor,
  setActivePrice,
  setActiveSize,
  setIsFilterApplied,
  setDefaultState,
} = filterSlice.actions;
export default filterSlice.reducer;
