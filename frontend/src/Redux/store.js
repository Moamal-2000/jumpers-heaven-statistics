import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slices/globalSlice";
import leaderboardSlice from "./slices/leaderboardSlice";
import mapsSlice from "./slices/mapsSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    leaderboard: leaderboardSlice,
    maps: mapsSlice,
  },
});
