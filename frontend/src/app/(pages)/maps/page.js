import Maps from "@/Components/Pages/Maps/Maps";
import s from "./MapsPage.module.scss";

const MapsPage = () => {
  return (
    <main className={s.mapsPage}>
      <div className="container">
        <Maps />
      </div>
    </main>
  );
};

export default MapsPage;
