import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  refreshUser,
  register,
  sendEmailResetPassword,
  resetPassword,
} from "./operations.js";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null, photo: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
    message: "",
    resetPassword: false,
    password: "",
  },
  reducers: {
    clearMessage: (state) => {
      state.message = "";
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.data.accessToken || null;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null, photo: null };
        state.token = null;
        state.loading = false;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        console.log(
          "New token after refresh:",
          action.payload.data.accessToken
        );
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${action.payload.data.accessToken}`;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(sendEmailResetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      })
      .addCase(sendEmailResetPassword.fulfilled, (state) => {
        state.loading = false;
        state.message =
          "If this email is registered, you will receive reset instructions.";
      })
      .addCase(sendEmailResetPassword.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.message = "";
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export const { clearMessage } = authSlice.actions;
export default authSlice.reducer;
