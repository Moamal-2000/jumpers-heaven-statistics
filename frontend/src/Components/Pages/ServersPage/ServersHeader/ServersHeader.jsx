import s from "./ServersHeader.module.scss";

const ServersHeader = () => {
  return (
    <div className={s.header}>
      <h2>Server Status</h2>
      <p className={s.subtitle}>
        Check which servers are up and which players are online right now
      </p>
    </div>
  );
};

export default ServersHeader;
