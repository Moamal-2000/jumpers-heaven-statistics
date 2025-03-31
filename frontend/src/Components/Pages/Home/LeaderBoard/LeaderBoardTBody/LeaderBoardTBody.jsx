"use client";

import { navigateToPlayerPage } from "@/Functions/navigate";
import { getColoredName, getModifiedRank } from "@/Functions/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import LeaderBoardError from "./LeaderBoardError/LeaderBoardError";
import LeaderBoardLoading from "./LeaderBoardLoading/LeaderBoardLoading";
import s from "./LeaderBoardTBody.module.scss";
import TopsVisualization from "./TopsVisualization/TopsVisualization";

const LeaderBoardTBody = ({ leaderboardData, mapsCount, lastPlayerRef }) => {
  const { loading, error } = useSelector((s) => s.leaderboard);
  const router = useRouter();

  return (
    <tbody className={`${s.tbody}`}>
      {loading && !error && <LeaderBoardLoading />}
      {error && <LeaderBoardError />}

      {!loading &&
        !error &&
        leaderboardData?.map(
          ({
            player_name,
            country,
            rating,
            score,
            top_list,
            rank,
            player_id,
          }, index) => {
            const modifiedRank = getModifiedRank(rank);
            const modifiedPlayerName = getColoredName(player_name);

            function handlePlayerClick() {
              navigateToPlayerPage(router, player_id);
            }

            if (leaderboardData.length === index + 1) return (
              <tr ref={lastPlayerRef} key={player_id} data-type="player-stats-row">
                <td className={s.rank} data-type="player-stats-rank">
                  {modifiedRank}
                </td>

                <td className={s.player} data-type="player-stats-name">
                  <span className={s.playerCountry}>
                    <Image
                      width="32"
                      height="32"
                      src={`/countryFlags/${country.toLowerCase()}.svg`}
                      alt={`country flag ${country}`}
                      title={country}
                      onError={(event) =>
                        (event.target.src = "/country-placeholder.svg")
                      }
                    />
                  </span>
                  <span onClick={handlePlayerClick}>{modifiedPlayerName}</span>
                </td>

                <td className={s.rating}>{(+rating * 0.1).toFixed(2)}</td>

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
            )

            return (
              <tr key={player_id} data-type="player-stats-row">
                <td className={s.rank} data-type="player-stats-rank">
                  {modifiedRank}
                </td>

                <td className={s.player} data-type="player-stats-name">
                  <span className={s.playerCountry}>
                    <Image
                      width="32"
                      height="32"
                      src={`/countryFlags/${country.toLowerCase()}.svg`}
                      alt={`country flag ${country}`}
                      title={country}
                      onError={(event) =>
                        (event.target.src = "/country-placeholder.svg")
                      }
                    />
                  </span>
                  <span onClick={handlePlayerClick}>{modifiedPlayerName}</span>
                </td>

                <td className={s.rating}>{(+rating * 0.1).toFixed(2)}</td>

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
