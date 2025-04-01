import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotFoundPage: false,
  isLeaderboardReversed: false,
  tryFetchAgain: 0,
};

export const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    updateGlobalState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
});

export default globalSlice.reducer;
export const { updateGlobalState } = globalSlice.actions;
