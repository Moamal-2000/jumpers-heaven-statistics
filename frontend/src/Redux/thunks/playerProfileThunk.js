import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "https://jhstats.fly.dev/api/v1";

// Fetch player performance stats
export const fetchPlayerProfile = createAsyncThunk(
  "playerProfile/fetchPlayerProfile",
  async ({ playerId, playerInfo }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/player/performance-stats?playerid=${playerId}`);
      if (!response.ok) {
        if (response.status === 500) {
          console.warn(`Player ${playerId} has insufficient data for performance stats, returning empty data`);
          return {
            playerInfo,
            performanceStats: null,
          };
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const performanceStats = await response.json();
      
      return {
        playerInfo,
        performanceStats,
      };
    } catch (error) {
      console.error("Error fetching player profile:", error);
      // Return empty data instead of throwing for network errors
      return {
        playerInfo,
        performanceStats: null,
      };
    }
  }
);

// Fetch player leaderboard positions
export const fetchPlayerLeaderboardPositions = createAsyncThunk(
  "playerProfile/fetchPlayerLeaderboardPositions",
  async ({ playerId }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/player/leaderboard-positions?playerid=${playerId}`);
      if (!response.ok) {
        if (response.status === 500) {
          console.warn(`Player ${playerId} has insufficient data for leaderboard positions, returning empty data`);
          return [];
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const leaderboardPositions = await response.json();
      
      return leaderboardPositions;
    } catch (error) {
      console.error("Error fetching player leaderboard positions:", error);
      // Return empty data instead of throwing for network errors
      return [];
    }
  }
);

// Fetch player jump scores
export const fetchPlayerJumpScores = createAsyncThunk(
  "playerProfile/fetchPlayerJumpScores",
  async ({ playerId, fps = 125 }) => {
    try {
      // Use fps=0 for mix queries
      const fpsParam = fps === "mix" ? 0 : fps;
      const response = await fetch(`${API_BASE_URL}/player/jump-scores?fps=${fpsParam}&playerid=${playerId}`);
      if (!response.ok) {
        if (response.status === 500) {
          console.warn(`Player ${playerId} has insufficient data for jump scores (${fps} FPS), returning empty data`);
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jumpScores = await response.json();
      
      return jumpScores;
    } catch (error) {
      console.error("Error fetching player jump scores:", error);
      // Return empty data instead of throwing for network errors
      return null;
    }
  }
);

// Fetch player top runs
export const fetchPlayerTops = createAsyncThunk(
  "playerProfile/fetchPlayerTops",
  async ({ playerId, fps = 125, limit = 200 }) => {
    try {
      // Use fps=0 for mix queries
      const fpsParam = fps === "mix" ? 0 : fps;
      const response = await fetch(`${API_BASE_URL}/player/tops?fps=${fpsParam}&playerid=${playerId}&limit=${limit}`);
      if (!response.ok) {
        if (response.status === 500) {
          console.warn(`Player ${playerId} has insufficient data for top runs (${fps} FPS), returning empty data`);
          return {};
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const topRuns = await response.json();
      
      return topRuns;
    } catch (error) {
      console.error("Error fetching player tops:", error);
      // Return empty data instead of throwing for network errors
      return {};
    }
  }
);
