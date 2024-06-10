import { ReactChildrenProps } from "@/types/Types";
import React from "react";

export function GridBackgroundDemo({children}:ReactChildrenProps) {
  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
        {children}
    </div>
  );
}
