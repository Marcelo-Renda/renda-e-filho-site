import Link from "next/link";
import CinematicHero from "@/components/CinematicHero";

const PHOTO_MARCELO =
  "https://lh3.googleusercontent.com/d/1upgNJcI6XXd1oE1SyPSYkfcNyGs6qFAB=w800";
const PHOTO_FAMILIA =
  "https://lh3.googleusercontent.com/d/1kcdawwS4aB01ftTcmQCr0yn1nIy1b9aB=w800";
const PHOTO_ELO =
  "https://lh3.googleusercontent.com/d/1TvArMOepXoMTn55gpDZ3xU-sTCj7619z=w800";

const empresas = [
  {
    name: "Agência",
    desc: "A ideia é sua. Fazer acontecer é com a gente.",
    href: "/agencia",
    photo: null,
  },
  {
    name: "Marcelo Renda",
    desc: "Fotografia se faz com a alma.",
    href: "/marcelo-renda",
    photo: PHOTO_MARCELO,
  },
  {
    name: "Elo Formaturas",
    desc: "Todo fim de ciclo merece ser celebrado.",
    href: "/elo-formaturas",
    photo: PHOTO_ELO,
  },
  {
    name: "Família Renda",
    desc: "Vocês vivem o casamento. Nós guardamos o que aconteceu.",
    href: "/familia-renda",
    photo: PHOTO_FAMILIA,
  },
];

export default function Home() {
  return (
    <main className="bg-[#17161c]">
      <CinematicHero />

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <p className="text-xs tracking-widest text-[#8f897c] mb-8 font-mono">
          ÍNDICE
        </p>
        <div className="border-t border-white/10">
          {empresas.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="group flex items-center gap-5 py-6 border-b border-white/10"
            >
              {e.photo ? (
                <img
                  src={e.photo}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover shrink-0 grayscale group-hover:grayscale-0 transition-[filter] duration-300"
                />
              ) : (
                <span className="w-14 h-14 rounded-full shrink-0 border border-white/15" />
              )}
              <div className="flex-1 flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <span
                  className="font-serif text-2xl md:text-4xl text-[#efe7d7] group-hover:text-[#c2410c] transition-colors duration-200"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
                >
                  {e.name}
                </span>
                <span className="text-sm text-[#8f897c] md:text-right shrink-0 md:max-w-[260px]">
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
