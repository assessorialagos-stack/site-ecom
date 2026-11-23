"use client";

import { motion } from "framer-motion";
import { useIsDesktop } from "@/app/lib/useIsDesktop";
import { cn } from "@/app/lib/cn";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

/**
 * Revela o conteúdo ao entrar na viewport: fade + deslize + leve desfoque.
 *
 * Diferença em relação ao Reveal do site principal: aqui o elemento é SEMPRE um
 * motion.div. Antes, com "reduzir animações" ligado, o servidor mandava um
 * motion.div invisível e o navegador trocava por uma <div> comum; o React não
 * corrige essa diferença de atributos na hidratação e a seção ficava com
 * opacity: 0 para sempre. Agora quem respeita a preferência é o
 * <MotionConfig reducedMotion="user"> (MotionProvider): só o fade acontece.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  once = true,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  // No mobile o filter:blur anima a tela inteira a cada elemento que entra na
  // viewport e provoca flicker. Lá usamos só opacity + deslize; o desfoque fica no desktop.
  const heavy = useIsDesktop();

  return (
    <motion.div
      className={cn(className)}
      initial={heavy ? { opacity: 0, filter: "blur(8px)", ...offset[direction] } : { opacity: 0, ...offset[direction] }}
      whileInView={heavy ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" } : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
