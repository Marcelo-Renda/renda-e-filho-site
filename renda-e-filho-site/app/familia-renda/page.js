import Link from "next/link";

const IMG = "https://marcelorendac59c726b60-kipxt.wordpress.com/wp-content/uploads/2026/09/warm-golden-hour-countryside-landscape-with-soft-lavender.png";

export default function FamiliaRenda() {
  return (
    <main>
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6">
        <img src={IMG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1A1410]/45" />
        <div className="relative max-w-2xl">
          <p className="text-[#C9A24B] text-xs tracking-[3px] uppercase mb-4">[ Família Renda ]</p>
          <h1 className="text-white text-5xl font-bold mb-4">
            Fotografia de família, há mais de 35 anos
          </h1>
          <p className="text-[#EEE6DD] text-lg mb-8">
            Casamentos, pré-weddings, debutantes, aniversários e bodas, registrados com carinho.
          </p>
          <Link href="/familia-renda/contato" className="inline-block bg-[#C9A24B] text-[#1A1410] px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">
            Agende sua sessão →
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: "Sobre", href: "/familia-renda/sobre" },
          { label: "Portfólio", href: "/familia-renda/portfolio" },
          { label: "Manual do ensaio", href: "/familia-renda/manual-do-ensaio" },
          { label: "Contato", href: "/familia-renda/contato" },
        ].map((l) => (
          <Link key={l.href} href={l.href} className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">
            {l.label}
          </Link>
        ))}
      </section>
    </main>
  );
}
