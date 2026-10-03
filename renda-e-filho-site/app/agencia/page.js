"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WA =
  "https://wa.me/5511960684469?text=Ol%C3%A1!%20Encontrei%20a%20Renda%20%26%20Filho%20pelo%20site%20e%20tenho%20um%20projeto%20pra%20conversar.";

const navLinks = [
  { label: "Nosso jeito", href: "#jeito" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const solucoes = [
  {
    t: "Estrutura para eventos",
    d: "Palco, box truss, sonorização, iluminação cênica, cenografia técnica, backdrops e toda a base física necessária para colocar o projeto de pé. Não começamos pelo tamanho do equipamento. Começamos pelo tamanho da necessidade.",
  },
  {
    t: "Produção audiovisual",
    d: "Da câmera ao último corte. Captação multicâmera, transmissão, eventos híbridos, filmes institucionais, entrevistas, mini-documentários, podcasts e produções criadas para existir dentro ou fora do evento.",
  },
  {
    t: "Imersões e experiências",
    d: "Quando o espaço também precisa comunicar. Projeção mapeada, laser, efeitos especiais, conteúdo dedicado e estruturas desenvolvidas para transformar ambientes físicos em experiências.",
  },
  {
    t: "Produção e equipe técnica",
    d: "As pessoas que fazem tudo funcionar. Coordenação técnica, pré-produção, operação audiovisual, pós-produção, motion, controle de acesso, bombeiros, mestres de cerimônia, recepção e os profissionais necessários para cada projeto.",
  },
];

const jornada = [
  { t: "Café", d: "Antes da proposta, conversa. Queremos entender o que vocês realmente precisam." },
  { t: "Briefing", d: "Objetivos, público, espaço, orçamento, prazo e restrições entram na mesa." },
  { t: "Ideia", d: "Pensamos no formato e nas soluções que fazem sentido para aquele desafio." },
  { t: "Projeto", d: "Transformamos ideia em planejamento, estrutura, equipe e operação." },
  { t: "Produção", d: "Montagem, testes, alinhamentos e tudo aquilo que precisa acontecer antes das portas abrirem." },
  { t: "Ao vivo", d: "Quando começa, estamos lá. Operando, coordenando, acompanhando e resolvendo." },
];

const principios = [
  {
    t: "Escutar antes de propor",
    d: "Um briefing não é uma lista de equipamentos. Precisamos entender o que o projeto precisa provocar e resolver antes de decidir como executá-lo.",
  },
  {
    t: "Antecipar antes de remediar",
    d: "Evento acontece ao vivo. Nosso trabalho é pensar nos riscos enquanto ainda existe tempo para fazer alguma coisa sobre eles.",
  },
  {
    t: "Personalizar sem complicar",
    d: "Sob medida não precisa significar burocrático. Significa usar exatamente aquilo que o projeto pede e não empurrar aquilo que não precisa.",
  },
];

const desafios = [
  "Dá para projetar nisso?",
  "Dá para transmitir daqui?",
  "Dá para montar nesse prazo?",
  "Dá para transformar esse espaço?",
  "Dá para criar alguma coisa que ainda não está no catálogo?",
];

function Eyebrow({ children }) {
  return <p className="text-xs tracking-widest text-[#8890C4] font-mono mb-6">{children}</p>;
}

function Cta({ children, outline, href }) {
  return (
    <a
      href={href || WA}
      target="_blank"
      rel="noreferrer"
      className={
        outline
          ? "inline-block border border-white/30 text-white font-medium px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
          : "inline-block bg-[#C9A24B] text-[#15193F] font-medium px-7 py-3 rounded-full hover:brightness-95 transition"
      }
    >
      {children}
    </a>
  );
}

const wrap = "max-w-3xl mx-auto px-6 py-20 md:py-28";
const body = "text-[#B8BDE3]";

function Timeline() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="hidden md:flex items-start">
        {jornada.map((j, i) => (
          <div key={j.t} className="flex-1 flex flex-col items-center text-center">
            <div className="w-full flex items-center">
              <div className={"h-px flex-1 " + (i === 0 ? "bg-transparent" : "bg-white/15")} />
              <button
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={
                  "w-3 h-3 rounded-full shrink-0 transition-colors " +
                  (active === i ? "bg-[#C9A24B]" : "bg-white/25 hover:bg-white/50")
                }
              />
              <div className={"h-px flex-1 " + (i === jornada.length - 1 ? "bg-transparent" : "bg-white/15")} />
            </div>
            <span
              onClick={() => setActive(i)}
              className={"mt-4 text-sm cursor-pointer " + (active === i ? "text-white" : "text-[#8890C4]")}
            >
              {j.t}
            </span>
          </div>
        ))}
      </div>
      <p className="hidden md:block text-center text-lg mt-8 max-w-md mx-auto" style={{ lineHeight: 1.6 }}>
        {jornada[active].d}
      </p>
      <p className="hidden md:block text-center text-sm text-[#8890C4] mt-6">
        Pós-produção → Entrega → Próximo café
      </p>

      <ol className="md:hidden space-y-0">
        {jornada.map((j, i) => (
          <li key={j.t} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-[#C9A24B] shrink-0 mt-1.5" />
              {i < jornada.length - 1 && <span className="w-px flex-1 bg-white/15" />}
            </div>
            <div className="pb-8">
              <h3 className="font-medium mb-1">{j.t}</h3>
              <p className={"text-sm " + body} style={{ lineHeight: 1.6 }}>{j.d}</p>
            </div>
          </li>
        ))}
        <li className="text-sm text-[#8890C4] pl-7">Pós-produção → Entrega → Próximo café</li>
      </ol>
    </div>
  );
}

export default function AgenciaHub() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReducedMotion(prefersReduced);
    if (prefersReduced) return;

    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        if (!videoRef.current) return;
        const offset = Math.min(window.scrollY * 0.35, 160);
        videoRef.current.style.transform = `translateY(${offset}px) scale(1.08)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className="bg-[#0B0D22] text-white">
      <section
        id="topo"
        className="relative min-h-[92vh] flex items-center justify-center text-center px-6 overflow-hidden"
      >
        {reducedMotion ? (
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #0B0D22 0%, #1E2761 55%, #3A3F9E 100%)" }}
          />
        ) : (
          <video
            ref={videoRef}
            src="/video/hero-agencia.mp4"
            poster="/img/agencia-indice.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D22] via-[#0B0D22]/75 to-[#0B0D22]/35" />
        <div className="absolute inset-0 bg-[#1E2761]/20 mix-blend-multiply" />
        <div className="relative max-w-2xl">
          <p className="text-xs tracking-widest text-[#C9A24B] font-mono mb-6">
            EVENTOS • EXPERIÊNCIAS • AUDIOVISUAL
          </p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6" style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            A ideia é sua.
            <br />
            Fazer acontecer é com a gente.
          </h1>
          <p className="text-[#D8DCEF] text-lg max-w-xl mx-auto mb-4" style={{ lineHeight: 1.6 }}>
            Da primeira conversa à última desmontagem, criamos, produzimos e colocamos de pé eventos, experiências e
            projetos audiovisuais feitos para cada necessidade.
          </p>
          <p className="text-[#D8DCEF] mb-8">Sem pacote pronto. Sem tentar encaixar seu projeto no que já existe.</p>
          <Cta>Conte o que você está imaginando</Cta>
          <p className="text-sm text-[#8890C4] mt-8">
            Estrutura • Audiovisual • Experiências • Produção • Equipe técnica
          </p>
        </div>
      </section>

      <nav aria-label="Seções da página" className="sticky top-0 z-10 bg-[#0B0D22]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-6 overflow-x-auto text-sm py-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[#B8BDE3] hover:text-white transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noreferrer" className="ml-auto shrink-0 bg-[#C9A24B] text-[#15193F] font-medium px-4 py-1.5 rounded-full hover:brightness-95 transition whitespace-nowrap">
            Vamos conversar
          </a>
        </div>
      </nav>

      <section id="jeito" className="border-b border-white/10 scroll-mt-14">
        <div className={wrap}>
          <Eyebrow>NOSSO JEITO DE FAZER</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Primeiro vem o problema. Depois, a solução.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>
              Às vezes o briefing chega pronto. Às vezes chega como uma ideia. E às vezes chega como um “precisamos
              fazer isso acontecer e ainda não sabemos exatamente como”.
            </p>
            <p>Tudo bem.</p>
            <p>
              A gente começa entendendo o que precisa acontecer, para quem, onde, com qual objetivo e quais são os
              limites do projeto. Só depois pensamos em estrutura, tecnologia, equipe e formato.
            </p>
            <p>Podemos executar uma parte específica ou assumir diferentes frentes de uma mesma entrega.</p>
            <p className="text-white font-medium">
              O projeto não precisa caber no nosso catálogo. Nosso trabalho é fazer a solução caber no projeto.
            </p>
          </div>
        </div>
      </section>

      <section id="solucoes" className="border-b border-white/10 scroll-mt-14">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>SOLUÇÕES</Eyebrow>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 max-w-2xl" style={{ lineHeight: 1.12 }}>
            Da estrutura que ninguém percebe à experiência que todo mundo vê.
          </h2>
          <p className={"max-w-xl mb-14 " + body} style={{ lineHeight: 1.7 }}>
            Um evento é o resultado de muitas coisas funcionando ao mesmo tempo. Podemos entrar em uma delas ou
            conectar várias em uma única operação.
          </p>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
            {solucoes.map((s) => (
              <article key={s.t} className="border-t border-white/15 pt-6">
                <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
                <p className={body} style={{ lineHeight: 1.7 }}>{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className={wrap + " text-center"}>
          <h2 className="font-serif text-2xl md:text-3xl mb-3" style={{ lineHeight: 1.3 }}>
            Não encontrou o que precisa nessa lista?
          </h2>
          <p className="text-white font-medium mb-6">Melhor ainda. Conta pra gente.</p>
          <div className={"space-y-4 mb-8 " + body} style={{ lineHeight: 1.7 }}>
            <p>O que você viu acima é o que fazemos com mais frequência. Não é uma fronteira.</p>
            <p>
              Se o projeto exigir uma combinação diferente, uma adaptação ou alguma coisa que ainda não fizemos
              exatamente daquele jeito, começamos pela mesma pergunta:
            </p>
            <p className="font-serif text-xl md:text-2xl text-white">O que precisa acontecer?</p>
            <p>A partir daí, entendemos o desafio, estudamos as possibilidades e desenhamos a solução.</p>
          </div>
          <Cta outline>Tenho um projeto diferente</Cta>
        </div>
      </section>

      <section id="quem-somos" className="border-b border-white/10 scroll-mt-14">
        <div className={wrap}>
          <Eyebrow>RENDA &amp; FILHO</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Experiência de um lado. Inquietação do outro.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>
              José dá forma a eventos desde 1990. São mais de três décadas entre produções sociais e corporativas,
              equipes, fornecedores, estruturas, prazos, montagens, desmontagens e todos aqueles problemas que
              precisam ser resolvidos antes que alguém perceba que existiram.
            </p>
            <p>
              Marcelo entrou nesse universo em 2008 e trouxe para essa história um repertório construído entre
              comunicação, marketing, fotografia e criação. Como fotógrafo, teve trabalhos expostos em galerias de 19
              países e hoje atua principalmente na direção artística das produções.
            </p>
            <p>Pai e filho acabaram encontrando justamente nessa diferença uma maneira interessante de trabalhar juntos.</p>
            <p className="text-white font-medium">
              Experiência técnica para saber o que precisa funcionar. Olhar criativo para imaginar o que ainda pode
              ser feito.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className={wrap}>
          <Eyebrow>EXPERIÊNCIA</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Depois de milhares de eventos, uma coisa continua igual: nenhum acontece exatamente como o planejado.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>
              Cronogramas mudam. Convidados atrasam. Um palestrante decide alterar a apresentação. Alguma coisa que
              funcionava ontem resolve não funcionar hoje.
            </p>
            <p>Evento acontece ao vivo.</p>
            <p>E experiência, nesse mercado, não serve apenas para saber montar.</p>
            <p className="text-white font-medium">Serve para antecipar. Adaptar. Decidir. Resolver.</p>
            <p>Nosso trabalho acontece antes, durante e depois do que o público vê.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className={wrap}>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            A ideia não termina no PowerPoint.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>Criatividade importa. Mas alguém precisa calcular, montar, ligar, testar, operar, coordenar e desmontar.</p>
            <p>Ter criação e execução próximas permite pensar projetos sabendo o que é possível fazer no mundo real.</p>
            <p>E ter experiência técnica não significa limitar a criatividade ao que já sabemos executar.</p>
            <p>É justamente o encontro dessas duas coisas que nos interessa.</p>
            <p className="text-white font-medium">Pensar sabendo fazer. Fazer entendendo por quê.</p>
          </div>
        </div>
      </section>

      <section id="processo" className="border-b border-white/10 scroll-mt-14">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>DO BRIEFING À ENTREGA</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-16 max-w-2xl" style={{ lineHeight: 1.2 }}>
            Café → Briefing → Ideia → Projeto → Produção → Ao vivo
          </h2>
          <Timeline />
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className={wrap}>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Menos pontas soltas. Mais gente falando a mesma língua.
          </h2>
          <div className={"space-y-5 mb-8 " + body} style={{ lineHeight: 1.8 }}>
            <p>
              Som de um lado. Vídeo do outro. Iluminação com outro fornecedor. Transmissão com mais um. Produção
              tentando fazer todos conversarem.
            </p>
            <p>Dependendo do projeto, isso é inevitável.</p>
            <p>Em outros, não precisa ser.</p>
            <p>
              Quando diferentes frentes ficam sob a mesma coordenação, decisões técnicas podem ser tomadas juntas, as
              equipes trabalham com o mesmo contexto e o projeto ganha uma visão mais integrada.
            </p>
          </div>
          <p className="font-serif text-xl md:text-2xl">
            Você pode contratar uma solução. Ou pode nos chamar para conectar várias delas.
          </p>
        </div>
      </section>

      <section id="projetos" className="border-b border-white/10 scroll-mt-14">
        <div className={wrap}>
          <Eyebrow>O QUE JÁ COLOCAMOS DE PÉ</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Ideias ficam mais interessantes quando saem da tela.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>
              Cada projeto que assumimos passa pela mesma lógica: entender o desafio, desenhar a solução e cuidar da
              entrega do início ao fim.
            </p>
            <p>
              Estamos organizando fotos e vídeos reais dos nossos projetos para mostrar aqui. Enquanto isso, a melhor
              forma de conhecer o trabalho é numa conversa direta.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className={wrap}>
          <Eyebrow>DESAFIOS</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-3">“Dá para fazer?”</h2>
          <p className="text-white font-medium mb-8">É uma pergunta que a gente gosta de ouvir.</p>
          <ul className={"space-y-2 mb-8 " + body} style={{ lineHeight: 1.7 }}>
            {desafios.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <div className={"space-y-2 mb-8 " + body}>
            <p>Talvez dê.</p>
            <p>Talvez exista uma maneira melhor.</p>
            <p>Talvez a ideia precise mudar completamente.</p>
          </div>
          <p className="font-serif text-xl mb-8">Vamos descobrir.</p>
          <Cta outline>Tenho um desafio</Cta>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>PRINCÍPIOS</Eyebrow>
          <div className="grid md:grid-cols-3 gap-10">
            {principios.map((p) => (
              <div key={p.t} className="border-t border-white/15 pt-4">
                <h3 className="font-serif text-xl mb-3">{p.t}</h3>
                <p className={body} style={{ lineHeight: 1.7 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <Eyebrow>TEM ALGUMA COISA NA CABEÇA?</Eyebrow>
          <h2 className="font-serif text-4xl md:text-6xl mb-8" style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Vamos marcar um café?
          </h2>
          <div className={"space-y-2 max-w-md mx-auto mb-6 " + body}>
            <p>Pode chegar com briefing.</p>
            <p>Pode chegar com apresentação.</p>
            <p>Pode chegar com orçamento.</p>
            <p>Pode chegar com uma ideia rabiscada.</p>
          </div>
          <p className="mb-10">Ou pode simplesmente chegar com um:</p>
          <p className="font-serif text-xl md:text-2xl mb-10">“A gente precisa fazer isso acontecer.”</p>
          <Cta>Vamos conversar sobre o projeto</Cta>
          <p className="text-sm text-[#8890C4] mt-8">
            Renda &amp; Filho, soluções customizadas para eventos, experiências e audiovisual.
          </p>
        </div>
      </section>
    </main>
  );
}
