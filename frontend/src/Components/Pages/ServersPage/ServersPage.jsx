"use client";

import { getColoredName } from "@/Functions/components";
import { useEffect, useState } from "react";
import s from "./ServersPage.module.scss";

const ServersPage = () => {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await fetch(
          "https://jhstats.fly.dev/api/v1/tracker/online-players"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch server data");
        }
        const data = await response.json();
        setServers(data.servers || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServers();
    // Refresh every 30 seconds
    const interval = setInterval(fetchServers, 30000);
    return () => clearInterval(interval);
  }, []);

  const getGameLogo = (gameType) => {
    switch (gameType) {
      case "COD4":
        return "/game-logos/cod4.png";
      case "COD2":
        return "/game-logos/cod2.png";
      default:
        return "/game-logos/default.png";
    }
  };

  const getCountryFlag = (domain) => {
    // Extract country from domain (e.g., hk.jumpersheaven.com -> hk)
    const country = domain.split(".")[0];

    // Handle special cases for broken flags
    const flagMappings = {
      ae: "ae", // UAE
      uk: "gb", // UK -> GB
      us: "us", // USA
      hk: "hk", // Hong Kong
    };

    const flagCountry = flagMappings[country] || country;
    const flagPath = `/countryFlags/${flagCountry}.svg`;

    // Debug logging
    console.log(`Country: ${country}, Flag: ${flagCountry}, Path: ${flagPath}`);

    return flagPath;
  };

  const getGameTypeColor = (gameType) => {
    switch (gameType) {
      case "COD4":
        return "#4CAF50"; // Green
      case "COD2":
        return "#FF9800"; // Orange
      default:
        return "#9E9E9E"; // Gray
    }
  };

  const getServerStatusColor = (online) => {
    return online ? "#47ca4b" : "#F44336";
  };

  const getServerStatusText = (online, playerCount) => {
    if (!online) return "Offline";
    if (playerCount === 0) return "Empty";
    return `${playerCount} player${playerCount !== 1 ? "s" : ""}`;
  };

  const showTooltip = (e, text) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      show: true,
      text,
      x: rect.left + rect.width / 2,
      y: rect.top - 40,
    });
  };

  const hideTooltip = () => {
    setTooltip({ show: false, text: "", x: 0, y: 0 });
  };

  // Group servers by game type
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

  if (loading) {
    return (
      <div className={s.serverDisplay}>
        <div className={s.loadingContainer}>
          <div className={s.loadingSpinner}></div>
          <p>Loading server status...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.serverDisplay}>
        <div className={s.errorContainer}>
          <h3>Server Status Unavailable</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={s.serverDisplay}>
      <div className={s.header}>
        <h2>Server Status</h2>
        <p className={s.subtitle}>
          Real-time server information and online players
        </p>
      </div>

      {gameTypes.map((gameType) => (
        <div key={gameType} className={s.gameSection}>
          <div className={s.gameHeader}>
            <div className={s.gameTitle}>
              <img
                src={getGameLogo(gameType)}
                alt={gameType}
                className={s.gameLogo}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <h3
                className={s.gameTypeTitle}
                style={{ color: getGameTypeColor(gameType) }}
              >
                {gameType}
              </h3>
            </div>
            <div className={s.gameStats}>
              <span className={s.serverCount}>
                {groupedServers[gameType].length} server
                {groupedServers[gameType].length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <div className={s.serversGrid}>
            {groupedServers[gameType].map((server) => (
              <div key={`${server.ip}-${server.port}`} className={s.serverCard}>
                {/* Country Flag - Top Left */}
                <div className={s.countryFlag}>
                  <img
                    src={getCountryFlag(server.domain)}
                    alt="Country flag"
                    className={s.flag}
                    onError={(e) => {
                      console.log("Flag failed to load:", e.target.src);
                      // Try fallback for UAE
                      if (e.target.src.includes("ae.svg")) {
                        e.target.src = "/countryFlags/ae.svg";
                      } else {
                        e.target.style.display = "none";
                      }
                    }}
                  />
                </div>

                {/* Server Header - Domain/IP with Status Indicator */}
                <div className={s.serverHeader}>
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
                    onMouseEnter={(e) =>
                      showTooltip(
                        e,
                        server.online
                          ? `Online - ${server.player_count || 0} players`
                          : "Unreachable"
                      )
                    }
                    onMouseLeave={hideTooltip}
                  >
                    <div
                      className={s.statusDot}
                      style={{
                        backgroundColor: getServerStatusColor(server.online),
                      }}
                    ></div>
                  </div>
                </div>

                {/* Map Information */}
                <div className={s.mapSection}>
                  <div className={s.mapInfo}>
                    <span className={s.mapLabel}>Map</span>
                    <span className={s.mapName}>{server.map}</span>
                  </div>
                </div>

                {/* Players Section */}
                {server.online &&
                  server.players &&
                  server.players.length > 0 && (
                    <div className={s.playersSection}>
                      <div className={s.playersList}>
                        {server.players.map((player, index) => (
                          <div key={index} className={s.playerItem}>
                            <div className={s.playerName}>
                              {getColoredName(
                                player.playername || "Unknown Player"
                              )}
                            </div>
                            <div className={s.playerInfo}>
                              {player.admin && (
                                <span
                                  className={s.playerAdminLevel}
                                  onMouseEnter={(e) =>
                                    showTooltip(
                                      e,
                                      `Admin Level ${player.admin}`
                                    )
                                  }
                                  onMouseLeave={hideTooltip}
                                >
                                  {player.admin}
                                </span>
                              )}
                              {player.ping && (
                                <span className={s.playerPing}>
                                  {player.ping}ms
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* No Players Message */}
                {server.online &&
                  (!server.players || server.players.length === 0) && (
                    <div className={s.noPlayersMessage}>
                      <span>No Online Players</span>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Custom Tooltip */}
      {tooltip.show && (
        <div
          className={s.customTooltip}
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default ServersPage;
