import Maps from "@/Components/Pages/Maps/Maps";
import s from "./MapsPage.module.scss";

const MapsPage = () => {
  return (
    <div className="container">
      <main className={s.mapsPage}>
        <Maps />
      </main>
    </div>
  );
};

export default MapsPage;
