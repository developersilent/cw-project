"use client";
import { ReactChildrenProps } from "@/types/Types";
import ReactLenis from "lenis/react";

export default function SmoothScroll({ children }: ReactChildrenProps) {
  return <ReactLenis root options={{
    lerp: 0.05,
  }}>{children}</ReactLenis>;
}
