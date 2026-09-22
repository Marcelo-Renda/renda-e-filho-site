importLinkfrom"next/link";exportdefaultfunctionEloFormaturas()<main><sectionclassName="relativemin-h-[85vh]flexitems-centerjustify-centertext-centerpx-6"style={{background:"linear-gradient(135deg,#0716200%,#0E2A3D55%,#1F5A7A100%)"}}><divclassName="relativemax-w-2xl"><pclassName="text-[#C9A24B]text-xstracking-[3px]uppercasemb-4">[EloFormaturas]</p><h1className="text-whitetext-5xlfont-boldmb-4">Aformaturaquevalorizaescola,reforcandoelos</h1><pclassName="text-[#D8E4EA]text-lgmb-8">Quase40anosdeexperienciadafamiliaemeventos,cercade100formaturasrealizadasporano.</p><Linkhref="/elo-formaturas/contato"className="inline-blockbg-[#C9A24B]text-[#0E2A3D]px-6py-3rounded-fullhover:-translate-y-1transition-transform">Vamosreforcaresteelo?-&gt;</Link></div></section><sectionclassName="max-w-4xlmx-autopx-6py-16gridgrid-cols-2md:grid-cols-4gap-6text-center"><Linkhref="/elo-formaturas/metodo-elo"className="border-t-2border-[#C9A24B]pt-4hover:opacity-70transition-opacity">MetodoElo</Link><Linkhref="/elo-formaturas/servicos"className="border-t-2border-[#C9A24B]pt-4hover:opacity-70transition-opacity">Servicos</Link><Linkhref="/elo-formaturas/portfolio"className="border-t-2border-[#C9A24B]pt-4hover:opacity-70transition-opacity">Portfolio</Link><Linkhref="/elo-formaturas/contato"className="border-t-2border-[#C9A24B]pt-4hover:opacity-70transition-opacity">Contato</Link></section></main>);import Link from "next/link";

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
