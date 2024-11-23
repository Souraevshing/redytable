"use client";

import { Provider } from "react-redux";

import store from "@/lib/store";

/**
 * @description provider for the store to consume the states from the reducer
 * @param children ReactNode
 */
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
