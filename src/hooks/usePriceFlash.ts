"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | null;

export function usePriceFlash(value: number) {
  const prev = useRef<number>(value);
  const [direction, setDirection] = useState<Direction>(null);

  useEffect(() => {
    if (value > prev.current) {
      setDirection("up");
    } else if (value < prev.current) {
      setDirection("down");
    }

    const timeout = setTimeout(() => setDirection(null), 900);
    prev.current = value;
    return () => clearTimeout(timeout);
  }, [value]);

  return direction;
}
