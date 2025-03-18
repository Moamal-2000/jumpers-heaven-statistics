import SvgIcon from "@/Components/Shared/SvgIcon";
import Image from "next/image";
import s from "./Player.module.scss";

const PlayerCard = ({
  playerData: { name, rank, avatar, totalPoints, completedMaps, bestTime },
}) => {
  return (
    <div className={s.playerCard}>
      <div className={s.mainInfo}>
        <div className={s.avatar}>
          {avatar && <Image width={64} height={64} alt={`${name} avatar`} />}
          {!avatar && <SvgIcon name="users" />}
        </div>

        <div className={s.wrappers}>
          <h2>{name}</h2>
          <span>Rank #{rank}</span>
        </div>
      </div>

      <div className={s.stats}>
        <div className={s.stat}>
          <p>Total Points:</p>
          <span>{totalPoints}</span>
        </div>

        <div className={s.stat}>
          <p>Maps Completed:</p> <span>{completedMaps}</span>
        </div>

        <div className={s.stat}>
          <p>Best Time:</p>
          <span>{bestTime}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
