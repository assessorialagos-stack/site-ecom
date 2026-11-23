import { Check } from "lucide-react";
import { cn } from "@/app/lib/cn";
import { PixIcon } from "../ui/Waves";
import { MockFrame } from "./MockFrame";

const steps = [
  { dot: "pix", title: "Primeira compra paga", sub: "Cliente entra na base", ch: "Loja" },
  { dot: "D+3", title: "Como usar e cuidar", sub: "Conteúdo que evita troca e devolução", ch: "WhatsApp" },
  { dot: "D+20", title: "Prova social e complemento", sub: "Quem comprou X também levou Y", ch: "E-mail" },
  { dot: "D+35", title: "Oferta de recompra", sub: "Condição exclusiva para cliente", ch: "WhatsApp" },
  { dot: "check", title: "Segunda compra", sub: "Sem pagar de novo pela aquisição", ch: "Loja" },
];

export function RetentionMock() {
  return (
    <MockFrame title="Jornada de recompra">
      <div className="pl-2">
        {steps.map((s, i) => {
          const edge = s.dot === "pix" || s.dot === "check";
          return (
            <div key={s.title} className="relative grid grid-cols-[40px_1fr_auto] items-center gap-3.5 py-3">
              {i < steps.length - 1 && <span aria-hidden className="dash-line-y absolute -bottom-3 left-[19px] top-[52px] w-0.5" />}
              <span
                className={cn(
                  "grid h-10 w-10 place-items-center rounded-xl text-[13px] font-extrabold",
                  edge ? "bg-accent text-white" : "bg-accent-soft text-accent",
                )}
              >
                {s.dot === "pix" ? <PixIcon size={19} /> : s.dot === "check" ? <Check size={19} strokeWidth={3} /> : s.dot}
              </span>
              <div>
                <b className="block text-[14.5px] tracking-[-0.01em] text-foreground">{s.title}</b>
                <small className="text-[12.5px] text-muted">{s.sub}</small>
              </div>
              <span className="rounded-full border border-border bg-section px-2.5 py-1 text-[11.5px] font-bold text-body">{s.ch}</span>
            </div>
          );
        })}
      </div>
    </MockFrame>
  );
}
