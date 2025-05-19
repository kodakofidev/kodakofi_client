import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetchProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProfileSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    },
    fetchProfileFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    updateProfile: (state, { payload }) => {
      state.data = { ...state.data, ...payload };
    },
    resetProfile: () => initialState
  }
});

export const profileAction = {
  ...profileSlice.actions
};

export default profileSlice.reducer;
