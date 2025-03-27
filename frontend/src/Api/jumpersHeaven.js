export const jhApis = ({
  fps = 125,
  limit = 50,
  mapId = 173824,
  ender = "",
  name = "SAD",
  playerId = 108468,
  cpId = 14606,
}) => {
  const domain = "https://jhstats.fly.dev/api/v1";

  return {
    map: {
      getAllMaps: `${domain}/map/all`,
      getMapsCount: `${domain}/map/count`,
      getTops: `${domain}/map/tops?cpid=${cpId}&fps=${fps}&limit=${limit}`,
    },
    player: {
      getAllTops: `${domain}/player/all-tops?fps=${fps}&limit=${limit}`,
      getTops: `${domain}/player/tops?fps=${fps}&playerid=${playerId}&limit=${limit}`,
      getJumpScores: `${domain}/player/jump-scores?fps=${fps}&playerid=${playerId}`,
    },
    leaderboard: {
      getSkilledLeaderboard: `${domain}/leaderboard/jump-skill?fps=${fps}`,
      getSpeedRunLeaderboard: `${domain}/leaderboard/speed-skill?fps=${fps}&limit=${limit}`,
      getDefragLeaderboard: `${domain}/leaderboard/defrag-skill?fps=${fps}`,
      getSurfLeaderboard: `${domain}/leaderboard/surf-skill?fps=${fps}`,
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
