import AgenciaSubnav from "@/components/AgenciaSubnav";

export default function Imersoes() {
  return (
    <main className="bg-[#15193F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <AgenciaSubnav current="Imersões" />
        <h1 className="text-5xl font-bold mb-14">Tecnologia que transforma o espaço</h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-5">
          <div className="md:col-span-3 bg-[#1E2350] rounded-md p-9 hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Projeção mapeada imersiva</h3>
            <p className="text-[#D8DCEF]">Múltiplos pontos, conteúdo dedicado a cada superfície.</p>
          </div>
          <div className="md:col-span-2 bg-[#C9A24B] text-[#15193F] rounded-md p-9 hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-bold mb-2">Rigging sob medida</h3>
            <p>Estrutura calculada pra cada ponto de imersão.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="md:col-span-2 bg-[#1E2350] rounded-md p-8 hover:-translate-y-1 transition-transform">
            <h3 className="text-lg font-semibold mb-2">Shows de laser</h3>
            <p className="text-[#B8BDE3]">Efeitos especiais que transformam o espaço.</p>
          </div>
          <div className="md:col-span-3 bg-[#1E2350] rounded-md p-8 hover:-translate-y-1 transition-transform">
            <h3 className="text-lg font-semibold mb-2">Ambientação escura (blackout)</h3>
            <p className="text-[#B8BDE3]">Cobertura calculada sob medida pra cada espaço.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
