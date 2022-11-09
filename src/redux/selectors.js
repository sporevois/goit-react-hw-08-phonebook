export const getFilter = state => state.filter;
export const getEditState = state => state.edit;
export const getUserEmail = state => state.auth.user?.email;
export const getUserName = state => state.auth.user?.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;

