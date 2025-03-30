import { getLeaderboardUrl, paginateData } from "@/Functions/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  paginationLeaderboard: [],
  leaderboardData: [],
  loading: false,
  error: false,
};

export const fetchLeaderboard = createAsyncThunk(
  "leaderboardSlice/fetchLeaderboard",
  async (paramsObject) => {
    const paginationNumber = paramsObject?.["leaderboard-pagination"] || 1;
    const leaderboardUrl = getLeaderboardUrl(paramsObject);

    const response = await fetch(leaderboardUrl);
    const leaderboardData = await response.json();
    const paginationLeaderboardData = paginateData(
      leaderboardData,
      paginationNumber
    );

    return { leaderboardData, paginationLeaderboardData };
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
    addCase(fetchLeaderboard.fulfilled, (state, { payload }) => {
      state.paginationLeaderboard = payload.paginationLeaderboardData;
      state.leaderboardData = payload.leaderboardData;
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
