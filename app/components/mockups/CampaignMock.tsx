import { cn } from "@/app/lib/cn";
import { MockFrame } from "./MockFrame";

const rows = [
  { name: "Catálogo · Advantage+", channel: "Meta Ads", roas: "7,9x", status: "Escalar" },
  { name: "Shopping · Carro-chefe", channel: "Google Ads", roas: "6,2x", status: "Escalar" },
  { name: "Remarketing 7 dias", channel: "Meta Ads", roas: "11,4x", status: "Manter" },
  { name: "Prospecção vídeo", channel: "TikTok Ads", roas: "1,6x", status: "Pausar" },
] as const;

const statusCls = {
  Escalar: "bg-success-soft text-success",
  Manter: "bg-accent-soft text-accent-hover",
  Pausar: "bg-danger-soft text-[#C93035]",
};

export function CampaignMock() {
  return (
    <MockFrame title="Campanhas · últimos 7 dias">
      <table className="w-full border-collapse text-[13.5px]">
        <thead>
          <tr className="text-[11.5px] uppercase tracking-[0.04em] text-muted">
            <th className="px-2 pb-2.5 text-left font-semibold">Campanha</th>
            <th className="px-2 pb-2.5 text-right font-semibold">ROAS</th>
            <th className="px-2 pb-2.5 text-right font-semibold">Decisão</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-border text-foreground">
              <td className="px-2 py-3">
                {r.name}
                <small className="block text-[11.5px] text-muted">{r.channel}</small>
              </td>
              <td className="px-2 py-3 text-right font-bold tabular-nums">{r.roas}</td>
              <td className="px-2 py-3 text-right">
                <span className={cn("whitespace-nowrap rounded-full px-2.5 py-1 text-[11.5px] font-bold", statusCls[r.status])}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3.5 flex items-center justify-between gap-3 rounded-[14px] bg-ink px-3.5 py-3 text-[13px] text-[#C9CCDA]">
        <span>ROAS mínimo para ter lucro com a sua margem</span>
        <b className="text-[15px] text-white">3,2x</b>
      </div>
    </MockFrame>
  );
}
