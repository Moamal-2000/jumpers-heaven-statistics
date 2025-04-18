import FiltersSection from "@/Components/Pages/Maps/FiltersSection/FiltersSection";
import Introduction from "@/Components/Pages/Maps/Introduction/Introduction";
import Maps from "@/Components/Pages/Maps/Maps";
import s from "./MapsPage.module.scss";

const MapsPage = () => {
  return (
    <div className="container">
      <main className={s.mapsPage}>
        <Introduction />
        <FiltersSection />
        <Maps />
      </main>
    </div>
  );
};

export default MapsPage;
