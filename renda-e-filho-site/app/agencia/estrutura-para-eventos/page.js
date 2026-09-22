import AgenciaSubnav from "@/components/AgenciaSubnav";

const items = [
  { title: "Palco e box truss", desc: "Treliças de alumínio, montagem modular." },
  { title: "Sonorização", desc: "Sistema de som, microfones, mesa digital." },
  { title: "Iluminação cênica", desc: "Moving heads, PAR LED, controle DMX." },
  { title: "Cenografia técnica", desc: "Backdrops e ambientação personalizada." },
];

export default function Estrutura() {
  return (
    <main className="bg-[#15193F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <AgenciaSubnav current="Estrutura" />
        <h1 className="text-5xl font-bold mb-3">A base física do seu evento</h1>
        <p className="text-[#D8DCEF] text-lg mb-14">Dimensionada pro tamanho e formato de cada projeto.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-[#1E2350] border-l-4 border-[#C9A24B] rounded-md p-8 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-[#B8BDE3]">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
