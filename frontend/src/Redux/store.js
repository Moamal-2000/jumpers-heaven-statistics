import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slices/globalSlice";
import leaderboardSlice from "./slices/leaderboardSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    leaderboard: leaderboardSlice,
  },
});
