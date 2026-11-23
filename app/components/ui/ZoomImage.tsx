"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/app/lib/cn";
import { useMounted } from "@/app/lib/useMounted";

/**
 * Miniatura clicável que abre a imagem em tela cheia (painéis dos cases e prints).
 * O overlay vai para o <body> via portal: dentro do <Reveal> um `filter` criaria
 * um novo contexto e o `position: fixed` ficaria preso no card.
 */
export function ZoomImage({
  src,
  alt,
  label,
  className,
  children,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" aria-label={label} onClick={() => setOpen(true)} className={cn("cursor-zoom-in", className)}>
        {children}
      </button>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[110] flex cursor-zoom-out items-center justify-center bg-dark/90 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                <motion.img
                  src={src}
                  alt={alt}
                  initial={{ scale: 0.96 }}
                  animate={{ scale: 1 }}
                  className="max-h-[calc(100vh-48px)] max-w-[min(1100px,100%)] rounded-[14px] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
