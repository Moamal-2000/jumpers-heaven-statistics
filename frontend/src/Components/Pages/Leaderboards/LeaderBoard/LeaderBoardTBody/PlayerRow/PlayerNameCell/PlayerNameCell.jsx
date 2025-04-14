"use client";

import CountryImage from "@/Components/Shared/CountryImage";
import { getColoredName } from "@/Functions/components";
import Link from "next/link";
import s from "./PlayerNameCell.module.scss";

const PlayerNameCell = ({ playerData }) => {
  const { PlayerName, Rank, CountryCode, Country, PlayerID } = playerData;
  const coloredPlayerName = getColoredName(PlayerName);
  const rankClass = s["rank" + Rank];

  return (
    <td className={`${s.player} ${rankClass}`} data-header="Player">
      <Link href={`/player/${PlayerID}`}>
        <span className={s.playerCountry}>
          <CountryImage countryCode={CountryCode} countryName={Country} />
        </span>
        <span className={s.playerName}>{coloredPlayerName}</span>
      </Link>
    </td>
  );
};

export default PlayerNameCell;
