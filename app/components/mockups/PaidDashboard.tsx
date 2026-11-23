// Painel ilustrativo da seção escura: receita paga x investimento e
// a diferença entre pedido gerado e pedido pago.

const kpis = [
  { label: "Investimento", value: "R$ 18,4 mil" },
  { label: "Receita paga", value: "R$ 126 mil", delta: "+22% no mês" },
  { label: "ROAS real", value: "6,8x" },
  { label: "Custo por venda", value: "R$ 41" },
];

const revenue = "M0 104 L36 96 L72 99 L109 86 L145 78 L181 82 L218 68 L254 58 L290 61 L327 45 L363 34 L400 22";
const spend = "M0 126 L36 124 L72 124 L109 122 L145 120 L181 121 L218 119 L254 117 L290 117 L327 115 L363 113 L400 111";

export function PaidDashboard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-dark-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b border-white/[0.09] bg-dark-3 px-[18px] py-3.5">
        <i className="h-2.5 w-2.5 rounded-full bg-[#2A2E3D]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#2A2E3D]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#2A2E3D]" />
        <span className="ml-2.5 text-[12.5px] font-medium text-dark-muted">Painel Lagos · Sua loja</span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#7EE2A8]">
          <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-[#2FD07A] shadow-[0_0_0_4px_rgba(47,208,122,0.15)]" />
          Ao vivo
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 p-[18px] sm:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-[14px] border border-white/[0.09] bg-dark-3 p-3">
            <small className="block text-[11.5px] text-dark-muted">{k.label}</small>
            <b className="mt-0.5 block whitespace-nowrap text-[clamp(15px,1.7vw,20px)] tracking-[-0.02em] text-white tabular-nums">{k.value}</b>
            {k.delta && <em className="text-[11px] font-semibold not-italic text-[#7EE2A8]">{k.delta}</em>}
          </div>
        ))}
      </div>

      <div className="px-[18px] pb-2">
        <svg viewBox="0 0 400 140" aria-hidden className="block h-auto w-full">
          <defs>
            <linearGradient id="dash-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3B6BFF" stopOpacity=".45" />
              <stop offset="1" stopColor="#3B6BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="rgba(255,255,255,.06)">
            <line x1="0" y1="20" x2="400" y2="20" />
            <line x1="0" y1="60" x2="400" y2="60" />
            <line x1="0" y1="100" x2="400" y2="100" />
            <line x1="0" y1="138" x2="400" y2="138" />
          </g>
          <path d={`${revenue} L400 140 L0 140Z`} fill="url(#dash-area)" />
          <path d={revenue} fill="none" stroke="#5B84FF" strokeWidth="2.5" strokeLinejoin="round" />
          <path d={spend} fill="none" stroke="#8B90A6" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="400" cy="22" r="4.5" fill="#fff" stroke="#3B6BFF" strokeWidth="3" />
        </svg>
      </div>
      <div className="flex gap-4 px-[18px] pb-3.5 text-xs text-dark-muted">
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block h-[3px] w-2.5 rounded-sm bg-[#5B84FF]" /> Receita paga
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block h-[3px] w-2.5 rounded-sm bg-[#8B90A6]" /> Investimento
        </span>
      </div>

      <div className="mx-[18px] mb-[34px] rounded-[14px] border border-white/[0.09] bg-dark-3 p-3.5">
        <div className="mb-2.5 flex justify-between text-[12.5px]">
          <span>Pedidos do mês</span>
          <b className="text-white">412 gerados · 356 pagos</b>
        </div>
        <div className="flex h-2.5 overflow-hidden rounded-full bg-[#232738]">
          <i className="block h-full w-[86.4%] bg-accent" />
          <i className="block h-full w-[13.6%] bg-danger" />
        </div>
        <div className="mt-2.5 flex flex-wrap justify-between gap-2.5 text-xs text-dark-muted">
          <span className="inline-flex items-center gap-1.5">
            <i className="h-2 w-2 rounded-full bg-accent" /> Pagos: entram no ROAS
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="h-2 w-2 rounded-full bg-danger" /> Pix expirado e boleto vencido: fora da conta
          </span>
        </div>
      </div>
      <span className="absolute bottom-2.5 right-3.5 text-[11px] text-[#5E6378]">Ilustrativo</span>
    </div>
  );
}
