import { Suspense } from "react";
import FiltersSection from "../FiltersSection/FiltersSection";
import Introduction from "../Introduction/Introduction";
import Maps from "../Maps/Maps";
import s from "./MapsPage.module.scss";

const MapsPage = () => {
  return (
    <div className="container">
      <main className={s.mapsPage}>
        <Introduction />
        <Suspense>
          <FiltersSection />
        </Suspense>
        <Maps />
      </main>
    </div>
  );
};

export default MapsPage;
