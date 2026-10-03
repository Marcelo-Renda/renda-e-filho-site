import Link from "next/link";
import CinematicHero from "@/components/CinematicHero";

const empresas = [
  {
    name: "Agência",
    letter: "A",
    desc: "Estrutura, audiovisual e produção técnica para o seu evento corporativo.",
    href: "/agencia",
    photo: "/img/agencia-indice.jpg",
  },
  {
    name: "Família Renda",
    letter: "F",
    desc: "Fotografia de casamento, do making of à última dança.",
    href: "/familia-renda",
    photo: "https://lh3.googleusercontent.com/d/1kcdawwS4aB01ftTcmQCr0yn1nIy1b9aB=w900",
  },
  {
    name: "Elo Formaturas",
    letter: "E",
    desc: "Da Educação Infantil ao Ensino Superior, de ponta a ponta.",
    href: "/elo-formaturas",
    photo: "https://lh3.googleusercontent.com/d/1TvArMOepXoMTn55gpDZ3xU-sTCj7619z=w900",
  },
  {
    name: "Marcelo Renda",
    letter: "M",
    desc: "Retratos, marcas, eventos e projetos autorais.",
    href: "/marcelo-renda",
    photo: "https://lh3.googleusercontent.com/d/1ezgsozM0grYW3jGlV7L_IYKyo_n6iFh4=w900",
  },
];

export default function Home() {
  return (
    <main className="bg-[#17161c]">
      <CinematicHero />

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <p className="text-xs tracking-widest text-[#8f897c] mb-10 font-mono">
          ESCOLHA A SUA FRENTE
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {empresas.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-square"
            >
              <img
                src={e.photo}
                alt=""
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c10] via-[#0d0c10]/50 to-[#0d0c10]/10" />

              <span
                aria-hidden="true"
                className="absolute -right-4 -top-6 font-serif text-[180px] leading-none text-[#efe7d7]/10 select-none pointer-events-none"
              >
                {e.letter}
              </span>

              <div className="relative h-full flex flex-col justify-end p-6 md:p-7">
                <h2 className="font-serif text-3xl md:text-4xl text-[#efe7d7] mb-2">
                  {e.name}
                </h2>
                <p className="text-sm text-[#c9c2b3] max-w-[85%] mb-5" style={{ lineHeight: 1.5 }}>
                  {e.desc}
                </p>
                <span className="inline-flex items-center gap-2 w-fit text-xs tracking-widest uppercase text-[#efe7d7] border border-white/30 rounded-full px-4 py-2 group-hover:border-[#c2410c] group-hover:bg-[#c2410c] transition-colors duration-300">
                  Conhecer
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
