import Link from "next/link";

const empresas = [
  { label: "Agência", href: "/agencia" },
  { label: "Marcelo Renda", href: "/marcelo-renda" },
  { label: "Elo Formaturas", href: "/elo-formaturas" },
  { label: "Família Renda", href: "/familia-renda" },
];

export default function Nav() {
  return (
    <header className="border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Renda &amp; Filho
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-[#C9A24B] transition-colors">
            Home
          </Link>
          <div className="group relative">
            <button className="hover:text-[#C9A24B] transition-colors">Empresas</button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
              <div className="bg-white border border-neutral-200 rounded-md shadow-lg py-2 w-52">
                {empresas.map((e) => (
                  <Link
                    key={e.href}
                    href={e.href}
                    className="block px-4 py-2 text-sm hover:bg-neutral-50"
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
          className="bg-[#C9A24B] text-[#15193F] font-medium text-sm px-4 py-2 rounded-full hover:brightness-95 transition"
        >
          Fale conosco
        </Link>
      </div>
    </header>
  );
}
