export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectUser = (state) => state.auth.user;

export const selectLoading = (state) => state.auth.loading;

export const selectError = (state) => state.auth.error;

export const selectMessage = (state) => state.auth.message;

export const selectResetPassword = (state) => state.auth.resetPassword;

export const selectPassword = (state) => state.auth.password;
