import { jhApis } from "@/Api/jumpersHeaven";
import { decodeAsyncData } from "@/Functions/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotFoundPage: false,
  isLeaderboardReversed: false,
  isLeaderboardExpanded: true,
  tryFetchAgain: 0,
  statistics: {},
};

export const getJumpersHeavenStats = createAsyncThunk(
  "globalSlice/getJumpersHeavenStats",
  async () => {
    try {
      const response = await fetch(jhApis({}).map.getMapsCount, {
        headers: { Accept: "application/msgpack" },
      });

      const mapsCountData = await decodeAsyncData(response);
      return { mapsCount: mapsCountData?.Count };
    } catch (error) {
      console.log(error);
    }
  }
);

export const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    updateGlobalState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getJumpersHeavenStats.pending, (state, action) => {})
      .addCase(getJumpersHeavenStats.fulfilled, (state, action) => {
        state.statistics = action.payload;
      })
      .addCase(getJumpersHeavenStats.rejected, (state, action) => {});
  },
});

export default globalSlice.reducer;
export const { updateGlobalState } = globalSlice.actions;
