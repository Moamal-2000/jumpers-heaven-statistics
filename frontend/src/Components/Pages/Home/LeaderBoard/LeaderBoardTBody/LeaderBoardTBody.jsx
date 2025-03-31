"use client";

import { navigateToPlayerPage } from "@/Functions/navigate";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import LeaderBoardError from "./LeaderBoardError/LeaderBoardError";
import LeaderBoardLoading from "./LeaderBoardLoading/LeaderBoardLoading";
import s from "./LeaderBoardTBody.module.scss";
import PlayerRow from "./PlayerRow/PlayerRow";

const LeaderBoardTBody = ({ leaderboardData, mapsCount, lastPlayerRef }) => {
  const { loading, error } = useSelector((s) => s.leaderboard);
  const router = useRouter();

  return (
    <tbody className={`${s.tbody}`}>
      {loading && !error && <LeaderBoardLoading />}
      {error && <LeaderBoardError />}

      {!loading &&
        !error &&
        leaderboardData?.map((playerData, index) => {
          function handlePlayerClick() {
            navigateToPlayerPage(router, playerData.player_id);
          }

          if (leaderboardData.length === index + 1)
            return (
              <PlayerRow
                key={playerData.player_id}
                playerData={playerData}
                mapsCount={mapsCount}
                leaderboardData={leaderboardData}
                lastPlayerRef={lastPlayerRef}
                handlePlayerClick={handlePlayerClick}
              />
            );

          return (
            <PlayerRow
              key={playerData.player_id}
              playerData={playerData}
              mapsCount={mapsCount}
              leaderboardData={leaderboardData}
              handlePlayerClick={handlePlayerClick}
            />
          );
        })}
    </tbody>
  );
};

export default LeaderBoardTBody;
