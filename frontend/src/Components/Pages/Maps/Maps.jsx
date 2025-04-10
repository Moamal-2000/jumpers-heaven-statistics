"use client";

import { getIsLastPagination, paginateData } from "@/Functions/utils";
import useInfiniteScroll from "@/Hooks/App/useInfiniteScroll";
import { fetchMaps, updateMapsState } from "@/Redux/slices/mapsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MapCard from "./MapCard/MapCard";
import s from "./Maps.module.scss";

const Maps = () => {
  const dispatch = useDispatch();
  const { mapsData, mapsScroll } = useSelector((s) => s.maps);

  const { paginationNumber, lastElementRef: lastMapRef } =
    useInfiniteScroll(mapsData);

  function addDataOnScroll() {
    const paginationMapsData = paginateData(mapsData, paginationNumber);

    dispatch(
      updateMapsState({
        key: "mapsScroll",
        value: [...mapsScroll, ...paginationMapsData],
      })
    );
  }

  function checkAndLoadMoreData() {
    const isLastPagination = getIsLastPagination(mapsData, paginationNumber);
    if (!isLastPagination) addDataOnScroll();
  }

  useEffect(() => {
    dispatch(fetchMaps());
  }, []);

  useEffect(() => {
    checkAndLoadMoreData();
  }, [paginationNumber]);

  return (
    <section className={s.mapsSection}>
      {mapsScroll.map((mapData, index) => {
        if (mapsScroll.length === index + 1) {
          return (
            <MapCard
              key={mapData.ID}
              mapData={mapData}
              lastMapRef={lastMapRef}
            />
          );
        }

        return <MapCard key={mapData.ID} mapData={mapData} />;
      })}
    </section>
  );
};

export default Maps;
