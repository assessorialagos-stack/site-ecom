import { Check } from "lucide-react";
import { cn } from "@/app/lib/cn";
import { MockFrame } from "./MockFrame";

// Cada tarefa tem dono: do lado da Lagos ou do seu (regra do método Lagos).
const tasks = [
  { t: "Revisar margem do produto carro-chefe", owner: "Lagos", done: true },
  { t: "Subir 4 criativos novos de vídeo", owner: "Lagos", done: true },
  { t: 'Aprovar kit "Compre 2, leve frete grátis"', owner: "Você", done: true },
  { t: "Teste A/B na página do produto", owner: "Lagos", done: false },
  { t: "Gravar 3 vídeos de bastidor", owner: "Você", done: false },
];

export function SprintMock() {
  return (
    <MockFrame title="Plano da semana">
      <div className="mb-3.5 flex items-center justify-between">
        <b className="text-base tracking-[-0.01em] text-foreground">Semana 14 · Sua loja</b>
        <small className="text-xs text-muted">5 de 8 concluídas</small>
      </div>
      {tasks.map((task) => (
        <div key={task.t} className="mt-2 flex items-center gap-3 rounded-[14px] border border-border px-3.5 py-3 text-sm text-foreground">
          <span
            className={cn(
              "grid h-5 w-5 shrink-0 place-items-center rounded-md border-[1.5px]",
              task.done ? "border-accent bg-accent text-white" : "border-border-strong",
            )}
          >
            {task.done && <Check size={13} strokeWidth={3} />}
          </span>
          <span className={cn("min-w-0 flex-1", task.done && "text-muted line-through decoration-border-strong")}>{task.t}</span>
          <span
            className={cn(
              "whitespace-nowrap rounded-full px-2.5 py-1 text-[11.5px] font-bold",
              task.owner === "Lagos" ? "bg-accent-soft text-accent-hover" : "bg-[#FFF6E5] text-[#A86A00]",
            )}
          >
            {task.owner}
          </span>
        </div>
      ))}
      <div className="mt-3.5 flex items-center gap-2.5 text-[12.5px] text-muted">
        <span>Progresso</span>
        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-section-2">
          <span className="block h-full w-[62%] rounded-full bg-accent" />
        </span>
        <span>62%</span>
      </div>
    </MockFrame>
  );
}
