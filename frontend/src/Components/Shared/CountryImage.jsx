"use client";

import Image from "next/image";
import { useState } from "react";

const CountryImage = ({ country, size = 32 }) => {
  const [src, setSrc] = useState(`/countryFlags/${country.toLowerCase()}.svg`);
  const [alt, setAlt] = useState(`country flag ${country}`);
  const [title, setTitle] = useState(country);

  function handleError() {
    setSrc("/country-placeholder.svg");
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
