"use client";

import CountryImage from "@/Components/Shared/CountryImage";
import { getColoredName } from "@/Functions/components";
import { navigateToPlayerPage } from "@/Functions/navigate";
import { useRouter } from "next/navigation";
import s from "./PlayerNameCell.module.scss";

const PlayerNameCell = ({ playerData }) => {
  const { PlayerName, Rank, CountryCode, Country, PlayerID } = playerData;
  const modifiedPlayerName = getColoredName(PlayerName);
  const rankClass = s["rank" + Rank];
  const router = useRouter();

  function handlePlayerClick() {
    navigateToPlayerPage(router, PlayerID);
  }

  return (
    <td
      className={`${s.player} ${rankClass}`}
      data-type="player-stats-name"
      data-text="Player"
    >
      <span className={s.playerCountry}>
        <CountryImage countryCode={CountryCode} countryName={Country} />
      </span>
      <span className={s.playerName} onClick={handlePlayerClick}>
        {modifiedPlayerName}
      </span>
    </td>
  );
};

export default PlayerNameCell;
