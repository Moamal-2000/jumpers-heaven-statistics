import { jhApis } from "@/Api/jumpersHeaven";
import { getColoredName } from "@/Functions/components";
import { decodeAsyncData } from "@/Functions/utils";

const PlayerId = async ({ params }) => {
  const { playerId } = await params;

  const playersResponse = await fetch(
    jhApis({ fps: 125 }).leaderboard.getSpeedRunLeaderboard,
    { headers: { Accept: "application/msgpack" } }
  );

  const playersData = await decodeAsyncData(playersResponse);
  const playerData = playersData.find(
    ({ PlayerID }) => +PlayerID === +playerId
  );

  const { PlayerName, Score, TopList } = playerData;

  return (
    <main>
      <h2>Testing</h2>

      <br />

      <ul style={{ listStyleType: "none" }}>
        <li>Player: {getColoredName(PlayerName)}</li>
        <li>
          Player ID: <span style={{ color: "yellow" }}>{playerId}</span>
        </li>
        <li>
          Score: <span style={{ color: "orange" }}>{Score}</span>
        </li>
        <li>
          Tops: [
          <span style={{ color: "cyan" }}>
            {Object.values(TopList).join(", ")}
          </span>
          ]
        </li>
      </ul>
    </main>
  );
};

export default PlayerId;
