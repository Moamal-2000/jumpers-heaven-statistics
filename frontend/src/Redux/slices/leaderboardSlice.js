import {
  getCountryName,
  getLeaderboardUrl,
  getRegionByCountry,
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
    const leaderboardUrl = getLeaderboardUrl(paramsObject);

    const response = await fetch(leaderboardUrl);
    const leaderboardData = await response.json();

    if (!response.ok) throw new Error("Error while fetching leaderboard data");
    return leaderboardData;
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
      const paginationLeaderboardData = paginateData(action.payload, 1);
      const modifiedLeaderboardData = paginationLeaderboardData.map(
        (player) => {
          player.countryName = getCountryName(player.country);
          player.region = getRegionByCountry(player.country);
          return player;
        }
      );

      state.leaderboardData = action.payload;
      state.leaderboardScroll = modifiedLeaderboardData;
      state.firstChunkLeaderboard = modifiedLeaderboardData;
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
