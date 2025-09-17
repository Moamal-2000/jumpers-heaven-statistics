"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const PlayerPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const playerId = searchParams.get("id");

  useEffect(() => {
    if (playerId) {
      router.replace(`/player/${playerId}`);
      return;
    }

    router.replace("/players");
  }, [playerId, router]);

  return (
    <main>
      <div>Redirecting...</div>
    </main>
  );
};

const PlayerPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlayerPageContent />
    </Suspense>
  );
};

export default PlayerPage;
