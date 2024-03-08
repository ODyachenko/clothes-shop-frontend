import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserInfoType } from '../../../@types';

// Define a type for the slice state
interface IUserState {
  isAuth: boolean;
  currentUser: UserInfoType;
}

// Define the initial state using that type
const initialState: IUserState = {
  isAuth: false,
  currentUser: {
    id: 0,
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    city: '',
    state: '',
    street_address: '',
    zip_code: '',
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<UserInfoType>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setIsAuth, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
