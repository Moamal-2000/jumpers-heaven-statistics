"use client";

import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import MapCard from "../../MapCard/MapCard";
import MapCard2 from "../../MapCard2/MapCard2";

const ViewMaps = ({ mapsScroll, lastMapRef }) => {
  const { loading, error } = useSelector((s) => s.maps);
  const searchParams = useSearchParams();
  const viewType = searchParams.get("view") || "grid";

  if (loading || error) return null;

  if (viewType === "list")
    return mapsScroll.map((mapData, index) => {
      return (
        <MapCard2
          key={mapData.CpID}
          mapData={mapData}
          mapsScroll={mapsScroll}
          lastMapRef={lastMapRef}
          index={index}
        />
      );
    });

  return mapsScroll.map((mapData, index) => {
    return (
      <MapCard
        key={mapData.CpID}
        mapData={mapData}
        mapsScroll={mapsScroll}
        lastMapRef={lastMapRef}
        index={index}
      />
    );
  });
};

export default ViewMaps;
