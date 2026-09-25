import Link from "next/link";
const PHOTO_MARCELO = "https://lh3.googleusercontent.com/d/1upgNJcI6XXd1oE1SyPSYkfcNyGs6qFAB=w1200";
const PHOTO_FAMILIA = "https://lh3.googleusercontent.com/d/1lk2IIC9x301_lWpGuLn4hdMt7rAlwuut=w800";
const empresas = [
    { name: "Agencia", desc: "Producao audiovisual para eventos corporativos.", href: "/agencia", photo: null },
    { name: "Marcelo Renda", desc: "Fotografia autoral e corporativa.", href: "/marcelo-renda", photo: PHOTO_MARCELO },
    { name: "Elo Formaturas", desc: "Colacoes de grau e bailes de formatura.", href: "/elo-formaturas", photo: null },
    { name: "Familia Renda", desc: "Casamentos e retratos de familia.", href: "/familia-renda", photo: PHOTO_FAMILIA },
    ];
export default function Home() {
    return(
        <main className="bg-[#17161c]">
        <section className="max-w-5xl mx-auto px-4 md:px-6 pt-14 md:pt-20 pb-16">
        <div className="bg-[#efe7d7] rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-8 md:p-16 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
        <div>
        <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full bg-[#7c2d12]" />
        <p className="text-sm text-[#6d655a]">Uma camera, em 1986.</p>
    </div>
    <h1 className="font-serif text-[#24211c] text-4xl md:text-6xl mb-8" style={{ lineHeight: 1.05, letterSpacing: "-0.02em" }}>
Uma familia,
    <br />
    quatro oficios.
    </h1>
<p className="max-w-md text-[#4a453d]" style={{ lineHeight: 1.75 }}>
Jose e Sandra comecaram fotografando casamentos com o
equipamento que tinham em casa. Marcelo cresceu nesse universo e
se juntou naturalmente ao trabalho. Quatro decadas depois, essa
mesma base virou quatro negocios com identidade propria.
    </p>
</div>
<div className="relative">
    <img src={PHOTO_MARCELO} alt="" className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg rotate-1" />
    <div className="absolute -bottom-3 -left-3 w-full h-72 md:h-96 border border-[#24211c]/15 rounded-lg -z-10 -rotate-1" />
    </div>
</div>
</section>
<section className="max-w-5xl mx-auto px-4 md:px-6 pb-24">
    <p className="text-xs tracking-widest text-[#8f897c] mb-8 font-mono">INDICE</p>
<div className="border-t border-white/10">
    {empresas.map((e) => (
        <Link key={e.href} href={e.href} className="group flex items-center gap-5 py-6 border-b border-white/10">
        {e.photo ? (
            <img src={e.photo} alt="" className="w-14 h-14 rounded-full object-cover shrink-0 grayscale group-hover:grayscale-0 transition-[filter] duration-300" />
        ) : (
            <span className="w-14 h-14 rounded-full shrink-0 border border-white/15" />
            )}
<div className="flex-1 flex flex-col md:flex-row md:items-baseline justify-between gap-1">
        <span className="font-serif text-2xl md:text-4xl text-[#efe7d7] group-hover:text-[#c2410c] transition-colors duration-200" style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}>
        {e.name}
        </span>
        <span className="text-sm text-[#8f897c] md:text-right shrink-0 md:max-w-[220px]">
        {e.desc}
        </span>
        </div>
        </Link>
        ))}
</div>
        </section>
        </main>
        );
}
