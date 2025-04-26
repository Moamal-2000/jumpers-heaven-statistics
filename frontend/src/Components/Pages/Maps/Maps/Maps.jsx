"use client";

import { getIsLastPagination, paginateData } from "@/Functions/utils";
import { fetchMaps, updateMapsState } from "@/Redux/slices/mapsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerLoader from "../../../Shared/Loaders/SpinnerLoader/SpinnerLoader";
import MapCard from "../MapCard/MapCard";
import s from "./Maps.module.scss";

const Maps = ({ paginationNumber, lastMapRef }) => {
  const dispatch = useDispatch();
  const { mapsData, mapsScroll, allDataDisplayed, loading, error } =
    useSelector((s) => s.maps);
  const { pageVisits, isMapsExpanded } = useSelector((s) => s.global);
  const collapseClass = isMapsExpanded ? "" : s.collapse;

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

    // In this case the handleShowAll() is activated already
    const isSameArrayReference = mapsScroll === mapsData;

    const shouldLoadMoreData =
      !isLastPage &&
      !allDataDisplayed &&
      !isSameArrayReference &&
      !cameFromDifferentPage;

    if (shouldLoadMoreData) addDataOnScroll();
  }

  useEffect(() => {
    dispatch(fetchMaps());
  }, []);

  useEffect(() => {
    checkAndLoadMoreData();
  }, [paginationNumber]);

  return (
    <section className={`${s.mapsSection} ${collapseClass}`}>
      {loading && !error && (
        <SpinnerLoader
          title="Loading maps..."
          description="Fetching the latest maps"
        />
      )}

      {!loading && !error && (
        <div className={s.mapsWrapper}>
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
        </div>
      )}
    </section>
  );
};

export default Maps;
