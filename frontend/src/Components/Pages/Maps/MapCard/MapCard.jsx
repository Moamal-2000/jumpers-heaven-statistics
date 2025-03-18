import SvgIcon from "@/Components/Shared/SvgIcon";
import Image from "next/image";
import s from "./MapCard.module.scss";

const MapCard = ({
  mapData: { name, description, bestTime, difficulty, img },
}) => {
  return (
    <div className={s.mapCard}>
      <div className={s.imgHolder}>
        {img && <Image fill={true} alt={`${name} cod 2 map`} />}
        {!img && <SvgIcon name="map" />}
      </div>

      <div className={s.mapInfo}>
        <h2>{name}</h2>
        <p>{description}</p>

        <div className={s.mapDetails}>
          <div className={s.bestTime}>
            <SvgIcon name="timer" />
            <p>Best Time: {bestTime}</p>
          </div>

          <div className={s.difficulty}>
            <SvgIcon name="star" />
            <p>Difficulty: {difficulty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
