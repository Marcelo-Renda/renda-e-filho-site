import Link from "next/link";

const IMG = "https://marcelorendac59c726b60-kipxt.wordpress.com/wp-content/uploads/2026/09/graduation-cap-and-diploma-scroll-resting-on-wooden.png";

export default function EloFormaturas() {
  return (
    <main>
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6">
        <img src={IMG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0E2A3D]/60" />
        <div className="relative max-w-2xl">
          <p className="text-[#C9A24B] text-xs tracking-[3px] uppercase mb-4">[ Elo Formaturas ]</p>
          <h1 className="text-white text-5xl font-bold mb-4">
            A formatura que valoriza a escola, reforçando elos
          </h1>
          <p className="text-[#D8E4EA] text-lg mb-8">
            Quase 40 anos de experiência da família em eventos, cerca de 100 formaturas
            realizadas por ano.
          </p>
          <Link href="/elo-formaturas/contato" className="inline-block bg-[#C9A24B] text-[#0E2A3D] px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">
            Vamos reforçar este elo? →
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: "Método Elo", href: "/elo-formaturas/metodo-elo" },
          { label: "Serviços", href: "/elo-formaturas/servicos" },
          { label: "Portfólio", href: "/elo-formaturas/portfolio" },
          { label: "Contato", href: "/elo-formaturas/contato" },
        ].map((l) => (
          <Link key={l.href} href={l.href} className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">
            {l.label}
          </Link>
        ))}
      </section>
    </main>
  );
}
