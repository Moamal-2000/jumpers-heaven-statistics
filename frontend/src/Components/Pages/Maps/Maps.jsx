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
  const { pageVisits } = useSelector((s) => s.global);

  const { paginationNumber, lastElementRef: lastMapRef } =
    useInfiniteScroll(mapsData);

  function addDataOnScroll() {
    const paginationMapsData = paginateData(mapsData, paginationNumber);
    const value = mapsScroll.concat(paginationMapsData);

    dispatch(updateMapsState({ key: "mapsScroll", value }));
  }

  function checkAndLoadMoreData() {
    const isLastPage = getIsLastPagination(mapsData, paginationNumber);
    const lastVisitedPage = pageVisits?.[pageVisits.length - 1];
    const cameFromDifferentPage =
      lastVisitedPage !== "/maps" && lastVisitedPage !== undefined;

    const shouldLoadMoreData = !isLastPage && !cameFromDifferentPage;

    if (shouldLoadMoreData) addDataOnScroll();
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
        return (
          <MapCard
            key={mapData.CpID}
            mapData={mapData}
            mapsScroll={mapsScroll}
            lastMapRef={lastMapRef}
            index={index}
          />
        );
      })}
    </section>
  );
};

export default Maps;
