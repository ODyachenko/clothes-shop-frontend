import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { brandsAPI } from './API/brandsAPI';
import { cartAPI } from './API/cartAPI';
import { productsAPI } from './API/productsAPI';
import { reviewsAPI } from './API/reviewsAPI';
import { searchAPI } from './API/searchAPI';
import { usersAPI } from './API/usersAPI';
import cartSlice from './slices/cartSlice';
import filterSlice from './slices/filterSlice';
import productSlice from './slices/productSlice';
import reviewSlice from './slices/reviewSlice';
import searchSlice from './slices/searchSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    filter: filterSlice,
    search: searchSlice,
    user: userSlice,
    cart: cartSlice,
    review: reviewSlice,
    [brandsAPI.reducerPath]: brandsAPI.reducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [searchAPI.reducerPath]: searchAPI.reducer,
    [reviewsAPI.reducerPath]: reviewsAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [cartAPI.reducerPath]: cartAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(brandsAPI.middleware)
      .concat(productsAPI.middleware)
      .concat(searchAPI.middleware)
      .concat(reviewsAPI.middleware)
      .concat(usersAPI.middleware)
      .concat(cartAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
