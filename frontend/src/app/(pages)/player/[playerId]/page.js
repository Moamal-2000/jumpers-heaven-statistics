const PlayerId = async ({ params }) => {
  const { playerId } = await params;

  // const playersResponse = await fetch(
  //   jhApis({ fps: 125 }).leaderboard.getSpeedRunLeaderboard,
  //   { headers: { Accept: "application/msgpack" } }
  // );

  // const playersData = await decodeAsyncData(playersResponse);
  // const playerData = playersData.find(
  //   ({ PlayerID }) => +PlayerID === +playerId
  // );

  return (
    <main>
      <h2>Testing</h2>
      <p>player id: {playerId}</p>
    </main>
  );
};

export default PlayerId;
