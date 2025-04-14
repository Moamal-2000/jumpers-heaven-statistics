"use client";

import Image from "next/image";
import { useState } from "react";

const PLACEHOLDER_PATH = "/placeholders/map-placeholder.svg";

const MapImage = ({ mapName }) => {
  const [src, setSrc] = useState(`/maps/${mapName.toLowerCase()}.jpg`);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);

  function handleError() {
    setSrc(PLACEHOLDER_PATH);
    setScale(0.5);
  }

  function handleLoadCompleted() {
    setIsLoading(false);
  }

  return (
    <>
      {isLoading && "Loading..."}

      <Image
        sizes="402.9px"
        fill={true}
        src={src || PLACEHOLDER_PATH}
        alt={mapName}
        title={mapName}
        style={{ scale, objectFit: "contain", objectPosition: "center" }}
        onError={handleError}
        onLoad={handleLoadCompleted}
      />
    </>
  );
};

export default MapImage;
