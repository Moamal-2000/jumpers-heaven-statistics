"use client";

import MapDetailPage from "@/Components/Pages/MapDetail/MapDetailPage";
import { useParams } from "next/navigation";

const MapPage = () => {
  const params = useParams();
  const cpid = params.cpid;

  return <MapDetailPage cpid={cpid} />;
};

export default MapPage;
