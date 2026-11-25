"use client";

import { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";
import { cn } from "@/app/lib/cn";
import { FOUNDER } from "@/app/lib/site";
import { Waves } from "./Waves";

/**
 * Moldura da foto do fundador.
 * Enquanto a foto de FOUNDER.photo (public/fundador.jpg) não existir, mostra o espaço vazio marcado.
 * Quando a foto for salva, ela aparece sozinha (aqui e em todo lugar que usa este componente).
 */
export function FounderPhoto({
  showTag = false,
  hint = "Foto recortada, fundo transparente, proporção 4:5 (ex.: 1200 × 1500 px)",
  className,
}: {
  showTag?: boolean;
  hint?: string;
  className?: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "missing">("loading");

  // A imagem pode terminar de carregar (ou falhar) antes do React hidratar;
  // nesse caso o onLoad/onError não dispara, então conferimos aqui.
  useEffect(() => {
    const check = () => {
      const img = imgRef.current;
      if (img?.complete) setStatus(img.naturalWidth > 0 ? "ok" : "missing");
    };
    check();
  }, []);

  const hasPhoto = status === "ok";

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden rounded-[32px] border border-white bg-[radial-gradient(120%_75%_at_50%_100%,#C9D7FF_0%,#E7EEFF_48%,#F6F8FF_100%)] shadow-float",
        className,
      )}
    >
      <Waves className="absolute -left-[10%] bottom-[-2px] w-[120%] text-accent/15" />

      {!hasPhoto && (
        <div className="absolute inset-3.5 flex flex-col items-center justify-center gap-2 rounded-[22px] border-2 border-dashed border-accent/40 p-6 text-center">
          <span className="mb-2 grid h-[84px] w-[84px] place-items-center rounded-full bg-white text-accent-hover shadow-card">
            <User size={40} strokeWidth={1.6} />
          </span>
          <strong className="font-heading text-xl tracking-tight text-foreground">Seu rosto aqui</strong>
          <span className="hidden max-w-[200px] text-[13.5px] leading-snug text-body sm:block">{hint}</span>
          <code className="mt-1 rounded-lg border border-accent-line bg-white px-2.5 py-1 text-[12.5px] text-accent-hover">
            public{FOUNDER.photo}
          </code>
        </div>
      )}

      {status !== "missing" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={FOUNDER.photo}
          alt={FOUNDER.name ? `${FOUNDER.name}, ${FOUNDER.role}` : FOUNDER.role}
          onLoad={() => setStatus("ok")}
          onError={() => setStatus("missing")}
          className={cn("absolute inset-0 h-full w-full object-cover object-[50%_35%]", !hasPhoto && "opacity-0")}
        />
      )}

      {hasPhoto && showTag && FOUNDER.name && (
        <div className="absolute bottom-[18px] left-1/2 z-[3] -translate-x-1/2 whitespace-nowrap rounded-[14px] border border-white bg-white/90 px-4 py-2.5 text-center shadow-card backdrop-blur-md">
          <b className="block text-[15px] tracking-tight text-foreground">{FOUNDER.name}</b>
          <span className="text-[12.5px] text-muted">{FOUNDER.role}</span>
        </div>
      )}
    </div>
  );
}
