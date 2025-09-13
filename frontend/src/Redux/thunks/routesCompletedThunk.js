import { createAsyncThunk } from "@reduxjs/toolkit";
import { jhApis } from "@/Api/jumpersHeaven";

export const fetchRoutesCompleted = createAsyncThunk(
  "routesCompletedSlice/fetchRoutesCompleted",
  async (paramsObject) => {
    try {
      // Fetch both the leaderboard data and the total map count
      const leaderboardResponse = await fetch(jhApis(paramsObject).leaderboard.getRoutesCompletedLeaderboard, {
        headers: { Accept: "application/json" },
      });
      
      if (!leaderboardResponse.ok) {
        throw new Error(`HTTP error! status: ${leaderboardResponse.status}`);
      }
      
      const leaderboardData = await leaderboardResponse.json();
      
      // Try to fetch map count, but don't fail if it doesn't work
      let totalMaps = 595; // Default fallback value
      try {
        const mapCountResponse = await fetch(jhApis(paramsObject).map.getMapsCount, {
          headers: { Accept: "application/json" },
        });
        
        if (mapCountResponse.ok) {
          const mapCountData = await mapCountResponse.json();
          totalMaps = mapCountData.count || 595;
        }
      } catch (mapCountError) {
        console.warn("Failed to fetch map count, using default value:", mapCountError);
      }
      
      // Transform the data to match the expected format
      const transformedData = leaderboardData.map((item, index) => {
        const completed = item.score || 0;
        const completionRate = totalMaps > 0 ? ((completed / totalMaps) * 100).toFixed(2) : 0;
        
        return {
          ...item,
          rank: index + 1, // Add rank based on array position
          completion_rate: `${completionRate}%`, // Calculate actual completion percentage
          completed: completed, // Use score as completed count
        };
      });

      return { leaderboardData: transformedData, paramsObject, totalMaps };
    } catch (error) {
      console.error("Error fetching routes completed leaderboard:", error);
      throw error;
    }
  }
);
