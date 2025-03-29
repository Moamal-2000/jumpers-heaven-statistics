import { jhApis } from "@/Api/jumpersHeaven";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotFoundPage: false,
  leaderboard: [],
};

export const fetchLeaderboard = createAsyncThunk(
  "data/fetchLeaderboard",
  async (paramsObject) => {
    const res = await fetch(
      jhApis(paramsObject).leaderboard.getSpeedRunLeaderboard
    );

    const data = await res.json();
    return data;
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
    addCase(fetchLeaderboard.fulfilled, (state, action) => {
      state.leaderboard = action.payload;
    });
  },
});

export default globalSlice.reducer;
export const { updateGlobalState } = globalSlice.actions;
