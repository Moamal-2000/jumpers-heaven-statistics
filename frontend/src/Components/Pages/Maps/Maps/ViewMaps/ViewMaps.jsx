"use client"

import { useSelector } from 'react-redux';
import s from './ViewMaps.module.scss'
import MapCard from '../../MapCard/MapCard';

const ViewMaps = ({ mapsScroll, lastMapRef }) => {
  const { loading, error } = useSelector((s) => s.maps);

  return !loading && !error &&
    mapsScroll.map((mapData, index) => {
      return (
        <MapCard
          key={mapData.CpID}
          mapData={mapData}
          mapsScroll={mapsScroll}
          lastMapRef={lastMapRef}
          index={index}
        />
      );
    })
}

export default ViewMaps