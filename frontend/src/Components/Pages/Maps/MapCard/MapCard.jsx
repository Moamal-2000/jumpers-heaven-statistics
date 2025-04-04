import s from "./MapCard.module.scss";

const MapCard = ({
  mapData: { name, description, bestTime, difficulty, img },
}) => {
  return <div className={s.mapCard}></div>;
};

export default MapCard;
