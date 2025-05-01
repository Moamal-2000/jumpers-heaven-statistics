import { NUMBER_OF_RATING_STARS } from "@/Data/constants";
import s from "./MapStars.module.scss";

const MapStars = ({ rate }) => {
  return (
    <div className={s.stars}>
      {Array.from({ length: NUMBER_OF_RATING_STARS }, (_, i) => {
        return <span key={i} className={s.star} />;
      })}
    </div>
  );
};

export default MapStars;
