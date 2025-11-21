"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-border-subtle bg-surface-800/80 p-6 text-center shadow-card">
      <h2 className="text-xl font-semibold text-white">Something went wrong</h2>
      <p className="mt-2 text-sm text-text-secondary">{error.message}</p>
      <div className="mt-4 flex justify-center">
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
