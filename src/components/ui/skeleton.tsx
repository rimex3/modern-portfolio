import { cn } from "@/lib/cn";
import React from "react";

export default function Skeleton({ className = "" }) {
  return (
    <div
      className={cn(`relative overflow-hidden bg-zinc-200 ${className}`)}
     
    >
      <div className="shimmer-overlay" />
    </div>
  );
}
