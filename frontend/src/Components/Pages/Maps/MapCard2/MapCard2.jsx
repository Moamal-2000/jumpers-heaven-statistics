import MapImage from "@/Components/Shared/Images/MapImage/MapImage";
import { formateReleaseDate } from "@/Functions/utils";
import Link from "next/link";
import s from "./MapCard2.module.scss";
import MapStars from "./MapStars/MapStars";

const MapCard2 = ({ mapData, mapsScroll, lastMapRef, index }) => {
  const {
    Author,
    Name,
    Classifications,
    Rate,
    CompilationRate,
    Released,
    Videos,
  } = mapData;
  const ref = mapsScroll.length === index + 1 ? lastMapRef : null;

  return (
    <div className={s.mapCard} ref={ref}>
      <div className={s.imgHolder}>
        <MapImage mapName={Name} />
      </div>

      <div className={s.leftSide}>
        <Link className={s.mapName} href={`/maps/map/details`}>
          {Name}
        </Link>

        <div className={s.classifications}>
          {Classifications?.map(({ text, id }) => (
            <span className={s.classification} key={id}>
              {text}
            </span>
          ))}
        </div>

        <div className={s.starsWrapper}>
          <MapStars rate={Rate} />
          <span className={s.rateText}>{Rate || 0}</span>
        </div>
      </div>

      <div className={s.rightSide}>
        <div className={s.authorAndRelease}>
          <span className={s.authorName}>{Author}</span>
          <span className={s.releaseDate}>{formateReleaseDate(Released)}</span>
        </div>

        <div className={s.completionRate}></div>
      </div>
    </div>
  );
};

export default MapCard2;
