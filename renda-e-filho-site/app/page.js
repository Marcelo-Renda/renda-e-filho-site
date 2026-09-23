import Link from "next/link";
const empresas = [
    { name: "Agencia", desc: "Producao audiovisual para eventos corporativos.", href: "/agencia" },
    { name: "Marcelo Renda", desc: "Fotografia autoral e corporativa.", href: "/marcelo-renda" },
    { name: "Elo Formaturas", desc: "Colacoes de grau e bailes de formatura.", href: "/elo-formaturas" },
    { name: "Familia Renda", desc: "Casamentos e retratos de familia.", href: "/familia-renda" },
    ];
export default function Home() {
    return(
        <main className="bg-[#EDEAE2] text-[#1A1815]">
        <section className="max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="flex items-center gap-3 mb-10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#B5442E]" />
        <p className="text-sm text-[#8A8478]">Uma camera, em 1986.</p>
    </div>
    <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-10 max-w-3xl">
        Uma familia,
        <br />
        quatro oficios.
        </h1>
    <p className="max-w-xl text-lg leading-relaxed text-[#4A453D]">
        Jose e Sandra comecaram fotografando casamentos com o equipamento
    que tinham em casa. Marcelo cresceu nesse universo e se juntou
    naturalmente ao trabalho. Quatro decadas depois, essa mesma base
    virou quatro negocios com identidade propria.
        </p>
    </section>
    <section className="border-t border-[#D8D2C4]">
        {empresas.map((e) => (
            <Link key={e.href} href={e.href} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-6 max-w-5xl mx-auto px-6 py-8 border-b border-[#D8D2C4]">
    <span className="font-serif text-3xl md:text-5xl group-hover:text-[#B5442E] transition-colors">
    {e.name}
</span>
<span className="text-sm md:text-base text-[#6B6459] md:text-right shrink-0 md:max-w-[240px]">
    {e.desc}
</span>
</Link>
))}
</section>
</main>
);
}
