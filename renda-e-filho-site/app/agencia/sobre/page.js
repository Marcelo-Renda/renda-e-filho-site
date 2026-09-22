import AgenciaSubnav from "@/components/AgenciaSubnav";

function PersonCard({ label }) {
  return (
    <div className="min-h-[320px] rounded-md border border-[#C9A24B] bg-[#20244F] flex items-center justify-center">
      <p className="text-[#C9A24B] text-xs tracking-widest uppercase">{label}</p>
    </div>
  );
}

export default function Sobre() {
  return (
    <main className="bg-[#15193F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <AgenciaSubnav current="Sobre" />
        <p className="text-[#C9A24B] text-xs tracking-[3px] uppercase mb-4">[ R&amp;F Agência ]</p>
        <h1 className="text-5xl font-bold mb-14">Quem somos</h1>

        <div className="grid grid-cols-1 md:grid-cols-[38%_1fr] gap-10 items-center mb-16">
          <PersonCard label="Foto de José" />
          <div>
            <p className="text-[#8890C4] text-xs tracking-widest uppercase mb-2">Frente técnica</p>
            <h3 className="text-2xl font-bold mb-3">José</h3>
            <p className="text-[#D8DCEF] text-lg leading-relaxed">
              Publicitário de formação, dá forma a eventos desde 1990. São milhares de
              eventos corporativos e sociais em mais de 36 anos de carreira. Hoje,
              dirige a parte técnica da realização dos eventos, mobilizando dezenas de
              pessoas em nossos empreendimentos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_38%] gap-10 items-center">
          <div>
            <p className="text-[#8890C4] text-xs tracking-widest uppercase mb-2">Frente artística</p>
            <h3 className="text-2xl font-bold mb-3">Marcelo</h3>
            <p className="text-[#D8DCEF] text-lg leading-relaxed">
              Marketeiro de formação, entrou no universo de eventos em 2008. Como
              fotógrafo, já participou de exposições em galerias de 19 países. Hoje,
              dirige a parte artística das nossas produções, dando forma na integração
              entre criatividade e necessidades dos parceiros atendidos.
            </p>
          </div>
          <PersonCard label="Foto de Marcelo" />
        </div>
      </div>
    </main>
  );
}
