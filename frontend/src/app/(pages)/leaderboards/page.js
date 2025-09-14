"use client";

import FiltersSection from "@/Components/Pages/Leaderboards/FiltersSection/FiltersSection";
import LeaderBoard from "@/Components/Pages/Leaderboards/LeaderBoard/LeaderBoard";
import RoutesCompleted from "@/Components/Pages/Leaderboards/RoutesCompleted/RoutesCompleted";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import s from "./LeaderboardsPage.module.scss";

const LeaderboardsPageContent = () => {
  const searchParams = useSearchParams();
  const leaderboardType = searchParams.get("leaderboard");

  const renderLeaderboard = () => {
    if (leaderboardType === "routescompleted") {
      return <RoutesCompleted />;
    }
    return <LeaderBoard />;
  };

  return (
    <>
      <FiltersSection />
      {renderLeaderboard()}
    </>
  );
};

const LeaderboardsPage = () => {
  return (
    <div className="container">
      <main className={s.leaderboardsPage}>
        <Suspense fallback={<div>Loading...</div>}>
          <LeaderboardsPageContent />
        </Suspense>
      </main>
    </div>
  );
};

export default LeaderboardsPage;
