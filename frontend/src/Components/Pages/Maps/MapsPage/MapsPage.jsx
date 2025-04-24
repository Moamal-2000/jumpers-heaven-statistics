"use client";

import useInfiniteScroll from "@/Hooks/App/useInfiniteScroll";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import FiltersSection from "../FiltersSection/FiltersSection";
import Introduction from "../Introduction/Introduction";
import Maps from "../Maps/Maps";
import s from "./MapsPage.module.scss";

const MapsPage = () => {
  const { mapsData } = useSelector((s) => s.maps);
  const { paginationNumber, lastElementRef: lastMapRef } =
    useInfiniteScroll(mapsData);

  return (
    <div className="container">
      <main className={s.mapsPage}>
        <Introduction />
        <Suspense>
          <FiltersSection />
        </Suspense>
        <Maps paginationNumber={paginationNumber} lastMapRef={lastMapRef} />
      </main>
    </div>
  );
};

export default MapsPage;
