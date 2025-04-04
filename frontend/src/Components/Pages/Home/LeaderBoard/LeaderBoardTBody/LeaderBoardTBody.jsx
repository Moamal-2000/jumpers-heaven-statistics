"use client";

import { Suspense } from "react";
import { useSelector } from "react-redux";
import LeaderBoardError from "./LeaderBoardError/LeaderBoardError";
import LeaderBoardLoading from "./LeaderBoardLoading/LeaderBoardLoading";
import s from "./LeaderBoardTBody.module.scss";
import PlayerRow from "./PlayerRow/PlayerRow";

const LeaderBoardTBody = ({ leaderboardData, lastPlayerRef }) => {
  const { isLeaderboardReversed } = useSelector((s) => s.global);
  const { loading, error } = useSelector((s) => s.leaderboard);
  const reverseClass = isLeaderboardReversed ? s.reverse : "";

  return (
    <tbody className={`${s.tbody} ${reverseClass}`}>
      {loading && !error && <LeaderBoardLoading />}
      {error && <LeaderBoardError />}

      {!loading &&
        !error &&
        leaderboardData?.map((playerData, index) => {
          if (leaderboardData.length === index + 1)
            return (
              <Suspense key={playerData.player_id}>
                <PlayerRow
                  playerData={playerData}
                  leaderboardData={leaderboardData}
                  lastPlayerRef={lastPlayerRef}
                />
              </Suspense>
            );

          return (
            <Suspense key={playerData.player_id}>
              <PlayerRow
                playerData={playerData}
                leaderboardData={leaderboardData}
              />
            </Suspense>
          );
        })}
    </tbody>
  );
};

export default LeaderBoardTBody;
