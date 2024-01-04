import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types/loginTypes";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.isAuthenticated = true;
      state.user = {
        email: action.payload.email,
        password: action.payload.password,
      };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    authenticateUser: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
        phoneNumber: string;
      }>
    ) => {
      state.isAuthenticated = true;
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
      };
    },
  },
});

export const { login, logout, authenticateUser } = authSlice.actions;
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export default authSlice.reducer;
