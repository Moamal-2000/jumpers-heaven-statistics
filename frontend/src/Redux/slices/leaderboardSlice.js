import { jhApis } from "@/Api/jumpersHeaven";
import { paginateData } from "@/Functions/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderboard: [],
};

export const fetchLeaderboard = createAsyncThunk(
  "leaderboardSlice/fetchLeaderboard",
  async (paramsObject) => {
    const paginationNumber = paramsObject?.["leaderboard-pagination"] || 1;
    const leaderboardUrl =
      jhApis(paramsObject).leaderboard.getSpeedRunLeaderboard;

    const res = await fetch(leaderboardUrl);
    const data = await res.json();

    return paginateData(data, paginationNumber);
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
