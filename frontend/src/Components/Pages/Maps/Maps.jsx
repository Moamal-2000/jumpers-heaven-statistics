import { MAPS } from "@/Data/staticData";
import MapCard from "./MapCard/MapCard";
import s from "./Maps.module.scss";

const Maps = () => {
  return (
    <section className={s.mapsSection}>
      {MAPS.map((mapData) => (
        <MapCard key={mapData.id} mapData={mapData} />
      ))}
    </section>
  );
};

export default Maps;
