import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsAPI } from './API/productsAPI';
import { reviewsAPI } from './API/reviewsAPI';
import { usersAPI } from './API/usersAPI';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [reviewsAPI.reducerPath]: reviewsAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsAPI.middleware)
      .concat(reviewsAPI.middleware)
      .concat(usersAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
