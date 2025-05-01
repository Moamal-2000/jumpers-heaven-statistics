import { NUMBER_OF_RATING_STARS } from "@/Data/constants";
import s from "./MapStars.module.scss";

const MapStars = ({ rate }) => {
  return (
    <div className={s.stars}>
      {Array.from({ length: NUMBER_OF_RATING_STARS }, (_, i) => (
        <span key={i} className={getStarClass(i, rate)} />
      ))}
    </div>
  );
};

export default MapStars;

function getStarClass(index, rate) {
  const starValue = index + 1;
  if (rate >= starValue) return s.star;
  if (rate >= starValue - 0.5) return `${s.star} ${s.half}`;
  return `${s.star} ${s.empty}`;
}
