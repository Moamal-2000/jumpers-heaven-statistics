import { getColoredName } from "@/Functions/components";
import Image from "next/image";
import Link from "next/link";
import s from "./AllServers.module.scss";

// SVG Icon Components
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const PingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>
);
import SkeletonCard from "./SkeletonCard/SkeletonCard";

const AllServers = ({ servers, loading, error }) => {
  const groupedServers = servers.reduce((groups, server) => {
    const gameType = server.game_type;
    if (!groups[gameType]) {
      groups[gameType] = [];
    }
    groups[gameType].push(server);
    return groups;
  }, {});

  // Sort game types: COD2 first, then COD4
  const gameTypes = Object.keys(groupedServers).sort((a, b) => {
    if (a === "COD2" && b !== "COD2") return -1;
    if (a !== "COD2" && b === "COD2") return 1;
    return 0;
  });

  const getCountryFlag = (domain) => {
    const country = domain.split(".")[0];
    const flagPath = `/countryFlags/${country}.svg`;
    return flagPath;
  };

  const getServerStatusColor = (online) => {
    return online ? "#47ca4b" : "#F44336";
  };

  if (loading) {
    return (
      <div className={s.serversGrid}>
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.errorContainer}>
        <h3>Server Status Unavailable</h3>
        <p>{error}</p>
      </div>
    );
  }

  return gameTypes.map((gameType) => (
    <div key={gameType} className={s.gameSection}>
      <h2 className={s.gameTitle}>{gameType}</h2>
      <div
        className={`${s.serversGrid} ${gameType === "COD4" ? s.cod4Card : s.cod2Card}`}
      >
        {groupedServers[gameType].map((server) => (
          <div key={`${server.ip}-${server.port}`} className={s.serverCard}>
            <header className={s.serverHeader}>
              <div className={s.countryFlag}>
                <Image
                  src={getCountryFlag(server.domain)}
                  alt="Country flag"
                  width="30"
                  height="26"
                  className={s.flag}
                />
              </div>

              <div className={s.serverAddress}>
                <div className={s.domainInfo}>
                  <span className={s.domain}>{server.domain}</span>
                </div>
                <p className={s.serverIp}>
                  {server.ip}:{server.port}
                </p>
              </div>

              <div className={s.serverStatusIndicator}>
                <span
                  className={s.statusDot}
                  style={{
                    backgroundColor: getServerStatusColor(server.online),
                  }}
                />
                <span className={s.statusText}>
                  <UsersIcon />
                  {server.online
                    ? `${server.player_count || 0} Players`
                    : "Offline"}
                </span>
              </div>
            </header>

            {/* Map Information */}
            <div className={s.mapSection}>
              <div className={s.mapInfo}>
                <span className={s.mapLabel}>
                  <GlobeIcon /> Map
                </span>
                {console.log(server.map)}
                {/* The map ID is not available in the API, so we link by map name for now */}
                <Link href={`/map/${server.map}`} className={s.mapName}>
                  {server.map}
                </Link>
              </div>
            </div>

            {/* Players Section */}
            {server.online && server.players && server.players.length > 0 && (
              <div className={s.playersSection}>
                <div className={s.playersList}>
                  {server.players.map((player, index) => (
                    <div key={index} className={s.playerItem}>
                      <div className={s.playerName}>
                        {getColoredName(player.playername || "Unknown Player")}
                      </div>
                      <div className={s.playerInfo}>
                        {player.admin && (
                          <span className={s.playerAdminLevel}>
                            <ShieldIcon /> {player.admin}
                          </span>
                        )}
                        {player.ping && (
                          <span className={s.playerPing}>
                            <PingIcon /> {player.ping}ms
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  ));
};

export default AllServers;
