import Link from "next/link";

const empresas = [
  { label: "Agência", href: "/agencia" },
  { label: "Marcelo Renda", href: "/marcelo-renda" },
  { label: "Elo Formaturas", href: "/elo-formaturas" },
  { label: "Família Renda", href: "/familia-renda" },
];

export default function Nav() {
  return (
    <header className="relative z-50 bg-[#0d0c10] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3 shrink-0">
          <span
            className="font-serif italic text-3xl text-[#efe7d7] leading-none"
            style={{ letterSpacing: "-0.01em" }}
          >
            R&amp;F
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.2em] text-[#8f897c] uppercase">
            Renda &amp; Filho
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-[#c9c2b3]">
          <Link href="/" className="hover:text-[#efe7d7] transition-colors">
            Home
          </Link>
          <div className="group relative">
            <button className="hover:text-[#efe7d7] transition-colors flex items-center gap-1">
              Empresas
              <span className="text-[#8f897c] text-xs">▾</span>
            </button>
            <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-50">
              <div className="bg-[#17161c] border border-white/10 rounded-lg shadow-xl py-2 w-52">
                {empresas.map((e) => (
                  <Link
                    key={e.href}
                    href={e.href}
                    className="block px-4 py-2.5 text-sm text-[#c9c2b3] hover:text-[#efe7d7] hover:bg-white/5 transition-colors"
                  >
                    {e.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <Link
          href="/agencia/contato"
          className="bg-[#c2410c] text-white font-medium text-sm px-5 py-2 rounded-full hover:bg-[#a8360a] transition-colors shrink-0"
        >
          Fale conosco
        </Link>
      </div>
    </header>
  );
}
