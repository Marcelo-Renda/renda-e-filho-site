import Link from "next/link";

const PHOTO_HERO =
  "https://lh3.googleusercontent.com/d/1upgNJcI6XXd1oE1SyPSYkfcNyGs6qFAB=w1600";
const PHOTO_RETRATO =
  "https://lh3.googleusercontent.com/d/1ezgsozM0grYW3jGlV7L_IYKyo_n6iFh4=w900";
const PHOTO_MARCA =
  "https://lh3.googleusercontent.com/d/1is66iS9i3kNfo2gz6Q4KUW2dzojsGRvA=w900";
const PHOTO_AUTORAL =
  "https://lh3.googleusercontent.com/d/1Drw9IAufDOrdsZ23yIaOWL4OdbT3_7-l=w900";

const WA =
  "https://wa.me/5511960684469?text=Ol%C3%A1%2C%20Marcelo!%20Encontrei%20seu%20trabalho%20pelo%20site%20e%20queria%20conversar%20sobre%20um%20projeto.";

const navLinks = [
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Reconhecimento", href: "#reconhecimento" },
  { label: "Perguntas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const trabalhos = [
  { photo: PHOTO_RETRATO, t: "Retrato", d: "Estúdio, luz controlada, pessoa à vontade." },
  { photo: PHOTO_MARCA, t: "Marca", d: "O detalhe que vende antes da palavra." },
  { photo: PHOTO_AUTORAL, t: "Autoral", d: "Projetos pessoais, sem cliente, sem pressa." },
];

const faq = [
  {
    q: "Preciso posar pra sessão ficar boa?",
    a: "Não. O trabalho é documental, sem pose forçada. Prefiro registrar o que está acontecendo a construir uma cena.",
  },
  {
    q: "Você atende fora de São Paulo?",
    a: "Sim. A base é São Paulo, mas atendo em todo o Brasil, conforme o projeto.",
  },
  {
    q: "Faz fotografia de marca e evento corporativo, ou só retrato?",
    a: "Os dois. Retrato, marca, evento e projeto autoral saem do mesmo olhar, só muda o contexto.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Me chama no WhatsApp e conta o que você tem em mente. Cada projeto tem um escopo diferente, então prefiro entender antes de falar número.",
  },
];

export default function MarceloRenda() {
  return (
    <main className="bg-black text-white">
      <section
        id="topo"
        className="relative min-h-[92vh] flex items-end px-6 md:px-10 pb-14 md:pb-20"
      >
        <img
          src={PHOTO_HERO}
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        <div className="relative max-w-xl">
          <p className="text-xs tracking-widest text-white/60 font-mono mb-5">
            FOTOGRAFIA
          </p>
          <h1
            className="font-serif italic text-4xl md:text-6xl mb-6"
            style={{ lineHeight: 1.1, letterSpacing: "-0.01em" }}
          >
            Fotografia se faz com a alma.
          </h1>
          <p className="text-white/80 max-w-md mb-8" style={{ lineHeight: 1.6 }}>
            Documental, sem pose. Retratos, marcas, eventos e projetos
            autorais, registrados em São Paulo e por todo o Brasil.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-black font-medium px-7 py-3 rounded-full hover:bg-white/85 transition-colors"
          >
            Vamos conversar sobre o seu projeto
          </a>
        </div>
      </section>

      <nav
        aria-label="Seções da página"
        className="sticky top-0 z-10 bg-black/95 backdrop-blur border-b border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-6 overflow-x-auto text-sm py-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="ml-auto shrink-0 bg-white text-black font-medium px-4 py-1.5 rounded-full hover:bg-white/85 transition-colors whitespace-nowrap"
          >
            Vamos conversar
          </a>
        </div>
      </nav>

      <section id="trabalhos" className="border-b border-white/10 scroll-mt-14">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-widest text-white/50 font-mono mb-6">
            TRABALHOS
          </p>
          <h2
            className="font-serif text-3xl md:text-5xl mb-8 max-w-2xl"
            style={{ lineHeight: 1.12 }}
          >
            De um retrato de estúdio a um prato saindo da cozinha
          </h2>
          <p
            className="text-white/70 max-w-xl mb-14"
            style={{ lineHeight: 1.7 }}
          >
            Não existe um único jeito de fotografar. Existe o jeito certo pra
            cada história: pessoas, marcas, eventos e um projeto autoral que
            já cruzou fronteiras.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {trabalhos.map((t) => (
              <figure key={t.t}>
                <img
                  src={t.photo}
                  alt=""
                  className="w-full aspect-[3/4] object-cover rounded-lg mb-3"
                />
                <figcaption>
                  <span className="block font-serif text-xl mb-1">{t.t}</span>
                  <span className="block text-sm text-white/60">{t.d}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="border-b border-white/10 scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-widest text-white/50 font-mono mb-6">
            QUEM FOTOGRAFA
          </p>
          <h2
            className="font-serif text-2xl md:text-3xl mb-8"
            style={{ lineHeight: 1.3 }}
          >
            Nasceu e cresceu entre câmeras
          </h2>
          <div className="space-y-5 text-white/75" style={{ lineHeight: 1.8 }}>
            <p>
              Marcelo Renda é fotógrafo paulistano, filho de pai e mãe
              fotógrafos. Nasceu e cresceu entre câmeras, e começou a
              fotografar ainda criança, em câmeras analógicas. Aos 14 anos,
              teve suas primeiras experiências clicando eventos, e não parou
              mais.
            </p>
            <p>
              Estudou fotografia e arte no tradicional Liceu de Artes e
              Ofícios de São Paulo, um dos passos mais importantes para unir
              duas coisas: o conhecimento de gerações de fotógrafos na
              família e a erudição técnica na composição de imagem.
            </p>
            <p>
              Ao longo do caminho, chegou a passar uma temporada aprendendo
              com o fotógrafo irlandês Jason Lowe, um dos nomes mais
              respeitados do mundo na fotografia de gastronomia. Foi um dos
              momentos que ajudaram a ampliar o alcance do olhar: da urgência
              e da alma dos eventos sociais para o detalhismo e a paciência
              da gastronomia, sem nunca perder a técnica que vem da
              publicidade.
            </p>
            <p className="text-white font-medium">
              O resultado é um jeito de fotografar que une essas vertentes em
              vez de escolher uma só.
            </p>
          </div>
        </div>
      </section>

      <section id="reconhecimento" className="border-b border-white/10 scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-widest text-white/50 font-mono mb-6">
            RECONHECIMENTO
          </p>
          <h2
            className="font-serif text-2xl md:text-3xl mb-8"
            style={{ lineHeight: 1.3 }}
          >
            Fotos que já saíram de São Paulo
          </h2>
          <div className="space-y-5 text-white/75 mb-10" style={{ lineHeight: 1.8 }}>
            <p>
              Ao longo dos anos, o trabalho autoral de Marcelo já estampou
              capas de estudos da ONU e da CEPAL sobre a pandemia, foi citado
              em livro de marketing publicado na Indonésia e discutido em
              artigo acadêmico da Universidade de Hiroshima. Também já
              circulou em reportagens do Estadão, da Glamurama e de outros
              veículos, e passou por galerias de fotografia em diferentes
              continentes.
            </p>
            <p>
              Hoje, se dedica também à produção de seu primeiro livro, misto
              entre fotografias e textos, sobre o projeto{" "}
              <em>São Paulo em Pandemia</em>.
            </p>
          </div>
          <Link
            href="/marcelo-renda/exposicoes"
            className="inline-block border border-white/30 text-white font-medium px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
          >
            Ver exposições e publicações
          </Link>
        </div>
      </section>

      <section id="faq" className="border-b border-white/10 scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-widest text-white/50 font-mono mb-6">
            PERGUNTAS FREQUENTES
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl mb-10"
            style={{ lineHeight: 1.15 }}
          >
            O que você costuma perguntar
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-lg font-medium">
                  {f.q}
                  <span className="text-white/50 text-xl shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-white/70 mt-3" style={{ lineHeight: 1.7 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="text-xs tracking-widest text-white/50 font-mono mb-6">
            VAMOS COMEÇAR
          </p>
          <h2
            className="font-serif text-4xl md:text-6xl mb-8"
            style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Conta o que você está imaginando
          </h2>
          <p
            className="text-white/70 mb-10 max-w-lg mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            Retrato, marca, evento ou projeto autoral: me manda uma mensagem
            e a gente entende junto o que faz sentido pro seu caso.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-black font-medium px-7 py-3 rounded-full hover:bg-white/85 transition-colors"
          >
            Vamos conversar
          </a>
        </div>
      </section>
    </main>
  );
}
