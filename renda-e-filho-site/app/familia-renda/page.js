"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const PHOTO_HERO =
  "https://lh3.googleusercontent.com/d/1kcdawwS4aB01ftTcmQCr0yn1nIy1b9aB=w1600";
const PHOTO_BREATHER =
  "https://lh3.googleusercontent.com/d/10Hy1knYgQwxqjPi4av5sPrLAfpHs6Rdo=w1600";
const PHOTO_SOBRE =
  "https://lh3.googleusercontent.com/d/1b3wT6U5WFDUfzhq_Gy158VNOAf81JgJK=w1200";
const PHOTO_H1 =
  "https://lh3.googleusercontent.com/d/1b3wT6U5WFDUfzhq_Gy158VNOAf81JgJK=w900";
const PHOTO_H2 =
  "https://lh3.googleusercontent.com/d/1DtwQPlJrQphbPwKGRbjjpu6rShs791zG=w900";
const PHOTO_H3 =
  "https://lh3.googleusercontent.com/d/1lk2IIC9x301_lWpGuLn4hdMt7rAlwuut=w900";
const PHOTO_H4 =
  "https://lh3.googleusercontent.com/d/1R6yPR5WH6Y_jGCkEw0USNvC_iun2u_M2=w900";

const WA =
  "https://wa.me/5511960684469?text=Ol%C3%A1!%20Encontrei%20a%20Renda%20%26%20Filho%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20casamento.";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Histórias", href: "#historias" },
  { label: "Pré-wedding", href: "#pre-wedding" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const servicosExtra = [
  { t: "Fotografia", d: "A história completa do casamento, do making of ao fim da festa." },
  { t: "Filme", d: "Imagem, movimento e som para contar aquilo que uma fotografia não consegue contar sozinha." },
  { t: "Content Creator", d: "Conteúdo pensado para a linguagem das redes sociais, com registros verticais, bastidores e momentos prontos para ganhar o feed." },
  { t: "Estrutura e produção", d: "Som, iluminação, telão e suporte à organização do evento também podem fazer parte do projeto quando vocês precisarem." },
];

const jornada = [
  { t: "Um café", d: "Tudo começa conversando. Antes de entender o evento, queremos conhecer vocês." },
  { t: "O ensaio", d: "A câmera deixa de ser uma desconhecida. E nós também." },
  { t: "Os preparativos", d: "Conversamos sobre pessoas, horários, lugares e tudo aquilo que precisamos saber para chegar preparados." },
  { t: "O casamento", d: "A partir do making of, ficamos com vocês. Não contamos horas. Casamento atrasa, festa estica, coisas acontecem. Faz parte." },
  { t: "As histórias", d: "Depois que a festa termina, começa nosso trabalho de selecionar, editar e transformar tudo aquilo em uma história que vocês possam viver de novo." },
];

const faq = [
  {
    q: "Quantas horas vocês ficam no casamento?",
    a: ["As que forem necessárias. Não cobramos a cobertura pensando em um cronômetro. Eventos atrasam, festas se estendem e imprevistos fazem parte. Se a história ainda está acontecendo, estaremos lá."],
  },
  {
    q: "Quantas fotos recebemos?",
    a: ["Todas as fotografias que fizerem sentido para contar o casamento. Não trabalhamos com um número fechado porque nenhum casamento produz a mesma história. Um casamento com dois casais de padrinhos é diferente de um com 26. A quantidade acompanha o que aconteceu."],
  },
  {
    q: "Vocês fazem fotos posadas?",
    a: ["Sim. Retratos do casal, família e pessoas importantes fazem parte do nosso trabalho. A diferença é que não queremos transformar o casamento inteiro em uma sessão de fotos."],
  },
  {
    q: "E se a gente for tímido?",
    a: ["Estamos acostumados a fotografar pessoas que não estão acostumadas a ser fotografadas. É também por isso que valorizamos tanto o pré-wedding. Quando o casamento chega, vocês já conhecem a câmera, o nosso jeito de trabalhar e, principalmente, a gente."],
  },
  {
    q: "Vocês fotografam o making of?",
    a: ["Sim. Para nós, o casamento começa quando vocês começam a se transformar em noivos. O making of já é parte da história."],
  },
  {
    q: "Vocês trabalham com segundo fotógrafo?",
    a: ["Sim. Sempre."],
  },
  {
    q: "Fotografam fora de São Paulo?",
    a: ["Sim. Atendemos em todo o Brasil."],
  },
  {
    q: "Fazem destination wedding?",
    a: ["Sim. Onde a história acontecer, podemos estar. Precisamos apenas planejar a logística e ter a data disponível."],
  },
  {
    q: "Vocês fazem vídeo e content creator?",
    a: ["Sim. Podemos construir uma cobertura integrada de fotografia, filme e conteúdo para redes sociais."],
  },
  {
    q: "Vocês entregam álbum?",
    a: ["Sim. Trabalhamos com álbuns e podemos apresentar as opções de acordo com o casamento."],
  },
  {
    q: "Como reservamos a data?",
    a: ["Primeiro conversamos. Marcamos uma reunião, entendemos o casamento e apresentamos a proposta. Quando decidirem seguir conosco, formalizamos tudo em contrato e reservamos a data."],
  },
];

function Eyebrow({ children }) {
  return <p className="text-xs tracking-widest text-[#8f897c] font-mono mb-6">{children}</p>;
}

function Cta({ children, outline, href }) {
  return (
    <a
      href={href || WA}
      target="_blank"
      rel="noreferrer"
      className={
        outline
          ? "inline-block border border-white/30 text-[#efe7d7] font-medium px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
          : "inline-block bg-[#c2410c] text-white font-medium px-7 py-3 rounded-full hover:bg-[#a8360a] transition-colors"
      }
    >
      {children}
    </a>
  );
}

const wrap = "max-w-3xl mx-auto px-6 py-20 md:py-28";
const body = "text-[#c9c2b3]";

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
                  (active === i ? "bg-[#c2410c]" : "bg-white/25 hover:bg-white/50")
                }
              />
              <div className={"h-px flex-1 " + (i === jornada.length - 1 ? "bg-transparent" : "bg-white/15")} />
            </div>
            <span
              onClick={() => setActive(i)}
              className={"mt-4 text-sm cursor-pointer " + (active === i ? "text-[#efe7d7]" : "text-[#8f897c]")}
            >
              {j.t}
            </span>
          </div>
        ))}
      </div>
      <p className="hidden md:block text-center text-lg mt-8 max-w-md mx-auto" style={{ lineHeight: 1.6 }}>
        {jornada[active].d}
      </p>

      <ol className="md:hidden space-y-0">
        {jornada.map((j, i) => (
          <li key={j.t} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-[#c2410c] shrink-0 mt-1.5" />
              {i < jornada.length - 1 && <span className="w-px flex-1 bg-white/15" />}
            </div>
            <div className="pb-8">
              <h3 className="font-medium mb-1">{j.t}</h3>
              <p className={"text-sm " + body} style={{ lineHeight: 1.6 }}>{j.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function FamiliaRenda() {
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
    <main className="bg-[#17161c] text-[#efe7d7]">
      <section id="topo" className="relative min-h-[92vh] flex items-end px-6 md:px-10 pb-14 md:pb-20 overflow-hidden">
        {reducedMotion ? (
          <img src={PHOTO_HERO} alt="" className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <video
            ref={videoRef}
            src="/video/hero-familia.mp4"
            poster="/img/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c10] via-[#0d0c10]/70 to-[#0d0c10]/10" />
        <div className="relative max-w-xl pt-40">
          <p className="text-xs tracking-widest text-[#d9c9a8] font-mono mb-5">FOTOGRAFIA DE CASAMENTO</p>
          <h1 className="font-serif text-3xl md:text-5xl mb-6" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Vocês vivem o casamento.
            <br />
            Nós guardamos o que aconteceu.
          </h1>
          <p className="text-[#e4dcc8] max-w-md mb-8" style={{ lineHeight: 1.6 }}>
            Fotografia e filme para guardar as pessoas, os encontros, os detalhes e tudo aquilo que acontece rápido
            demais para perceber enquanto se vive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Cta>Vamos tomar um café?</Cta>
            <a href="#sobre" className="text-[#e4dcc8] underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors">
              Conheça nosso olhar
            </a>
          </div>
        </div>
      </section>

      <nav aria-label="Seções da página" className="sticky top-0 z-10 bg-[#17161c]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-6 overflow-x-auto text-sm py-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[#c9c2b3] hover:text-[#efe7d7] transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noreferrer" className="ml-auto shrink-0 bg-[#c2410c] text-white font-medium px-4 py-1.5 rounded-full hover:bg-[#a8360a] transition-colors whitespace-nowrap">
            Vamos conversar
          </a>
        </div>
      </nav>

      <section className={wrap}>
        <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
          O casamento acontece rápido demais.
        </h2>
        <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
          <p>
            Meses de preparação cabem em algumas horas. E enquanto vocês vivem tudo isso, outras histórias acontecem
            ao mesmo tempo. Alguém se emociona antes da cerimônia. Amigos se reencontram. Os pais observam de longe.
            Uma criança dorme no colo. A pista perde qualquer compostura.
          </p>
          <p>É impossível estar em todos esses lugares.</p>
          <p className="text-[#efe7d7] font-medium">É aí que entramos.</p>
          <p>
            Fotografamos o casamento por dentro, atentos às pessoas, aos gestos e às pequenas coisas que, juntas,
            fazem aquele dia ser de vocês.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={wrap}>
          <Eyebrow>NOSSO OLHAR</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Nem tudo precisa virar uma pose.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>A maior parte de um casamento já está acontecendo sem que a gente precise inventar alguma coisa.</p>
            <p>
              Gostamos de observar. Procuramos expressões, relações, movimento, luz e pequenas histórias acontecendo
              dentro da história maior. Fotografamos aquilo que foi planejado e permanecemos atentos ao que ninguém
              poderia planejar.
            </p>
            <p>Quando uma fotografia pede direção, dirigimos. Quando não pede, deixamos a vida acontecer.</p>
            <p className="text-[#efe7d7] font-medium">Saber fotografar também é saber quando não interferir.</p>
          </div>
        </div>
      </section>

      <div className="w-full h-[50vh] md:h-[70vh] relative">
        <img src={PHOTO_BREATHER} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <section id="sobre" className="border-t border-white/10 scroll-mt-14">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <img src={PHOTO_SOBRE} alt="" className="w-full aspect-[4/5] object-cover rounded-lg" />
            <div>
              <Eyebrow>RENDA &amp; FILHO</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl mb-8" style={{ lineHeight: 1.15 }}>
                Uma família, muitas histórias
              </h2>
              <div className={"space-y-5 " + body} style={{ lineHeight: 1.75 }}>
                <p>Renda &amp; Filho é José, Sandra e Marcelo.</p>
                <p>
                  José e Sandra vivem o universo dos eventos há décadas. São anos acompanhando famílias, celebrações,
                  encontros e histórias que existem por uma noite, mas ficam para sempre na memória de quem estava
                  ali.
                </p>
                <p>
                  Marcelo cresceu no meio disso e entrou profissionalmente nesse universo em 2008, unindo fotografia,
                  comunicação e artes visuais a uma história que já vinha sendo construída em família. Marketeiro e
                  fotógrafo, teve trabalhos expostos em galerias de 19 países.
                </p>
                <p>
                  Sandra também encontrou atrás das câmeras uma forma de participar dessas histórias, e José traz a
                  experiência de quem já viu milhares de eventos ganharem vida.
                </p>
                <p>
                  Hoje, os três fotografam, produzem, conversam, riem, se emocionam e ajudam a fazer acontecer.
                  Porque a Renda &amp; Filho nasceu de uma família trabalhando junta para guardar o começo de tantas
                  outras.
                </p>
              </div>
            </div>
          </div>
          <p className="font-serif text-xl md:text-2xl text-center max-w-xl mx-auto mt-16" style={{ lineHeight: 1.4 }}>
            Talvez seja por isso que gostamos tanto de casamentos. No fim, estamos sempre fotografando famílias.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={wrap}>
          <Eyebrow>NOSSO JEITO</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Experiência para antecipar. Proximidade para deixar vocês à vontade.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>
              Depois de tantos anos dentro de eventos, aprendemos a perceber quando alguma coisa está prestes a
              acontecer. Um olhar, uma reação, um encontro do outro lado do salão. Experiência, para nós, não
              significa repetir fotografias. Significa estar preparado para aquilo que só vai acontecer uma vez.
            </p>
            <p>Mas técnica não basta.</p>
            <p>
              Fotografamos pessoas que, na maioria das vezes, não estão acostumadas a serem fotografadas. Por isso
              nosso trabalho começa muito antes do clique. Está na conversa, na atenção aos detalhes, em lembrar das
              pessoas importantes, em entender como vocês funcionam juntos e em criar intimidade suficiente para que,
              quando o casamento chegar, vocês não sintam que há dois estranhos apontando câmeras para vocês.
            </p>
            <p className="text-[#efe7d7] font-medium">
              No dia do casamento, queremos chegar como fotógrafos e sermos recebidos como gente conhecida.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={wrap}>
          <Eyebrow>NOSSA FOTOGRAFIA</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Bonita hoje. Verdadeira daqui a vinte anos.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>Gostamos de imagens que tenham vida. Movimento, composição, silêncio, bagunça, cor, preto e branco, luz bonita e luz difícil.</p>
            <p>
              Não queremos aplicar a mesma fórmula a todos os casamentos. A fotografia precisa carregar a atmosfera
              daquele dia e, principalmente, continuar parecendo de vocês quando as tendências mudarem.
            </p>
            <p>Algumas imagens serão cuidadosamente construídas. Outras existirão porque estávamos no lugar certo por uma fração de segundo.</p>
            <p className="text-[#efe7d7] font-medium">Uma estética a serviço da história, nunca o contrário.</p>
          </div>
        </div>
      </section>

      <section id="historias" className="border-t border-white/10 scroll-mt-14">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>HISTÓRIAS</Eyebrow>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 max-w-2xl" style={{ lineHeight: 1.12 }}>
            Casamentos que já passaram pelas nossas câmeras.
          </h2>
          <div className={"max-w-xl space-y-2 mb-12 " + body} style={{ lineHeight: 1.7 }}>
            <p>Cada casamento tem seu ritmo, suas pessoas e sua própria maneira de acontecer.</p>
            <p>Mais do que uma seleção das nossas melhores fotografias, queremos mostrar histórias inteiras.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <figure className="md:col-span-2">
              <img src={PHOTO_H1} alt="Casal em frente a um prédio histórico no centro de São Paulo" className="w-full aspect-[4/3] object-cover rounded-lg mb-3" />
              <figcaption className="text-sm text-[#8f897c]">Bruno e Denise, no centro histórico de São Paulo</figcaption>
            </figure>
            <figure>
              <img src={PHOTO_H2} alt="Cachorro vestido para o casamento, no colo da noiva" className="w-full aspect-[3/4] object-cover rounded-lg mb-3" />
              <figcaption className="text-sm text-[#8f897c]">Letícia e Thiago: os detalhes que ninguém coloca no roteiro</figcaption>
            </figure>
            <figure>
              <img src={PHOTO_H3} alt="Bebê sorrindo em um banco de igreja" className="w-full aspect-[3/4] object-cover rounded-lg mb-3" />
              <figcaption className="text-sm text-[#8f897c]">Um dos capítulos seguintes: a família reunida</figcaption>
            </figure>
            <figure className="md:col-span-2">
              <img src={PHOTO_H4} alt="Bebê sentado diante de um altar" className="w-full aspect-[4/3] object-cover rounded-lg mb-3" />
              <figcaption className="text-sm text-[#8f897c]">Outra celebração em família</figcaption>
            </figure>
          </div>
          <Cta outline>Conheça algumas delas</Cta>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={wrap}>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            As fotografias que vocês esperam. E aquelas que ninguém poderia prever.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>Claro que vamos fotografar a entrada, as alianças, o beijo, os padrinhos, os pais, os avós e as pessoas importantes.</p>
            <p>Conversamos antes para entender quem precisa estar nessas fotografias e quais relações vocês querem guardar.</p>
            <p>Depois disso, ficamos atentos ao que nenhuma lista conseguiria prever.</p>
            <p>O abraço que aconteceu longe do casal. A avó olhando a pista. O amigo chorando escondido. A criança embaixo da mesa. A reação que durou dois segundos.</p>
            <p className="text-[#efe7d7] font-medium">Algumas das fotografias mais importantes do casamento ainda não existem na imaginação de ninguém.</p>
          </div>
        </div>
      </section>

      <section id="pre-wedding" className="border-t border-white/10 scroll-mt-14">
        <div className={wrap}>
          <Eyebrow>ANTES DO CASAMENTO</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            O ensaio começa com fotografias. Mas não é só sobre fotografia.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>Claro que queremos fazer algumas das fotografias mais bonitas que vocês já tiveram juntos.</p>
            <p>Mas existe outro motivo para quase sempre fazermos o pré-wedding.</p>
            <p className="text-[#efe7d7] font-medium">Queremos conhecer vocês.</p>
            <p>
              O ensaio é quando descobrimos como vocês ficam diante da câmera sem a pressão do casamento. É quando
              vocês entendem como trabalhamos e nós entendemos como vocês funcionam juntos.
            </p>
            <p>
              É fotografar. Mas também é conversar, parar para comer alguma coisa, dar risada, falar da vida,
              descobrir quem é mais tímido, quem faz o outro rir e, sim, até qual é o lado preferido da franja.
            </p>
            <p>Parece pequeno.</p>
            <p>No casamento, faz uma diferença enorme.</p>
            <p>
              Porque a vergonha da câmera ficou no ensaio. A intimidade começou antes. E quando chegamos para
              fotografar o casamento, não estamos começando do zero.
            </p>
            <p className="text-[#efe7d7] font-medium">O pré-wedding é o primeiro capítulo da nossa relação com vocês.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={wrap}>
          <Eyebrow>QUANDO VOCÊS PRECISAREM</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-4" style={{ lineHeight: 1.3 }}>
            A fotografia é nosso ponto de partida. Não precisa ser o ponto final.
          </h2>
          <p className={"mb-12 " + body} style={{ lineHeight: 1.7 }}>
            Nosso trabalho nasceu e continua tendo na fotografia e no filme seu coração. Mas um casamento envolve
            muitas coisas acontecendo ao mesmo tempo. Por isso, ao longo dos anos, construímos uma estrutura capaz de
            acompanhar outras necessidades do evento.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-12">
            {servicosExtra.map((s) => (
              <div key={s.t} className="border-t border-white/15 pt-4">
                <h3 className="font-serif text-xl mb-2">{s.t}</h3>
                <p className={body} style={{ lineHeight: 1.65 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[#efe7d7] font-medium">
            Vocês não precisam contratar tudo conosco. Mas é bom saber que, se precisarem, estamos aqui.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>COMO A GENTE CHEGA ATÉ O CASAMENTO</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-16 max-w-2xl" style={{ lineHeight: 1.2 }}>
            Do primeiro café até as histórias prontas.
          </h2>
          <Timeline />
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={wrap}>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Não escolha um fotógrafo só pelo Instagram.
          </h2>
          <div className={"space-y-5 mb-10 " + body} style={{ lineHeight: 1.8 }}>
            <p>O Instagram mostra destaques. Um casamento completo mostra consistência.</p>
            <p>
              Antes de contratar qualquer fotógrafo, inclusive nós, veja uma história inteira. Veja a cerimônia, os
              retratos, os convidados, a pista, a luz bonita e a luz difícil.
            </p>
            <p>É assim que se conhece de verdade o trabalho de quem vai guardar o seu casamento.</p>
          </div>
          <Cta outline href="#historias">Quero ver um casamento completo</Cta>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10 scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>PERGUNTAS FREQUENTES</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-10" style={{ lineHeight: 1.15 }}>
            Antes do nosso primeiro café, talvez algumas respostas ajudem.
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-lg font-medium">
                  <h3 className="font-medium">{f.q}</h3>
                  <span aria-hidden="true" className="text-[#c2410c] text-2xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className={"mt-3 space-y-3 max-w-2xl " + body} style={{ lineHeight: 1.7 }}>
                  {f.a.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <Eyebrow>O PRIMEIRO PASSO</Eyebrow>
          <h2 className="font-serif text-4xl md:text-6xl mb-8" style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Vamos tomar um café?
          </h2>
          <div className={"space-y-4 max-w-lg mx-auto mb-10 " + body} style={{ lineHeight: 1.75 }}>
            <p>Antes de fotografar vocês, queremos conhecer vocês.</p>
            <p>
              Contem para a gente quando será o casamento, onde ele vai acontecer e o que vocês estão imaginando.
              Depois a gente marca um café, conversa sobre fotografia, sobre o casamento, sobre vocês e provavelmente
              sobre um monte de outras coisas também.
            </p>
            <p>Porque quando chegar o grande dia, queremos que vocês reconheçam quem está atrás das câmeras.</p>
          </div>
          <Cta>Vamos conversar</Cta>
          <p className="text-sm text-[#8f897c] mt-8">José, Sandra e Marcelo, da Renda &amp; Filho</p>
        </div>
      </section>
    </main>
  );
}
