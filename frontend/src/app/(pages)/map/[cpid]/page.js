"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MapDetailPage from "@/Components/Pages/MapDetail/MapDetailPage";

const MapPage = () => {
  const params = useParams();
  const cpid = params.cpid;

  return <MapDetailPage cpid={cpid} />;
};

export default MapPage;
