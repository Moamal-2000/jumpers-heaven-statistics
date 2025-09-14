import RoutesCompleted from "@/Components/Pages/Leaderboards/RoutesCompleted/RoutesCompleted";
import { Suspense } from "react";
import s from "./RoutesCompletedPage.module.scss";

const RoutesCompletedPage = () => {
  return (
    <div className="container">
      <main className={s.routesCompletedPage}>
        <Suspense fallback={<div>Loading...</div>}>
          <RoutesCompleted />
        </Suspense>
      </main>
    </div>
  );
};

export default RoutesCompletedPage;
