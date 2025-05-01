import { getFilteredLeaderboard } from "@/Functions/filters";
import {
  decodeAsyncData,
  getLeaderboardUrl,
  paginateData,
} from "@/Functions/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderboardData: [],
  leaderboardScroll: [],
  firstChunkLeaderboard: [],
  allDataDisplayed: [],
  loading: false,
  error: false,
};

export const fetchLeaderboard = createAsyncThunk(
  "leaderboardSlice/fetchLeaderboard",
  async (paramsObject) => {
    try {
      const leaderboardUrl = getLeaderboardUrl(paramsObject);
      const response = await fetch(leaderboardUrl, {
        headers: { Accept: "application/msgpack", "Accept-Encoding": "gzip" },
      });
      const leaderboardData = await decodeAsyncData(response);

      return { leaderboardData, paramsObject };
    } catch (error) {
      console.error(error);
    }
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
    addCase(fetchLeaderboard.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
      .addCase(fetchLeaderboard.fulfilled, (state, { payload }) => {
        const { leaderboardData, paramsObject } = payload;
        const filteredLeaderboard = getFilteredLeaderboard(
          leaderboardData,
          paramsObject
        );
        const paginationLeaderboard = paginateData(filteredLeaderboard, 1);

        state.leaderboardData = filteredLeaderboard;
        state.leaderboardScroll = paginationLeaderboard;
        state.firstChunkLeaderboard = paginationLeaderboard;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchLeaderboard.rejected, (state) => {
        state.error = true;
      });
  },
});

export default leaderboardSlice.reducer;
export const { updateLeaderboardState } = leaderboardSlice.actions;
