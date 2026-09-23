import Link from "next/link";
export default function EloFormaturas() {

 (
   <main>
   <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6" style={{ background: "linear-gradient(135deg, #071620 0%, #0E2A3D 55%, #1F5A7A 100%)" }}>
<div className="relative max-w-2xl">
  <p className="text-[#C9A24B] text-xs tracking-[3px] uppercase mb-4">[ Elo Formaturas ]</p>
<h1 className="text-white text-5xl font-bold mb-4">A formatura que valoriza a escola, reforcando elos</h1>
<p className="text-[#D8E4EA] text-lg mb-8">Quase 40 anos de experiencia da familia em eventos, cerca de 100 formaturas realizadas por ano.</p>
<Link href="/elo-formaturas/contato" className="inline-block bg-[#C9A24B] text-[#0E2A3D] px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">Vamos reforcar este elo? -&gt;</Link>
  </div>
  </section>
  <section className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
  <Link href="/elo-formaturas/metodo-elo" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Metodo Elo</Link>
<Link href="/elo-formaturas/servicos" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Servicos</Link>
<Link href="/elo-formaturas/portfolio" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Portfolio</Link>
<Link href="/elo-formaturas/contato" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Contato</Link>
</section>
</main>
);
}
