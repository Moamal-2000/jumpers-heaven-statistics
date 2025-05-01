"use client";

import Image from "next/image";
import { useState } from "react";
import SvgIcon from "../../SvgIcon";
import s from "./MapImage.module.scss";

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
        style={{ scale, objectFit: "contain", objectPosition: "center" }}
        onError={handleError}
        onLoad={handleLoadCompleted}
        priority
      />
    </>
  );
};

export default MapImage;
