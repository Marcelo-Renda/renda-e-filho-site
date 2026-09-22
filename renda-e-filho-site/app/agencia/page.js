import Link from "next/link";

const IMG = "https://marcelorendac59c726b60-kipxt.wordpress.com/wp-content/uploads/2026/09/dramatic-stage-lighting-rig-and-aluminum-truss-structure.png";

const cards = [
  { title: "Estrutura para eventos", desc: "Palco, box truss, sonorização, iluminação cênica e cenografia técnica.", href: "/agencia/estrutura-para-eventos" },
  { title: "Produção audiovisual", desc: "Captação, transmissão, eventos híbridos e produção cinematográfica institucional.", href: "/agencia/producao-audiovisual" },
  { title: "Imersões e experiências", desc: "Projeção mapeada, shows de laser e efeitos especiais.", href: "/agencia/imersoes-e-experiencias" },
  { title: "Equipe técnica", desc: "Reforço técnico sob demanda, do planejamento à operação no dia do evento.", href: "/agencia/equipe-tecnica" },
];

export default function AgenciaHub() {
  return (
    <main>
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6">
        <img src={IMG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#15193F]/65" />
        <div className="relative max-w-3xl">
          <p className="text-[#C9A24B] text-xs tracking-[3px] uppercase mb-4">[ R&amp;F Agência ]</p>
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4">
            Soluções audiovisuais completas para eventos corporativos
          </h1>
          <p className="text-[#D8DCEF] text-lg mb-8">
            Infraestrutura, produção audiovisual, imersões e a equipe técnica certa. Do
            planejamento à execução no dia do evento.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/agencia/contato" className="bg-[#C9A24B] text-[#1E2761] font-medium px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">
              Vamos marcar um café? →
            </Link>
            <a href="https://wa.me/5511960684469" target="_blank" rel="noreferrer" className="border border-white text-white px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">
              WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-lg text-center text-neutral-700 mb-14">
          Todo projeto de sucesso começa no mesmo lugar: na necessidade do cliente, não
          no catálogo. Praticamos escuta ativa antes de propor qualquer solução, e
          unimos base teórica e prática de mercado com uma postura proativa diante dos
          riscos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="border-t-2 border-[#C9A24B] pt-5 block hover:opacity-70 transition-opacity"
            >
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-neutral-600 mb-3">{c.desc}</p>
              <span className="text-sm font-medium">Saiba mais →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
