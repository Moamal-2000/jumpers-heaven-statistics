"use client";

import Image from "next/image";
import { useState } from "react";

const CountryImage = ({ countryCode, countryName, size = 32 }) => {
  const [src, setSrc] = useState(
    `/countryFlags/${countryCode.toLowerCase()}.svg`
  );
  const [alt, setAlt] = useState(`country flag ${countryName}`);
  const [title, setTitle] = useState(countryName);

  function handleError() {
    setSrc("/placeholders/country-placeholder.svg");
    setAlt("Unknown country");
    setTitle("Unknown country");
  }

  return (
    <Image
      width={size}
      height={size}
      src={src}
      alt={alt}
      title={title}
      onError={handleError}
    />
  );
};

export default CountryImage;
