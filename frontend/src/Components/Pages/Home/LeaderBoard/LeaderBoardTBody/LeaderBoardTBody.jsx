"use client";

import { navigateToPlayerPage } from "@/Functions/navigate";
import { getColoredName, getModifiedRank } from "@/Functions/utils";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import LeaderBoardError from "./LeaderBoardError/LeaderBoardError";
import LeaderBoardLoading from "./LeaderBoardLoading/LeaderBoardLoading";
import s from "./LeaderBoardTBody.module.scss";
import TopsVisualization from "./TopsVisualization/TopsVisualization";

const LeaderBoardTBody = ({ leaderboardData, mapsCount }) => {
  const { loading, error } = useSelector((s) => s.leaderboard);
  const router = useRouter();

  return (
    <tbody className={`${s.tbody}`}>
      {loading && !error && <LeaderBoardLoading />}
      {error && <LeaderBoardError />}

      {!loading &&
        !error &&
        leaderboardData?.map(
          ({ player_name, score, top_list, rank, player_id }) => {
            const modifiedRank = getModifiedRank(rank);
            const modifiedPlayerName = getColoredName(player_name);

            function handlePlayerClick() {
              navigateToPlayerPage(router, player_id);
            }

            return (
              <tr key={player_id} data-type="player-stats-row">
                <td className={s.rank} data-type="player-stats-rank">
                  {modifiedRank}
                </td>
                <td className={s.player} data-type="player-stats-name">
                  <span onClick={handlePlayerClick}>{modifiedPlayerName}</span>
                </td>
                <td className={s.rating}>0</td>
                <td className={s.maps}>0</td>
                <td className={s.score} data-type="player-stats-score">
                  {score}
                </td>
                <td className={s.tops} data-type="player-stats-tops">
                  <TopsVisualization
                    topsList={top_list}
                    mapsCount={mapsCount}
                    leaderboardData={leaderboardData}
                  />
                </td>
              </tr>
            );
          }
        )}
    </tbody>
  );
};

export default LeaderBoardTBody;
