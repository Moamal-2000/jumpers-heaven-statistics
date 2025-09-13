import { paginateData } from "@/Functions/utils";
import { createSlice } from "@reduxjs/toolkit";
import { fetchRoutesCompleted } from "../thunks/routesCompletedThunk";

const initialState = {
  leaderboardData: [],
  leaderboardScroll: [],
  firstChunkLeaderboard: [],
  allDataDisplayed: [],
  totalMaps: 595, // Default fallback value
  loading: false,
  error: false,
};

export const routesCompletedSlice = createSlice({
  initialState,
  name: "routesCompletedSlice",
  reducers: {
    updateRoutesCompletedState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchRoutesCompleted.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
      .addCase(fetchRoutesCompleted.fulfilled, (state, { payload }) => {
        const { leaderboardData, paramsObject, totalMaps } = payload;
        const paginationLeaderboard = paginateData(leaderboardData, 1);

        state.leaderboardData = leaderboardData;
        state.leaderboardScroll = paginationLeaderboard;
        state.firstChunkLeaderboard = paginationLeaderboard;
        state.totalMaps = totalMaps;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchRoutesCompleted.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default routesCompletedSlice.reducer;
export const { updateRoutesCompletedState } = routesCompletedSlice.actions;
