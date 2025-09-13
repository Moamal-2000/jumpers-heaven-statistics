import s from "./page.module.scss";
import ServerDisplay from "@/Components/Shared/ServerDisplay/ServerDisplay";

export default async function Home() {
  return (
    <div className="container">
      <main className={s.home}>
        <ServerDisplay />
      </main>
    </div>
  );
}
