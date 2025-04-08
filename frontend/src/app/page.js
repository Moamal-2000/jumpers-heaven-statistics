import FiltersSection from "@/Components/Pages/Home/FiltersSection/FiltersSection";
import LeaderBoard from "@/Components/Pages/Home/LeaderBoard/LeaderBoard";
import { Suspense } from "react";
import s from "./page.module.scss";

export default async function Home() {
  return (
    <div className="container">
      <main className={s.home}>
        <Suspense>
          <FiltersSection />
          {/* <LeaderBoard /> */}
        </Suspense>
      </main>
    </div>
  );
}
