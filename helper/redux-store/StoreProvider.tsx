"use client";
import { ReactChildrenProps } from "@/types/Types";
import { Provider } from "react-redux";
import { ReduxStore } from "./Store";

export default function StoreProvider({ children }: ReactChildrenProps) {
  return <Provider store={ReduxStore}>{children}</Provider>;
}
