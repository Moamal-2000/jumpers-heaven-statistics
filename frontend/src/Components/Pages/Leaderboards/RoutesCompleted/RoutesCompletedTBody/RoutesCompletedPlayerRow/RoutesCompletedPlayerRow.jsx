"use client";

import { getColoredName, getModifiedRank } from "@/Functions/components";
import { forwardRef } from "react";
import s from "./RoutesCompletedPlayerRow.module.scss";

const RoutesCompletedPlayerRow = forwardRef(({ player }, ref) => {
  const getCountryFlagPath = (countryCode) => {
    if (!countryCode) return "/placeholders/country-placeholder.svg";
    return `/countryFlags/${countryCode.toLowerCase()}.svg`;
  };

  const handlePlayerClick = () => {
    const playerProfileUrl = `/player/${player.player_id}?tab=routes`;
    window.open(playerProfileUrl, '_blank');
  };

  return (
    <tr ref={ref} className={s.playerRow} data-type="player-stats-row">
      <td className={s.rank} data-header="Rank">
        {getModifiedRank(player.rank)}
      </td>
      <td className={`${s.player} ${s["rank" + player.rank]}`} data-header="Player">
        <div className={s.playerInfo}>
          <img
            src={getCountryFlagPath(player.country_code)}
            alt={player.country}
            className={s.countryFlag}
            onError={(e) => {
              e.target.src = "/placeholders/country-placeholder.svg";
            }}
          />
          <span 
            className={s.playerName} 
            onClick={handlePlayerClick}
          >
            {getColoredName(player.player_name)}
          </span>
        </div>
      </td>
      <td className={s.completionRate} data-header="Completion %">
        {player.completion_rate}
      </td>
      <td className={s.completed} data-header="Completed">
        {player.completed}
      </td>
    </tr>
  );
});

RoutesCompletedPlayerRow.displayName = "RoutesCompletedPlayerRow";

export default RoutesCompletedPlayerRow;
name 