import Link from "next/link";
export default function FamiliaRenda() {
 return(
  <main>
  <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6" style={{ background: "linear-gradient(135deg, #1A1410 0%, #4A2E1E 55%, #6B4A2E 100%)" }}>
<div className="relative max-w-2xl">
 <p className="text-[#C9A24B] text-xs tracking-[3px] uppercase mb-4">[ Familia Renda ]</p>
<h1 className="text-white text-5xl font-bold mb-4">Fotografia de familia, ha mais de 35 anos</h1>
<p className="text-[#EEE6DD] text-lg mb-8">Casamentos, pre-weddings, debutantes, aniversarios e bodas, registrados com carinho.</p>
<Link href="/familia-renda/contato" className="inline-block bg-[#C9A24B] text-[#1A1410] px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">Agende sua sessao -&gt;</Link>
</div>
</section>
<section className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
 <Link href="/familia-renda/sobre" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Sobre</Link>
<Link href="/familia-renda/portfolio" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Portfolio</Link>
<Link href="/familia-renda/manual-do-ensaio" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Manual do ensaio</Link>
<Link href="/familia-renda/contato" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Contato</Link>
</section>
</main>
);
}
