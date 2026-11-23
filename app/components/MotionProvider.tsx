"use client";

import { MotionConfig } from "framer-motion";

/**
 * Respeita "reduzir animações" do sistema: com a opção ligada, o framer-motion
 * desliga deslizes e transformações e mantém só o fade. Sem trocar elementos
 * entre servidor e navegador (o que quebrava a hidratação).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
