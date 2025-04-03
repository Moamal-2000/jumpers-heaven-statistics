"use client";

import { navigateToPlayerPage } from "@/Functions/navigate";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import LeaderBoardError from "./LeaderBoardError/LeaderBoardError";
import LeaderBoardLoading from "./LeaderBoardLoading/LeaderBoardLoading";
import s from "./LeaderBoardTBody.module.scss";
import PlayerRow from "./PlayerRow/PlayerRow";

const LeaderBoardTBody = ({ leaderboardData, mapsCount, lastPlayerRef }) => {
  const { isLeaderboardReversed } = useSelector((s) => s.global);
  const { loading, error } = useSelector((s) => s.leaderboard);
  const router = useRouter();
  const reverseClass = isLeaderboardReversed ? s.reverse : "";

  return (
    <tbody className={`${s.tbody} ${reverseClass}`}>
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
              <Suspense>
                <PlayerRow
                  key={playerData.player_id}
                  playerData={playerData}
                  mapsCount={mapsCount}
                  leaderboardData={leaderboardData}
                  lastPlayerRef={lastPlayerRef}
                  handlePlayerClick={handlePlayerClick}
                />
              </Suspense>
            );

          return (
            <Suspense>
              <PlayerRow
                key={playerData.player_id}
                playerData={playerData}
                mapsCount={mapsCount}
                leaderboardData={leaderboardData}
                handlePlayerClick={handlePlayerClick}
              />
            </Suspense>
          );
        })}
    </tbody>
  );
};

export default LeaderBoardTBody;
