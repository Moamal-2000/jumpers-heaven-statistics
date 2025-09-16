import s from "./ServersHeader.module.scss";

const ServersHeader = () => {
  return (
    <div className={s.header}>
      <h2>Server Status</h2>
      <p className={s.subtitle}>
        Real-time server information and online players
      </p>
    </div>
  );
};

export default ServersHeader;
