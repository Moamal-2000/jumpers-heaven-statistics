import { jhApis } from "@/Api/jumpersHeaven";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderboard: [],
};

export const fetchLeaderboard = createAsyncThunk(
  "leaderboardSlice/fetchLeaderboard",
  async (paramsObject) => {
    const res = await fetch(
      jhApis(paramsObject).leaderboard.getSpeedRunLeaderboard
    );

    const data = await res.json();
    return data;
  }
);

export const leaderboardSlice = createSlice({
  initialState,
  name: "leaderboardSlice",
  reducers: {
    updateLeaderboardState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchLeaderboard.fulfilled, (state, action) => {
      state.leaderboard = action.payload;
    });
  },
});

export default leaderboardSlice.reducer;
export const { updateLeaderboardState } = leaderboardSlice.actions;
