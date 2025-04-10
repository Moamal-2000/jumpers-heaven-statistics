"use client";

import { fetchMaps } from "@/Redux/slices/mapsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MapCard from "./MapCard/MapCard";
import s from "./Maps.module.scss";

const Maps = () => {
  const dispatch = useDispatch();
  const { maps } = useSelector((s) => s.maps);

  useEffect(() => {
    dispatch(fetchMaps());
  }, []);

  return (
    <section className={s.mapsSection}>
      {maps.map((mapData) => (
        <MapCard key={mapData.id} mapData={mapData} />
      ))}
    </section>
  );
};

export default Maps;
