export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserisLoggedIn = state => state.auth.isLoggedIn;
export const selectUserisRefreshing = state => state.auth.isRefreshing;
export const selectUserError = state => state.auth.error;
export const selectUserisLoading = state => state.auth.isLoading;
