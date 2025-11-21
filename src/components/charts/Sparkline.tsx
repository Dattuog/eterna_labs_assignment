"use client";

import { memo, useMemo } from "react";
import { clamp } from "@/lib/utils";

interface SparklineProps {
  data: number[];
  color?: "pink" | "green";
}

export const Sparkline = memo(function Sparkline({
  data,
  color = "pink",
}: SparklineProps) {
  const width = 120;
  const height = 46;

  const { path, area } = useMemo(() => {
    if (!data.length) return { path: "", area: "" };
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    const points = data.map((point, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((point - min) / range) * height;
      return [x, clamp(y, 0, height)];
    });

    const line = points
      .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x},${y}`)
      .join(" ");
    const filled = `${line} L ${width},${height} L 0,${height} Z`;
    return { path: line, area: filled };
  }, [data]);

  const stroke = color === "green" ? "#18d38a" : "#f6638d";
  const fill = color === "green" ? "rgba(22, 211, 126, 0.22)" : "rgba(246, 99, 141, 0.18)";

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-12 w-28">
      <path d={area} fill={fill} />
      <path d={path} fill="none" stroke={stroke} strokeWidth={2} />
    </svg>
  );
});
