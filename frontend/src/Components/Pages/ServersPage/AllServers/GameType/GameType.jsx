import SvgIcon from "@/Components/Shared/SvgIcon";
import { getColoredName } from "@/Functions/components";
import { getCountryFlag, getServerStatusColor } from "@/Functions/utils";
import Image from "next/image";
import Link from "next/link";
import s from "./GameType.module.scss";

const GameType = ({ gameType, groupedServers }) => {
  return (
    <div key={gameType} className={s.gameSection}>
      <h2 className={s.gameTitle}>
        {gameType === "COD2" ? "Call of Duty 2" : "Call of Duty 4"}
      </h2>

      <div
        className={`${s.serversGrid} ${
          gameType === "COD4" ? s.cod4Card : s.cod2Card
        }`}
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
                <div className={s.serverIpContainer}>
                  <p className={s.serverIp}>
                    {server.ip}:{server.port}
                  </p>
                  <button
                    className={s.copyButton}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${server.ip}:${server.port}`
                      );
                    }}
                    title="Copy server address"
                  >
                    <SvgIcon name="copy" />
                  </button>
                </div>
              </div>

              <div className={s.serverStatusIndicator}>
                <span
                  className={s.statusDot}
                  style={{
                    backgroundColor: getServerStatusColor(server.online),
                  }}
                />
                <span className={s.statusText}>
                  <SvgIcon name="users" />
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
                  <SvgIcon name="globe" /> Map
                </span>
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
                            <SvgIcon name="shield" /> {player.admin}
                          </span>
                        )}
                        {player.ping && (
                          <span className={s.playerPing}>
                            <SvgIcon name="ping" /> {player.ping}ms
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
  );
};

export default GameType;
