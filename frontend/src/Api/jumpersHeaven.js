export const API_URL = "https://jhstats.fly.dev/api/v1";

export const jhApis = ({
  fps = 125,
  limit = 50,
  mapid = 173824,
  ender = "",
  name = "SAD",
  playerid = 108468,
  cpid = 14606,
  sort = "admin",
}) => {
  // Use fps=0 for mix queries
  const fpsParam = fps === "mix" ? 0 : fps;

  return {
    map: {
      getAllMaps: generateUrl("/map/all"),
      getMapsCount: generateUrl("/map/count"),
      getTops: generateUrl("/map/tops", { cpid, fps: fpsParam, limit }),
    },
    player: {
      getAll: generateUrl("/player/all", { sort }),
      getAllTops: generateUrl("/player/all-tops", { fps: fpsParam, limit }),
      getTops: generateUrl("/player/tops", { fps: fpsParam, playerid, limit }),
      getJumpScores: generateUrl("/player/jump-scores", { fps: fpsParam, playerid }),
      getIdFromName: generateUrl("/player/id-from-name", { name, limit }),
      getOnlinePlayers: generateUrl("/tracker/online-players"),
      getPlayersPlayTime: generateUrl("/map/players-playtime", { fps: fpsParam, limit, mapid }),
    },
    leaderboard: {
      getSkilledLeaderboard: generateUrl("/leaderboard/jump-skill", { fps: fpsParam }),
      getSpeedRunLeaderboard: generateUrl("/leaderboard/speed-skill", { fps: fpsParam }),
      getDefragLeaderboard: generateUrl("/leaderboard/defrag-skill", { fps: fpsParam }),
      getSurfLeaderboard: generateUrl("/leaderboard/surf-skill", { fps: fpsParam }),
      getRoutesCompletedLeaderboard: generateUrl("/leaderboard/howmany"),
    },
  };
};

export function generateUrl(endpoint, params = {}) {
  const queryParams = new URLSearchParams(params).toString();
  return `${API_URL}${endpoint}?${queryParams}`;
}

export async function testApi(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("Testing success", data);
    return data;
  } catch (err) {
    console.log(`Error while fetching data from ${url} due to ${err}`);
  }
}
