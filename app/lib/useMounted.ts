"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * false no servidor e na hidratação, true logo depois no navegador.
 * Usado para só criar portais (modal, zoom) quando o <body> existe,
 * sem causar diferença de hidratação.
 */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
