import { decodeAsyncData, getLeaderboardUrl } from "@/Functions/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
