import MapImage from "@/Components/Shared/Images/MapImage/MapImage";
import s from "./MapDetailHeader.module.scss";

const MapDetailHeader = ({ mapData, onBack }) => {
  const { mapname, author, released, type, ender } = mapData;

  return (
    <div className={s.header}>
      <button className={s.backButton} onClick={onBack}>
        ← Back to Maps
      </button>

      <div className={s.mapInfo}>
        <div className={s.mapImage}>
          <MapImage mapName={mapname} objectFit="cover" />
        </div>

        <div className={s.mapDetails}>
          <h1 className={s.mapName}>
            {mapname}
            {ender && <span className={s.ender}>({ender})</span>}
          </h1>

          <div className={s.mapMeta}>
            <div className={s.metaItem}>
              <span className={s.label}>Author:</span>
              <span className={s.value}>{author}</span>
            </div>

            <div className={s.metaItem}>
              <span className={s.label}>Released:</span>
              <span className={s.value}>
                {new Date(released).toLocaleDateString()}
              </span>
            </div>

            <div className={s.metaItem}>
              <span className={s.label}>Type:</span>
              <span className={`${s.value} ${s.typeBadge} ${s[type]}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDetailHeader;
