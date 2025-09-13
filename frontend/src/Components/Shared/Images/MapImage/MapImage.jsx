"use client";

import Image from "next/image";
import { useState, memo } from "react";
import SvgIcon from "../../SvgIcon";
import s from "./MapImage.module.scss";

const PLACEHOLDER_PATH = "/placeholders/map-placeholder.svg";

const MapImage = memo(({ mapName }) => {
  // Clean the map name for file path
  const cleanMapName = mapName?.toLowerCase().replace(/[^a-z0-9_]/g, '') || 'unknown';
  const [src, setSrc] = useState(`/maps/${cleanMapName}.jpg`);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  function handleError() {
    setHasError(true);
    setSrc(PLACEHOLDER_PATH);
    setIsLoading(false);
  }

  function handleLoadCompleted() {
    setIsLoading(false);
  }

  return (
    <div className={s.imageContainer}>
      {isLoading && (
        <div className={s.loader}>
          <SvgIcon name="animated-spinner" />
        </div>
      )}

      <Image
        sizes="402.9px"
        fill={true}
        src={src || PLACEHOLDER_PATH}
        alt={mapName}
        title={mapName}
        style={{ 
          objectFit: "contain", 
          objectPosition: "center",
          scale: hasError ? 0.8 : 1
        }}
        onError={handleError}
        onLoad={handleLoadCompleted}
        priority
      />
    </div>
  );
});

MapImage.displayName = 'MapImage';

export default MapImage;
