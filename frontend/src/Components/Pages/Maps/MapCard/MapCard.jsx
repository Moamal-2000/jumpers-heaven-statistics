import s from "./MapCard.module.scss";

const MapCard = ({
  mapData: {
    name,
    types,
    classification,
    img,
    rate,
    description,
    info,
    compilationRate,
    author,
    isOnline,
    release,
  },
}) => {
  return <div className={s.mapCard}></div>;
};

export default MapCard;
