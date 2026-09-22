import Link from "next/link";

const IMG = "https://marcelorendac59c726b60-kipxt.wordpress.com/wp-content/uploads/2026/09/dramatic-black-and-white-portrait-photography-studio-scene.png";

export default function MarceloRenda() {
  return (
    <main>
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6 bg-black">
        <img src={IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-65" />
        <div className="relative max-w-2xl">
          <p className="text-[#C9A24B] text-xs tracking-[3px] uppercase mb-4">[ Marcelo Renda ]</p>
          <h1 className="text-white text-6xl italic font-bold mb-4">Fotografia se faz com a alma</h1>
          <p className="text-neutral-300 text-lg mb-8">
            Fotografia corporativa e autoral, feita com cuidado técnico e olhar artístico.
          </p>
          <Link href="/marcelo-renda/contato" className="inline-block bg-[#C9A24B] text-black px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">
            Vamos conversar →
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: "Bio", href: "/marcelo-renda/bio" },
          { label: "Serviços", href: "/marcelo-renda/servicos" },
          { label: "Portfólio", href: "/marcelo-renda/portfolio" },
          { label: "Contato", href: "/marcelo-renda/contato" },
        ].map((l) => (
          <Link key={l.href} href={l.href} className="border-t-2 border-[#C9A24B] pt-4 hover:opacity-70 transition-opacity">
            {l.label}
          </Link>
        ))}
      </section>
    </main>
  );
}
