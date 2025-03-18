import { PLAYERS } from "@/Data/staticData";
import PlayerCard from "./PlayerCard/PlayerCard";
import s from "./Players.module.scss";

const Players = () => {
  return (
    <section className={s.playersSection}>
      {PLAYERS.map((playerData) => (
        <PlayerCard key={playerData.id} playerData={playerData} />
      ))}
    </section>
  );
};

export default Players;
