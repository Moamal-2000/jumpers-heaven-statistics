import SvgIcon from "@/Components/Shared/SvgIcon";
import { NUMBER_OF_RATING_STARS } from "@/Data/constants";
import s from "./MapStars.module.scss";

const MapStars = ({ rate }) => {
  const starsIcons = Array.from(
    { length: NUMBER_OF_RATING_STARS },
    (_, index) => <SvgIcon key={index} name={getStarName(index, rate)} />
  );

  return <div className={s.stars}>{starsIcons}</div>;
};

export default MapStars;

function getStarName(index, rate = 3.5) {
  const starValue = index + 1;
  if (rate >= starValue) return "yellowStar";
  if (rate >= starValue - 0.5) return "halfStar";
  return "emptyStar";
}
