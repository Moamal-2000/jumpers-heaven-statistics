import s from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <section className={s.introduction}>
      <h2>
        Discover Amazing <span>Maps</span>
      </h2>

      <p>
        Explore a vast collection of player-created challenges ranging from
        beginner-friendly courses to expert-level speedruns. Find your next
        favorite jump challenge and become a legend.
      </p>
    </section>
  );
};

export default Introduction;
