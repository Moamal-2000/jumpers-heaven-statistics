"use client";

import Image from "next/image";
import { useState } from "react";

const MapImage = ({ mapName, size = 32 }) => {
  const [src, setSrc] = useState(`/maps/${mapName.toLowerCase()}.jpg`);
  const [title, setTitle] = useState(mapName);

  function handleError() {
    setSrc("/map-placeholder.jpg");
    setTitle("Unknown map");
  }

  return (
    <Image
      width={size}
      height={size}
      src={src}
      alt={title}
      title={title}
      onError={handleError}
    />
  );
};

export default MapImage;
