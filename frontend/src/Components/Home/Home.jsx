import HeroSection from "./HeroSection/HeroSection";
import s from "./Home.module.scss";
import JhLeaderBoardSection from "./JhLeaderBoard/JhLeaderBoardSection";

const Home = () => {
  return (
    <main className={s.home}>
      <div className="container">
        <HeroSection />
        <JhLeaderBoardSection />
      </div>
    </main>
  );
};
export default Home;
