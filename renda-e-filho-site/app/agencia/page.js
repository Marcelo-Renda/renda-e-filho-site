import Link from "next/link";
const cards = [
  { title: "Estrutura para eventos", desc: "Palco, box truss, sonorizacao, iluminacao cenica e cenografia tecnica.", href: "/agencia/estrutura-para-eventos" },
  { title: "Producao audiovisual", desc: "Captacao, transmissao, eventos hibridos e producao cinematografica institucional.", href: "/agencia/producao-audiovisual" },
  { title: "Imersoes e experiencias", desc: "Projecao mapeada, shows de laser e efeitos especiais.", href: "/agencia/imersoes-e-experiencias" },
  { title: "Equipe tecnica", desc: "Reforco tecnico sob demanda, do planejamento a operacao no dia do evento.", href: "/agencia/equipe-tecnica" },
  ];
export default function AgenciaHub() {
  return(
    <main>
    <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6" style={{ background: "linear-gradient(135deg, #0B0D22 0%, #1E2761 55%, #3A3F9E 100%)" }}>
<div className="relative max-w-3xl">
  <p className="text-[#C9A24B] text-xs tracking-[3px] uppercase mb-4">[ R&amp;F Agencia ]</p>
<h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4">Solucoes audiovisuais completas para eventos corporativos</h1>
<p className="text-[#D8DCEF] text-lg mb-8">Infraestrutura, producao audiovisual, imersoes e a equipe tecnica certa. Do planejamento a execucao no dia do evento.</p>
  <div className="flex gap-3 justify-center">
  <Link href="/agencia/contato" className="bg-[#C9A24B] text-[#1E2761] font-medium px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">Vamos marcar um cafe? -&gt;</Link>
  <a href="https://wa.me/5511960684469" target="_blank" rel="noreferrer" className="border border-white text-white px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">WhatsApp -&gt;</a>
</div>
</div>
</section>
<section className="max-w-5xl mx-auto px-6 py-20">
  <p className="text-lg text-center text-neutral-700 mb-14">Todo projeto de sucesso comeca no mesmo lugar: na necessidade do cliente, nao no catalogo. Praticamos escuta ativa antes de propor qualquer solucao, e unimos base teorica e pratica de mercado com uma postura proativa diante dos riscos.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {cards.map((c) => (
    <Link key={c.href} href={c.href} className="border-t-2 border-[#C9A24B] pt-5 block hover:opacity-70 transition-opacity">
    <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
             <p className="text-neutral-600 mb-3">{c.desc}</p>
             <span className="text-sm font-medium">Saiba mais -&gt;</span>
</Link>
))}
</div>
</section>
</main>
    );
}
