import ToolTip from "@/Components/Pages/ServersPage/AllServers/ToolTip/ToolTip";
import { getColoredName } from "@/Functions/components";
import Image from "next/image";
import s from "./AllServers.module.scss";

const AllServers = ({ servers }) => {
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

  return gameTypes.map((gameType) => (
    <div key={gameType} className={s.gameSection}>
      <div
        className={`${s.serversGrid} ${gameType === "COD4" ? s.cod4Card : ""}`}
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

              <div
                className={s.serverStatusIndicator}
                style={{
                  borderColor: getServerStatusColor(server.online),
                }}
              >
                <span
                  className={s.statusDot}
                  style={{
                    backgroundColor: getServerStatusColor(server.online),
                  }}
                />
                <ToolTip>
                  {server.online
                    ? `Online - ${server.player_count || 0} players`
                    : "Offline"}
                </ToolTip>
              </div>
            </header>

            {/* Map Information */}
            <div className={s.mapSection}>
              <div className={s.mapInfo}>
                <span className={s.mapLabel}>Map:</span>
                <span className={s.mapName}>{server.map}</span>
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
                            {player.admin}
                          </span>
                        )}
                        {player.ping && (
                          <span className={s.playerPing}>{player.ping}ms</span>
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
