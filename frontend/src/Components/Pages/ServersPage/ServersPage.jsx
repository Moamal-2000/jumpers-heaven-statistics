"use client";

import { jhApis } from "@/Api/jumpersHeaven";
import { useEffect, useState } from "react";
import AllServers from "./AllServers/AllServers";
import s from "./ServersPage.module.scss";

const ServersPage = () => {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await fetch(jhApis({}).player.getOnlinePlayers);
        if (!response.ok) throw new Error("Failed to fetch server data");
        const data = await response.json();
        setServers(data.servers || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServers();
  }, []);

  const getServerStatusText = (online, playerCount) => {
    if (!online) return "Offline";
    if (playerCount === 0) return "Empty";
    return `${playerCount} player${playerCount !== 1 ? "s" : ""}`;
  };

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

      <AllServers servers={servers} />
    </div>
  );
};

export default ServersPage;
