import s from "./SkeletonCard.module.scss";

const SkeletonCard = () => {
  return (
    <div className={s.skeletonCard}>
      <div className={s.header}>
        <div className={s.flag}></div>
        <div className={s.serverInfo}>
          <div className={s.line}></div>
          <div className={`${s.line} ${s.short}`}></div>
        </div>
      </div>
      <div className={s.mapInfo}>
        <div className={`${s.line} ${s.medium}`}></div>
        <div className={`${s.line} ${s.short}`}></div>
      </div>
      <div className={s.players}>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
