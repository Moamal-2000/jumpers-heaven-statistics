import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slices/globalSlice";
import leaderboardSlice from "./slices/leaderboardSlice";
import mapsSlice from "./slices/mapsSlice";
import playersSlice from "./slices/playersSlice";
import playerProfileSlice from "./slices/playerProfileSlice";
import routesCompletedSlice from "./slices/routesCompletedSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    leaderboard: leaderboardSlice,
    maps: mapsSlice,
    players: playersSlice,
    playerProfile: playerProfileSlice,
    routesCompleted: routesCompletedSlice,
  },
});
