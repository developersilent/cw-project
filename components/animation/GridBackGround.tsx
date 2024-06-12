import { ReactChildrenProps } from "@/types/Types";
import React from "react";

export function GridBackgroundDemo({children}:ReactChildrenProps) {
  return (
    <div className="w-full dark:bg-black bg-[#ffffff] dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.1] relative">
      {children}
    </div>
  );
}
