import { cn } from "@/app/lib/cn";

/**
 * Moldura de "janela" dos mockups ilustrativos (plano da semana, campanhas, recompra).
 * Os números dentro deles são exemplos, por isso o selo "Ilustrativo".
 */
export function MockFrame({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative rounded-[32px] bg-linear-to-br from-accent-soft to-section p-[18px]", className)}>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-float">
        <div className="flex items-center gap-2 border-b border-border bg-section px-[18px] py-3.5">
          <i className="h-2.5 w-2.5 rounded-full bg-[#E2E4EC]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#E2E4EC]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#E2E4EC]" />
          <span className="ml-2.5 truncate text-[12.5px] font-medium text-muted">{title}</span>
          <span className="ml-auto shrink-0 rounded-md border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-muted">
            Ilustrativo
          </span>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
