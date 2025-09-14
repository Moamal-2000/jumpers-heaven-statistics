"use client";

import { useSelector } from "react-redux";
import s from "./RoutesCompletedTBody.module.scss";
import RoutesCompletedPlayerRow from "./RoutesCompletedPlayerRow/RoutesCompletedPlayerRow";

const RoutesCompletedTBody = ({ leaderboardData, lastPlayerRef }) => {
  const { isLeaderboardReversed } = useSelector((s) => s.global);
  const { loading, error } = useSelector((s) => s.routesCompleted);
  const reverseClass = isLeaderboardReversed ? s.reverse : "";

  if (!leaderboardData || leaderboardData.length === 0) {
    return (
      <tbody className={`${s.tbody} ${reverseClass}`}>
        <tr>
          <td colSpan="4" className={s.noData}>
            No data available
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className={`${s.tbody} ${reverseClass}`}>
      {loading && !error && (
        <tr>
          <td colSpan="4" className={s.noData}>
            Loading...
          </td>
        </tr>
      )}
      {error && (
        <tr>
          <td colSpan="4" className={s.noData}>
            Error loading data
          </td>
        </tr>
      )}

      {!loading &&
        !error &&
        leaderboardData.map((player, index) => {
          const isLastPlayer = index === leaderboardData.length - 1;

          return (
            <RoutesCompletedPlayerRow
              key={`${player.player_id}-${index}`}
              player={player}
              ref={isLastPlayer ? lastPlayerRef : null}
            />
          );
        })}
    </tbody>
  );
};

export default RoutesCompletedTBody;
