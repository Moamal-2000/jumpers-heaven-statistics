import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const mapsSlice = createSlice({
  initialState,
  name: "mapsSlice",
  reducers: {
    updateMapsState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
});

export const { updateMapsState } = mapsSlice.actions;
export default mapsSlice.reducer;
