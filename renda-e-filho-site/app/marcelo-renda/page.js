import Link from "next/link";
export default function MarceloRenda() {
 return(
  <main>
  <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6" style={{ background: "linear-gradient(135deg, #000000 0%, #2A2A2A 60%, #4A4A4A 100%)" }}>
<div className="relative max-w-2xl">
 <p className="text-[#C9A24B] text-xs tracking-[3px] uppercase mb-4">[ Marcelo Renda ]</p>
<h1 className="text-white text-6xl italic font-bold mb-4">Fotografia se faz com a alma</h1>
<p className="text-neutral-300 text-lg mb-8">Fotografia corporativa e autoral, feita com cuidado tecnico e olhar artistico.</p>
<Link href="/marcelo-renda/contato" className="inline-block bg-[#C9A24B] text-black px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">Vamos conversar -&gt;</Link>
</div>
</section>
<section className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
 <Link href="/marcelo-renda/bio" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Bio</Link>
<Link href="/marcelo-renda/servicos" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Servicos</Link>
<Link href="/marcelo-renda/portfolio" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Portfolio</Link>
<Link href="/marcelo-renda/contato" className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">Contato</Link>
</section>
</main>
);
}
