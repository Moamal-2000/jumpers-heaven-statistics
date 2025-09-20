import s from "./SkeletonCard.module.scss";

const SkeletonCard = () => {
  return (
    <div className={s.skeletonCard}>
      <div className={s.header}>
        <div className={s.flag} />
        <div className={s.serverInfo}>
          <div className={`${s.line} ${s.short}`} />
          <div className={`${s.line} ${s.shorter}`} />
        </div>

        <div className={`${s.line} ${s.tiny}`} />
      </div>

      <div className={s.mapInfo}>
        <div className={`${s.line} ${s.tiny}`} />
        <div className={`${s.line} ${s.mini}`} />
      </div>

      <div className={s.players}>
        {[...Array(7)].map((_, i) => (
          <div className={s.line} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;
