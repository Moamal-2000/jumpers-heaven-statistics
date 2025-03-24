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
    mostFinished: `${domain}/map/getMostFinished?fps=${fps}&limit=${limit}`,
    mapPlayersPlayTime: `${domain}/map/getPlayersPlaytime?fps=${fps}&limit=${limit}&mapid=${mapId}&ender=${ender}`,
    allMaps: `${domain}/map/getAll`,
    playerIdByName: `${domain}/player/getIdFromName?name=${name}&limit=${limit}`,
    playerMapFinishCount: `${domain}/player/getMapFinishCount?playerid=${playerId}&cpid=${cpId}&fps=${fps}`,
    skilledLeaderboard: `${domain}/leaderboard/jump-skill?fps=${fps}`,
    playerTops: `${domain}/leaderboard/getPlayerTops?fps=${fps}&playerid=${playerId}`,
    speedRunLeaderboard: `${domain}/leaderboard/speedrun?fps=${fps}&limit=${limit}`,
    mapsCount: `${domain}/map/count`,
    
  };
};
