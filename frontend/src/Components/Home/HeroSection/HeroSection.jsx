import { TOP10 } from "src/Data/variables";
import s from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={s.heroSection}>
      <div className={s.headerContainer}>
        <h1>JumpersHeaven Leaderboard</h1>
        <h2>Scoring System</h2>
      </div>

      <p className={s.description}>
        For each map, the top 10 players will be ranked and assigned points as
        follows:
      </p>

      <table className={s.pointsTable}>
        <thead>
          <tr>
            <th>Places</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {TOP10.map((place) => {
            const point = Math.abs(parseInt(place) - 11);

            return (
              <tr key={place}>
                <td className={s.place}>{place}</td>
                <td className={s.point}>{point}p</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p className={s.description}>
        This system ensures that higher placements receive more points, with a
        gradual decrease for lower positions in the top 10. While this scoring
        method provides a basic framework, it is not without flaws. I am open to
        suggestions for improvements to make it more balanced or fair.
      </p>

      <p className={`${s.note} ${s.description}`}>
        <span className={s.white}>Note:</span> bot generated file, due to
        markdown restriction all escape characters got removed
      </p>

      <p className={s.date}>
        Last update:{" "}
        <time dateTime="2024-11-01T04:15:51Z">2024-11-01T04:15:51Z</time>
      </p>
    </section>
  );
};

export default HeroSection;
