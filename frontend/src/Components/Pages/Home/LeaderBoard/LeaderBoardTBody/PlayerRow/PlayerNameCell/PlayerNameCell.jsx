"use client";

import CountryImage from "@/Components/Shared/CountryImage";
import { getColoredName } from "@/Functions/components";
import { navigateToPlayerPage } from "@/Functions/navigate";
import { useRouter } from "next/navigation";
import s from "./PlayerNameCell.module.scss";

const PlayerNameCell = ({ player, rank, country, countryName }) => {
  const modifiedPlayerName = getColoredName(player);
  const rankClass = s["rank" + rank];
  const router = useRouter();

  function handlePlayerClick() {
    navigateToPlayerPage(router, playerData.player_id);
  }

  return (
    <td
      className={`${s.player} ${rankClass}`}
      data-type="player-stats-name"
      data-text="Player"
    >
      <span className={s.playerCountry}>
        <CountryImage country={country} countryName={countryName} />
      </span>
      <span className={s.playerName} onClick={handlePlayerClick}>
        {modifiedPlayerName}
      </span>
    </td>
  );
};

export default PlayerNameCell;
