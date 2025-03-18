import { PLAYERS } from "@/Data/staticData";
import PlayerCard from "./PlayerCard/PlayerCard";
import s from "./Players.module.scss";

const Players = () => {
  return (
    <section className={s.playersSection}>
      {PLAYERS.map((playerData, index) => (
        <PlayerCard key={playerData.id} rank={index + 1} {...playerData} />
      ))}
    </section>
  );
};

export default Players;
