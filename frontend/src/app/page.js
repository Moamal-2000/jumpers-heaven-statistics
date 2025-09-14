import ServersPage from "@/Components/Pages/ServersPage/ServersPage";
import s from "./page.module.scss";

export default async function Servers() {
  return (
    <div className="container">
      <main className={s.home}>
        <ServersPage />
      </main>
    </div>
  );
}
