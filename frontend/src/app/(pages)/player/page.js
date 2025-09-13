"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const PlayerPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const playerId = searchParams.get("id");

  useEffect(() => {
    if (playerId) {
      // Redirect to the new URL format
      router.replace(`/player/${playerId}`);
    } else {
      // If no player ID, redirect to players list
      router.replace("/players");
    }
  }, [playerId, router]);

  return (
    <main>
      <div>Redirecting...</div>
    </main>
  );
};

export default PlayerPage;
