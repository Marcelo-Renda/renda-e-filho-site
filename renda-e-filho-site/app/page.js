import Link from "next/link";

const IMG = {
  home: "https://marcelorendac59c726b60-kipxt.wordpress.com/wp-content/uploads/2026/09/elegant-editorial-photograph-warm-golden-hour-tones-soft.png",
  agencia: "https://marcelorendac59c726b60-kipxt.wordpress.com/wp-content/uploads/2026/09/dramatic-stage-lighting-rig-and-aluminum-truss-structure.png",
  marcelo: "https://marcelorendac59c726b60-kipxt.wordpress.com/wp-content/uploads/2026/09/dramatic-black-and-white-portrait-photography-studio-scene.png",
  elo: "https://marcelorendac59c726b60-kipxt.wordpress.com/wp-content/uploads/2026/09/graduation-cap-and-diploma-scroll-resting-on-wooden.png",
  familia: "https://marcelorendac59c726b60-kipxt.wordpress.com/wp-content/uploads/2026/09/warm-golden-hour-countryside-landscape-with-soft-lavender.png",
};

function BrandCard({ href, img, title, subtitle, overlay, spanCols }) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-lg border border-white/10 min-h-[280px] ${spanCols}`}
    >
      <img
        src={img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0" style={{ backgroundColor: overlay, opacity: 0.6 }} />
      <div className="relative h-full flex flex-col justify-end p-8">
        <p className="text-white text-2xl md:text-3xl font-bold leading-tight">{title}</p>
        <p className="text-white/70 text-sm mb-4">{subtitle}</p>
        <span className="inline-flex items-center gap-1 bg-[#C9A24B] text-black text-sm font-medium px-4 py-2 rounded-full w-fit transition-transform duration-200 group-hover:-translate-y-1">
          Entrar →
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6">
        <img src={IMG.home} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#15193F]/55" />
        <div className="relative max-w-2xl">
          <p className="text-[#C9A24B] text-xs tracking-[3px] uppercase mb-4">Desde 1986</p>
          <h1 className="text-white text-6xl md:text-7xl font-bold leading-none mb-4">
            Renda &amp; Filho
          </h1>
          <p className="text-[#D8DCEF] text-lg tracking-wide">
            Quatro frentes, uma só história de família.
          </p>
        </div>
      </section>

      {/* Nossa história */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 items-center">
        <div>
          <p className="text-[#8890C4] text-xs tracking-widest uppercase mb-3">Nossa história</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            De uma câmera em casa a quatro empresas
          </h2>
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-neutral-700">
          <p>
            Em 1986, José e Sandra começaram fotografando casamentos com o equipamento
            que tinham em casa. Marcelo cresceu nesse universo e se juntou naturalmente
            ao trabalho. Quatro décadas depois, essa mesma base virou quatro negócios
            com identidade própria: fotografia autoral, fotografia social, formaturas e
            eventos corporativos.
          </p>
          <p>Continua sendo a mesma família por trás de cada uma. Escolha a frente que combina com o que você procura.</p>
        </div>
      </section>

      {/* Escolha sua frente */}
      <section className="bg-[#0E1030] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#8890C4] text-xs tracking-widest uppercase mb-6">Escolha sua frente</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <BrandCard
              href="/agencia"
              img={IMG.agencia}
              title="Agência"
              subtitle="Eventos corporativos"
              overlay="#1E2761"
              spanCols="md:col-span-3"
            />
            <BrandCard
              href="/marcelo-renda"
              img={IMG.marcelo}
              title="Marcelo Renda"
              subtitle="Fotografia"
              overlay="#0F0F0F"
              spanCols="md:col-span-2"
            />
            <BrandCard
              href="/elo-formaturas"
              img={IMG.elo}
              title="Elo Formaturas"
              subtitle="Formaturas e colações"
              overlay="#0E2A3D"
              spanCols="md:col-span-2"
            />
            <BrandCard
              href="/familia-renda"
              img={IMG.familia}
              title="Família Renda"
              subtitle="Fotografia social"
              overlay="#1A1410"
              spanCols="md:col-span-3"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
