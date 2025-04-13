import {
  getLastSeenLeaderboard,
  getRegionLeaderboard,
} from "@/Functions/filters";
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
      let leaderboard = [];

      const leaderboardUrl = getLeaderboardUrl(paramsObject);
      const lastSeenFilter = paramsObject?.["last-seen"];
      const regionFilter = paramsObject?.["region"];

      const response = await fetch(leaderboardUrl, {
        headers: { Accept: "application/msgpack", "Accept-Encoding": "gzip" },
      });
      const leaderboardData = await decodeAsyncData(response);
      leaderboard = leaderboardData;

      if (!!lastSeenFilter)
        leaderboard = getLastSeenLeaderboard(leaderboard, lastSeenFilter);
      if (!!regionFilter)
        leaderboard = getRegionLeaderboard(leaderboard, regionFilter);

      return leaderboard;
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
    addCase(fetchLeaderboard.fulfilled, (state, action) => {
      const paginationLeaderboard = paginateData(action.payload, 1);

      state.leaderboardData = action.payload;
      state.leaderboardScroll = paginationLeaderboard;
      state.firstChunkLeaderboard = paginationLeaderboard;
      state.loading = false;
      state.error = false;
    })
      .addCase(fetchLeaderboard.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchLeaderboard.rejected, (state) => {
        state.error = true;
      });
  },
});

export default leaderboardSlice.reducer;
export const { updateLeaderboardState } = leaderboardSlice.actions;
