import s from "./Home.module.scss";
import JhLeaderBoardSection from "./JhLeaderBoard/JhLeaderBoardSection";

const Home = () => {
  return (
    <main className={s.home}>
      <JhLeaderBoardSection />
    </main>
  );
};
export default Home;
