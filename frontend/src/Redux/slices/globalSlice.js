import { jhApis } from "@/Api/jumpersHeaven";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderboard: [],
};

export const fetchLeaderboard = createAsyncThunk(
  "data/fetchLeaderboard",
  async () => {
    const res = await fetch(jhApis({ limit: 20 }).speedRunLeaderboard);

    const data = await res.json();
    return data;
  }
);

export const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchLeaderboard.fulfilled, (state, action) => {
      state.leaderboard = action.payload;
    });
  },
});

export default globalSlice.reducer;
export const {} = globalSlice.actions;
