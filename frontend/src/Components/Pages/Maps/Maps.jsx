import SvgIcon from "@/Components/Shared/SvgIcon";
import { MAPS } from "@/Data/staticData";
import Image from "next/image";
import s from "./Maps.module.scss";

const Maps = () => {
  return (
    <section className={s.mapsSection}>
      {MAPS.map(({ name, description, bestTime, difficulty, img, id }) => (
        <div key={id} className={s.mapCard}>
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
      ))}
    </section>
  );
};

export default Maps;
