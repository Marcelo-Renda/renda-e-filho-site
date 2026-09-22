import AgenciaSubnav from "@/components/AgenciaSubnav";

const items = [
  { title: "Transmissão e mesa de corte", desc: "Live streaming online e offline." },
  { title: "Eventos híbridos", desc: "Presencial e online simultâneos." },
  { title: "Produção cinematográfica institucional", desc: "Mini-documentários, roteiro, entrevistas." },
  { title: "Podcasts on location", desc: "Estrutura, cenário e edição onde for preciso." },
];

export default function ProducaoAudiovisual() {
  return (
    <main className="bg-[#15193F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <AgenciaSubnav current="Produção audiovisual" />
        <h1 className="text-5xl font-bold mb-3">Da cobertura ao vivo à produção autoral</h1>
        <p className="text-[#D8DCEF] text-lg mb-10">O mesmo time técnico, em dois formatos de entrega.</p>

        <div className="bg-[#C9A24B] text-[#15193F] rounded-md p-9 mb-5 hover:-translate-y-1 transition-transform">
          <h3 className="text-2xl font-bold mb-2">Captação multicâmera</h3>
          <p>Tradicional e PTZ com automação. A base de tudo que fazemos em cobertura ao vivo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.title} className="border-t-2 border-[#3A3F72] pt-4">
              <h3 className="text-lg font-semibold mb-1">{it.title}</h3>
              <p className="text-[#B8BDE3]">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
