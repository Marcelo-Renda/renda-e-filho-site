import Link from "next/link";

function BrandCard({ href, gradient, title, subtitle, overlay, spanCols }) {
    return (
          <Link href={href} className={`group relative block overflow-hidden rounded-lg border border-white/10 min-h-[280px] ${spanCols}`} style={{ background: gradient }}>
      <div className="absolute inset-0" style={{ backgroundColor: overlay, opacity: 0.35 }} />
      <div className="relative h-full flex flex-col justify-end p-8">
          <p className="text-white text-2xl md:text-3xl font-bold leading-tight">{title}</p>
        <p className="text-white/70 text-sm mb-4">{subtitle}</p>
        <span className="inline-flex items-center gap-1 bg-[#C9A24B] text-black text-sm font-medium px-4 py-2 rounded-full w-fit">Entrar</span>
  </div>
  </Link>
  );
}

export default function Home() {
  return (
        <main>
          <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6" style={{ background: "linear-gradient(135deg, #2A1F1A 0%, #4A2E1E 45%, #15193F 100%)" }}>
        <div className="relative max-w-2xl">
            <p className="text-[#C9A24B] text-xs uppercase mb-4">Desde 1986</p>
          <h1 className="text-white text-6xl md:text-7xl font-bold leading-none mb-4">Renda & Filho</h1>
          <p className="text-[#D8DCEF] text-lg">Quatro frentes, uma so historia de familia.</p>
  </div>
  </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 items-center">
          <div>
            <p className="text-[#8890C4] text-xs uppercase mb-3">Nossa historia</p>
          <h2 className="text-3xl md:text-4xl font-bold">De uma camera em casa a quatro empresas</h2>
  </div>
        <div className="space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>Em 1986, Jose e Sandra comecaram fotografando casamentos com o equipamento que tinham em casa. Marcelo cresceu nesse universo e se juntou naturalmente ao trabalho. Quatro decadas depois, essa mesma base virou quatro negocios com identidade propria: fotografia autoral, fotografia social, formaturas e eventos corporativos.</p>
          <p>Continua sendo a mesma familia por tras de cada uma. Escolha a frente que combina com o que voce procura.</p>
  </div>
  </section>

      <section className="bg-[#0E1030] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#8890C4] text-xs uppercase mb-6">Escolha sua frente</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              <BrandCard href="/agencia" gradient="linear-gradient(135deg, #1E2761 0%, #3A3F9E 100%)" title="Agencia" subtitle="Eventos corporativos" overlay="#1E2761" spanCols="md:col-span-3" />
              <BrandCard href="/marcelo-renda" gradient="linear-gradient(135deg, #0F0F0F 0%, #3A3A3A 100%)" title="Marcelo Renda" subtitle="Fotografia" overlay="#0F0F0F" spanCols="md:col-span-2" />
              <BrandCard href="/elo-formaturas" gradient="linear-gradient(135deg, #0E2A3D 0%, #1F5A7A 100%)" title="Elo Formaturas" subtitle="Formaturas e colacoes" overlay="#0E2A3D" spanCols="md:col-span-2" />
              <BrandCard href="/familia-renda" gradient="linear-gradient(135deg, #1A1410 0%, #6B4A2E 100%)" title="Familia Renda" subtitle="Fotografia social" overlay="#1A1410" spanCols="md:col-span-3" />
  </div>
  </div>
  </section>
  </main>
    );
  }
  
