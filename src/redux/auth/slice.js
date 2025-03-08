import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  refreshUser,
  register,
  sendEmailResetPassword,
  resetPassword,
  fetchGoogleOAuthUrl,
  loginWithGoogle,
} from "./operations.js";

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
        state.isLoggedIn = true;
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
        state.user = { name: "", email: "", photo: "" };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.user = { name: "", email: "", photo: "" };
        state.token = null;
        state.isLoggedIn = false;
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
      })
      .addCase(fetchGoogleOAuthUrl.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGoogleOAuthUrl.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchGoogleOAuthUrl.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload?.user || { name: "", email: "", photo: "" };
        state.token = action.payload?.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export const { clearMessage } = authSlice.actions;
export default authSlice.reducer;
