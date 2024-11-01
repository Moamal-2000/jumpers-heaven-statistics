import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    updateGlobalState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
});

export const { updateGlobalState } = globalSlice.actions;
export default globalSlice.reducer;
