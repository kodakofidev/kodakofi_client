import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    role: "",
    token: "",
  },
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuth: (state, { payload }) => {
      return { ...payload };
    },
    logOut: () => initialState,
  },
});

export const authAction = {
  ...authSlice.actions,
};

export default authSlice.reducer;
