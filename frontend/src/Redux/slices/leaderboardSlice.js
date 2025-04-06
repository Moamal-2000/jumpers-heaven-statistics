import { getLastSeenLeaderboard } from "@/Functions/filters";
import { getLeaderboardUrl, paginateData } from "@/Functions/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { decode } from "msgpackr";
import { inflate } from "pako";

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
      const lastSeenFilter = paramsObject?.["last-seen"];
      const response = await fetch(leaderboardUrl, {
        headers: { Accept: "application/msgpack" },
      });

      const bufferResponse = await response.arrayBuffer();
      const uint8Array = new Uint8Array(bufferResponse);
      const decompressed = inflate(uint8Array);
      const leaderboardData = decode(decompressed);

      if (!response.ok)
        throw new Error("Error while fetching leaderboard data");

      if (!!lastSeenFilter)
        return getLastSeenLeaderboard(leaderboardData, lastSeenFilter);

      return leaderboardData;
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
