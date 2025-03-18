import s from "./MapCard.module.scss";

const MapCard = ({
  mapData: { name, description, bestTime, difficulty, img, id },
}) => {
  return <div className={s.card}></div>;
};

export default MapCard;
