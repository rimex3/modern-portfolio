import { cn } from "@/lib/cn";
import React from "react";

export default function Skeleton({ className = "", style = {} }) {
  return (
    <div
      className={cn(`relative overflow-hidden bg-zinc-200 ${className}`)}
      style={style}
    >
      <div className="shimmer-overlay" />
    </div>
  );
}
