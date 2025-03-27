export const jhApis = ({
  fps = 125,
  limit = 50,
  mapid = 173824,
  ender = "",
  name = "SAD",
  playerid = 108468,
  cpid = 14606,
}) => {
  const domain = "https://jhstats.fly.dev/api/v1";

  function generateUrl(endpoint, params = {}) {
    const queryParams = new URLSearchParams(params).toString();
    return `${domain}${endpoint}?${queryParams}`;
  }

  return {
    map: {
      getAllMaps: generateUrl("/map/all"),
      getMapsCount: generateUrl("/map/count"),
      getTops: generateUrl("/map/tops", { cpid, fps, limit }),
    },
    player: {
      getAllTops: generateUrl("/player/all-tops", { fps, limit }),
      getTops: generateUrl("/player/tops", { fps, playerid, limit }),
      getJumpScores: generateUrl("/player/jump-score", { fps, playerid }),
    },
    leaderboard: {
      getSkilledLeaderboard: generateUrl("/leaderboard/jump-skill", { fps }),
      getSpeedRunLeaderboard: generateUrl("/leaderboard/speed-skill", { fps, limit }),
      getDefragLeaderboard: generateUrl("/leaderboard/defrag-skill", { fps }),
      getSurfLeaderboard: generateUrl("/leaderboard/surf-skill", { fps }),
    },
  };
};

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
