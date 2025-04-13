import FiltersSection from "@/Components/Pages/Leaderboards/FiltersSection/FiltersSection";
import LeaderBoard from "@/Components/Pages/Leaderboards/LeaderBoard/LeaderBoard";
import { Suspense } from "react";
import s from "./LeaderboardsPage.module.scss";

const LeaderboardsPage = () => {
  return (
    <div className="container">
      <main className={s.leaderboardsPage}>
        <Suspense>
          <FiltersSection />
          <LeaderBoard />
        </Suspense>
      </main>
    </div>
  );
};

export default LeaderboardsPage;
