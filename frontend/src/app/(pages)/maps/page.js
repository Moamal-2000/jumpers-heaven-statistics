import Maps from "@/Components/Pages/Maps/Maps";
import s from "./MapsPage.module.scss";
import Introduction from "@/Components/Pages/Maps/Introduction/Introduction";

const MapsPage = () => {
  return (
    <div className="container">
      <main className={s.mapsPage}>
        <Introduction />
        {/* <Maps /> */}
      </main>
    </div>
  );
};

export default MapsPage;
