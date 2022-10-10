import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    // reducer to update state to loggin is true and add jwt token
    setLogin: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
  },
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
