import FiltersSection from "@/Components/Pages/Home/FiltersSection/FiltersSection";
import Introduction from "@/Components/Pages/Home/Introduction/Introduction";
import LeaderBoard from "@/Components/Pages/Home/LeaderBoard/LeaderBoard";
import { Suspense } from "react";
import s from "./page.module.scss";

export default async function Home() {
  return (
    <div className="container">
      <main className={s.home}>
        <Introduction />
        <Suspense>
          <FiltersSection />
          {/* <LeaderBoard /> */}
        </Suspense>
      </main>
    </div>
  );
}
