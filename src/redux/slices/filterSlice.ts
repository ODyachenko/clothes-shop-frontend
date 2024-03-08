import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PriceValueType } from '../../../@types';

// Define a type for the slice state
export interface IFilterState {
  category: number;
  brand: number;
  dress_style: number;
  colors: number;
  sizes: number;
  ordering: string;
  activePrice: PriceValueType;
  page: number;
  isFilterApplied: boolean;
}

// Define the initial state using that type
const initialState: IFilterState = {
  ordering: '-rating',
  category: 0,
  brand: 0,
  dress_style: 0,
  colors: 0,
  sizes: 0,
  activePrice: {
    min: 0,
    max: 1000,
  },
  page: 1,
  isFilterApplied: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveSort: (state, action: PayloadAction<string>) => {
      state.ordering = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setActiveBrand: (state, action: PayloadAction<number>) => {
      state.brand = action.payload;
    },
    setActiveStyle: (state, action: PayloadAction<number>) => {
      state.dress_style = action.payload;
    },
    setActiveColor: (state, action: PayloadAction<number>) => {
      state.colors = action.payload;
    },
    setActiveSize: (state, action: PayloadAction<number>) => {
      state.sizes = action.payload;
    },
    setActivePrice: (state, action: PayloadAction<PriceValueType>) => {
      state.activePrice = action.payload;
    },
    setIsFilterApplied: (state) => {
      state.isFilterApplied = !state.isFilterApplied;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setDefaultState: (state) => {
      state.category = 0;
      state.colors = 0;
      state.brand = 0;
      state.dress_style = 0;
      state.sizes = 0;
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
  setActiveBrand,
  setActiveColor,
  setActivePrice,
  setActiveSize,
  setCurrentPage,
  setIsFilterApplied,
  setDefaultState,
  setActiveStyle,
} = filterSlice.actions;
export default filterSlice.reducer;
