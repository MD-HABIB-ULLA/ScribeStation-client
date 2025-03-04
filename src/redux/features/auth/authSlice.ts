import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// Define the interface for the user
interface IUser {
  email: string;
  role: string;
  iat: number;
  exp: number;
  _id: string;
  name: string;
  image: string;
  __v: number;
}

// Update the state to use IUser interface for the user object
type TAuthState = {
  user: IUser | null;
  token: string | null;
  role : "admin" | "customer"
};

const initialState: TAuthState = {
  user: null,
  token: null,
  role: "customer",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.role = user.role;
      state.token = token;

    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = "customer";
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;
