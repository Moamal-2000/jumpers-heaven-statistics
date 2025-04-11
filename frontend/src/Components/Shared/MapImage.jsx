"use client";

import Image from "next/image";
import { useState } from "react";

const PLACEHOLDER_PATH = "/map-placeholder.svg";

const MapImage = ({ mapName }) => {
  const [src, setSrc] = useState(`/maps/${mapName.toLowerCase()}.jpg`);
  const [scale, setScale] = useState(1);

  function handleError() {
    setSrc(PLACEHOLDER_PATH);
    setScale(0.5);
  }

  return (
    <Image
      fill={true}
      objectFit="contain"
      src={src || PLACEHOLDER_PATH}
      alt={mapName}
      title={mapName}
      style={{ scale }}
      onError={handleError}
    />
  );
};

export default MapImage;
