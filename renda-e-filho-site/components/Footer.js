import Link from "next/link";

const empresas = [
  { label: "Agência", href: "/agencia" },
  { label: "Marcelo Renda", href: "/marcelo-renda" },
  { label: "Elo Formaturas", href: "/elo-formaturas" },
  { label: "Família Renda", href: "/familia-renda" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0c10] text-white mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_auto] gap-12">
        <div>
          <span
            className="font-serif italic text-4xl text-[#efe7d7] block mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            R&amp;F
          </span>
          <p className="text-sm text-[#8f897c] max-w-xs" style={{ lineHeight: 1.6 }}>
            Av. Paulista, 726, Cj 1707D
            <br />
            Bela Vista, São Paulo/SP
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xs tracking-widest text-[#8f897c] font-mono uppercase mb-4">
              Contato
            </h3>
            <p className="text-sm text-[#c9c2b3]" style={{ lineHeight: 1.9 }}>
              José
              <br />
              (11) 94380-0957
              <br />
              Marcelo
              <br />
              (11) 96068-4469
            </p>
          </div>
          <div>
            <h3 className="text-xs tracking-widest text-[#8f897c] font-mono uppercase mb-4">
              Empresas
            </h3>
            <ul className="text-sm text-[#c9c2b3] space-y-2">
              {empresas.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="hover:text-[#efe7d7] transition-colors">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-[#5a564f] text-xs pb-10">
        Renda &amp; Filho, {new Date().getFullYear()}
      </p>
    </footer>
  );
}
