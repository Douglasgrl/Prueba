import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthState } from "../types/auth";

const savedUser = localStorage.getItem("user");
const initialState: AuthState = {
  users: savedUser ? [JSON.parse(savedUser)] : [],
  currentUser: savedUser ? JSON.parse(savedUser) : null,
  error: null,
  authenticated: savedUser ? true : false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerUserSuccess: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      state.currentUser = action.payload;
      state.authenticated = true;
      state.error = null;
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    registerUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    loginUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.authenticated = true;
      state.error = null;
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    loginUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.authenticated = false;
      state.loading = false;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.authenticated = false;
      state.error = null;
      localStorage.removeItem("user"); // Limpia localStorage
    },
  },
});

export const {
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;
