"use client";

import { useState } from "react";
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
  return (
    <main className="bg-[#17161c] text-[#efe7d7]">
      <section id="topo" className="relative min-h-[92vh] flex items-end px-6 md:px-10 pb-14 md:pb-20">
        <img src={PHOTO_HERO} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
const PHOTO_HERO = "https://lh3.googleusercontent.com/d/1kcdawwS4aB01ftTcmQCr0yn1nIy1b9aB=w1600";
const PHOTO_SOBRE = "https://lh3.googleusercontent.com/d/10Hy1knYgQwxqjPi4av5sPrLAfpHs6Rdo=w1200";
const PHOTO_P1 = "https://lh3.googleusercontent.com/d/1b3wT6U5WFDUfzhq_Gy158VNOAf8lJgJK=w900";
const PHOTO_P2 = "https://lh3.googleusercontent.com/d/1DtwQPlJrQphbPwKGRbjjpu6rShs791zG=w900";
const PHOTO_P3 = "https://lh3.googleusercontent.com/d/1lk2IIC9x301_lWpGuLn4hdMt7rAlwuut=w900";
const PHOTO_P4 = "https://lh3.googleusercontent.com/d/1R6yPR5WH6Y_jGCkEw0USNvC_iun2u_M2=w900";

const WA =
  "https://wa.me/5511960684469?text=Ol%C3%A1!%20Encontrei%20a%20Renda%20%26%20Filho%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20casamento.";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const prova = [
  { t: "Desde 1990 produzindo eventos", d: "Experiência construída em milhares de produções sociais e corporativas." },
  { t: "Duas gerações, um mesmo projeto", d: "Experiência técnica, produção, criatividade e cuidado reunidos em uma empresa familiar." },
  { t: "São Paulo e outros destinos", d: "Projetos construídos de acordo com o local, formato e necessidades de cada casal." },
];

const servicos = [
  {
    t: "Assessoria completa",
    s: "Para quem quer alguém ao lado desde as primeiras decisões.",
    p: [
      "Participamos da construção do casamento desde o início: planejamento, orçamento, cronograma, escolha e relacionamento com fornecedores, visitas, alinhamentos, logística e preparação de cada etapa até a execução do evento.",
      "O objetivo não é tomar as decisões por vocês.",
      "É fazer com que vocês tenham informação, organização e suporte para tomar decisões melhores, sem precisar administrar sozinhos dezenas de pontas ao mesmo tempo.",
    ],
  },
  {
    t: "Assessoria final",
    s: "Para quem já organizou boa parte do casamento, mas não quer carregar a operação até o altar.",
    p: [
      "Entramos na etapa final para organizar o que já foi contratado, revisar informações, conectar fornecedores, estruturar cronogramas e assumir a coordenação necessária para o evento acontecer como planejado.",
    ],
  },
  {
    t: "Cerimonial e coordenação do dia",
    s: "Quando chega o casamento, alguém precisa estar olhando para o relógio para que vocês não precisem.",
    p: [
      "Nossa equipe acompanha montagem, fornecedores, cerimônia, recepção, momentos programados e andamento geral do evento.",
      "Enquanto vocês recebem abraços, encontram pessoas e vivem o casamento, existe uma equipe acompanhando aquilo que não deveria ocupar a cabeça de vocês naquele momento.",
    ],
  },
  {
    t: "Pré-wedding e eventos relacionados",
    s: "O casamento nem sempre cabe em uma única data.",
    p: [
      "Welcome drinks, encontros familiares, pré-wedding, celebrações menores e outras experiências podem fazer parte da mesma jornada.",
      "Podemos pensar essas ocasiões de forma independente ou conectadas ao conceito do casamento.",
    ],
  },
];

const engrenagens = [
  { t: "Planejamento", d: "Organização das etapas, prioridades, orçamento e decisões que precisam acontecer até a data." },
  { t: "Curadoria de fornecedores", d: "Busca e avaliação de parceiros adequados ao perfil, necessidades e orçamento do casamento." },
  { t: "Orçamento e negociações", d: "Acompanhamento de propostas e apoio para comparar alternativas com mais clareza." },
  { t: "Cronograma", d: "Construção da linha do tempo do planejamento e, posteriormente, do roteiro operacional do evento." },
  { t: "Visitas e alinhamentos", d: "Reuniões técnicas e acompanhamento dos pontos que precisam ser definidos com espaço e fornecedores." },
  { t: "Gestão de fornecedores", d: "Centralização das informações para que decoração, buffet, foto, vídeo, música, estrutura e demais equipes saibam o que precisa acontecer." },
  { t: "Cerimônia", d: "Organização dos participantes, entradas, tempos e principais momentos previstos." },
  { t: "Operação do evento", d: "Acompanhamento de montagem, execução, mudanças de etapa e encerramento." },
  { t: "Gestão de imprevistos", d: "Problemas acontecem. Nosso trabalho é identificá-los, decidir rapidamente e, sempre que possível, resolvê-los antes que cheguem até vocês." },
];

const jornada = [
  {
    n: "1",
    t: "A primeira conversa",
    s: "Antes da proposta, queremos ouvir.",
    p: [
      "Conversamos sobre vocês, o casamento imaginado, número de convidados, data, orçamento, local, caso já exista, e tudo aquilo que já foi decidido.",
      "Também falamos sobre dúvidas e preocupações.",
      "Essa conversa é importante porque dois casamentos com o mesmo número de convidados podem exigir projetos completamente diferentes.",
    ],
  },
  {
    n: "2",
    t: "O desenho do projeto",
    s: "Transformamos desejos em um plano possível.",
    p: [
      "Com as primeiras informações em mãos, estruturamos escopo, prioridades e próximos passos.",
      "Aqui começa o equilíbrio entre expectativa, investimento, logística e aquilo que realmente importa para vocês.",
    ],
  },
  {
    n: "3",
    t: "Planejamento e fornecedores",
    s: "Cada escolha começa a conversar com as demais.",
    p: [
      "Espaço, gastronomia, decoração, música, fotografia, vídeo, beleza, convites, transporte, estrutura e tantas outras decisões deixam de existir isoladamente e passam a formar um único projeto.",
      "Acompanhamos propostas, prazos e alinhamentos ao longo dessa construção.",
    ],
  },
  {
    n: "4",
    t: "A reta final",
    s: "O planejamento começa a virar operação.",
    p: [
      "Conferimos contratos e informações importantes, fechamos horários, organizamos fornecedores e construímos o cronograma detalhado.",
      "É quando cada pessoa envolvida precisa saber onde estar, quando chegar e o que fazer.",
    ],
  },
  {
    n: "5",
    t: "O casamento",
    s: "Vocês deixam de ser organizadores e voltam a ser noivos.",
    p: [
      "Enquanto vocês se arrumam, encontram a família e começam a viver aquilo que planejaram durante meses, nossa equipe assume a operação.",
      "Acompanhamos montagem, fornecedores, cerimônia, recepção e os momentos previstos no roteiro.",
    ],
  },
  {
    n: "6",
    t: "O encerramento",
    s: "A festa termina. Nosso trabalho ainda não necessariamente.",
    p: [
      "Coordenamos as últimas etapas operacionais previstas e encerramos o projeto com o mesmo cuidado com que ele começou.",
    ],
  },
];

const pilares = [
  { t: "Planejar antes", d: "Quanto melhor a preparação, menos decisões precisam ser improvisadas no grande dia." },
  { t: "Resolver durante", d: "Quando alguma coisa sai diferente do previsto, nossa prioridade é encontrar a solução, não transferir o problema para os noivos." },
  { t: "Estar presente sem ocupar a cena", d: "A assessoria precisa estar em todos os lugares sem transformar o casamento em um evento sobre a assessoria." },
];

const paraQuem = [
  "querem participar das decisões sem precisar administrar cada fornecedor;",
  "têm muitas ideias, mas ainda não sabem como conectá-las;",
  "já começaram a organizar tudo e perceberam a quantidade de detalhes envolvidos;",
  "querem ter alguém experiente para dizer quando uma ideia funciona, e quando existe uma alternativa melhor;",
  "valorizam planejamento, mas não querem um casamento com cara de evento engessado;",
  "querem chegar ao dia sabendo que existe alguém responsável pelo todo.",
];

const faq = [
  {
    q: "Vocês fazem apenas casamentos completos?",
    a: ["Não. Podemos acompanhar o projeto desde o início ou entrar quando parte das decisões e contratações já foi realizada. Na primeira conversa entendemos em que momento vocês estão e qual formato de assessoria faz sentido."],
  },
  {
    q: "Vocês trabalham com fornecedores próprios?",
    a: [
      "Temos parceiros e profissionais que conhecemos ao longo da nossa trajetória, mas a indicação depende das características de cada projeto.",
      "Não acreditamos que todo casamento precise utilizar os mesmos fornecedores.",
      "Se vocês já tiverem profissionais contratados ou pessoas com quem querem trabalhar, eles podem ser integrados ao planejamento.",
    ],
  },
  {
    q: "Vocês trabalham apenas em São Paulo?",
    a: ["Nossa base é São Paulo, mas podemos avaliar projetos em outras cidades e destinos. Logística, deslocamento, hospedagem e necessidades de equipe são considerados de acordo com cada projeto."],
  },
  {
    q: "Quanto custa a assessoria?",
    a: [
      "O investimento depende principalmente do escopo, complexidade, duração do planejamento, localização e necessidades do casamento.",
      "Por isso, preferimos entender o projeto antes de apresentar uma proposta.",
    ],
  },
  {
    q: "Com quanto tempo de antecedência devemos procurar vocês?",
    a: [
      "Quanto antes entrarmos, maior tende a ser nossa participação no planejamento e nas decisões iniciais.",
      "Mas isso não significa que exista um prazo universal. Se o casamento já estiver em andamento, conversem conosco para entendermos o que ainda precisa ser estruturado.",
    ],
  },
  {
    q: "Vocês ajudam a controlar o orçamento?",
    a: [
      "Sim. O orçamento faz parte do planejamento porque praticamente todas as decisões do casamento se relacionam a ele.",
      "Nosso trabalho é ajudar vocês a enxergar prioridades, comparar alternativas e entender os impactos das escolhas ao longo do projeto.",
    ],
  },
  {
    q: "Já temos o espaço. Ainda faz sentido contratar assessoria?",
    a: ["Sim. O espaço é uma das grandes decisões, mas ainda existem fornecedores, cronogramas, logística, cerimônia, operação e dezenas de outros pontos a conectar."],
  },
  {
    q: "Podemos contratar fornecedores que encontramos por conta própria?",
    a: [
      "Sim.",
      "O casamento é de vocês. Nosso papel é avaliar a integração dessas escolhas ao projeto, levantar pontos de atenção e ajudar na coordenação dos profissionais envolvidos.",
    ],
  },
  {
    q: "Vocês cuidam do casamento no próprio dia?",
    a: [
      "Sim. A operação do casamento é justamente uma das etapas mais importantes do nosso trabalho.",
      "A equipe acompanha o que foi planejado para que vocês não precisem passar o casamento conferindo horários ou procurando fornecedores.",
    ],
  },
  {
    q: "E se alguma coisa der errado?",
    a: [
      "Primeiro, tentamos reduzir essa possibilidade durante o planejamento.",
      "No evento, nossa função é identificar desvios, avaliar alternativas e coordenar a solução com os profissionais responsáveis.",
      "Nem todo imprevisto pode ser evitado. Mas muitos podem ser resolvidos sem virar um problema para os noivos.",
    ],
  },
  {
    q: "Qual é o primeiro passo?",
    a: ["Uma conversa.", "Vocês contam o que já imaginaram, o que já resolveram e onde estão as maiores dúvidas. A partir daí conseguimos entender o projeto e indicar os próximos passos."],
  },
];

function Eyebrow({ children }) {
  return <p className="text-xs tracking-widest text-[#8f897c] font-mono mb-6">{children}</p>;
}

function Destaque({ children }) {
  return (
    <div className="font-serif text-2xl md:text-4xl text-[#efe7d7]" style={{ lineHeight: 1.25, letterSpacing: "-0.01em" }}>
      {children}
    </div>
  );
}

function Cta({ children, outline }) {
  return (
    <a
      href={WA}
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

const wrap = "max-w-5xl mx-auto px-6 py-20 md:py-28";
const body = "text-[#c9c2b3]";

export default function FamiliaRenda() {
  return (
    <main className="bg-[#17161c] text-[#efe7d7]">
      <section id="topo" className="relative min-h-[92vh] flex items-end px-6 md:px-10 pb-14 md:pb-20">
        <img src={PHOTO_HERO} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c10] via-[#0d0c10]/75 to-[#0d0c10]/10" />
        <div className="relative max-w-2xl pt-40">
          <p className="text-xs tracking-widest text-[#d9c9a8] font-mono mb-5">CASAMENTOS • ASSESSORIA • PRODUÇÃO</p>
          <h1 className="font-serif text-3xl md:text-5xl mb-6" style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            O dia de vocês acontece uma vez.
            <br />
            Nosso trabalho é cuidar de tudo o que existe ao redor dele.
          </h1>
          <div className="space-y-4 text-[#e4dcc8] max-w-xl mb-6" style={{ lineHeight: 1.7 }}>
            <p>Um casamento começa muito antes da cerimônia.</p>
            <p>
              Começa nas primeiras escolhas, nas conversas sobre orçamento, na procura pelo lugar certo, nas dúvidas que
              aparecem pelo caminho e em centenas de decisões que precisam funcionar juntas para que, no grande dia,
              vocês possam simplesmente estar presentes.
            </p>
            <p>
              A Renda & Filho planeja, coordena e produz casamentos de ponta a ponta, conectando fornecedores,
              cronograma, estrutura, convidados e todos os detalhes que transformam planejamento em experiência.
            </p>
          </div>
          <p className="font-serif text-xl md:text-2xl mb-8">Vocês vivem. A gente faz acontecer.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Cta>Quero conversar sobre meu casamento</Cta>
            <a href="#portfolio" className="text-[#e4dcc8] underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors">
              Conheça nosso trabalho
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

      <section aria-label="Autoridade" className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
          {prova.map((p) => (
            <div key={p.t} className="border-t border-white/15 pt-4">
              <h2 className="font-serif text-xl mb-2">{p.t}</h2>
              <p className={"text-sm " + body} style={{ lineHeight: 1.65 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="scroll-mt-14">
        <div className={wrap}>
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 items-start">
            <div>
              <Eyebrow>A HISTÓRIA</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl mb-8" style={{ lineHeight: 1.15 }}>
                Uma família que trabalha com eventos há mais de três décadas.
              </h2>
              <div className={"space-y-5 max-w-xl " + body} style={{ lineHeight: 1.75 }}>
                <p>A história da Renda & Filho começou muito antes do nome Renda & Filho existir.</p>
                <p>
                  <strong className="text-[#efe7d7] font-semibold">José Renda</strong> é publicitário de formação e
                  trabalha com eventos desde 1990. Ao longo de mais de três décadas, participou da realização de
                  milhares de eventos sociais e corporativos, construindo uma experiência que não se aprende apenas em
                  cursos ou planilhas: aquela que vem de acompanhar montagem, operação, fornecedores, imprevistos,
                  desmontagem e tudo aquilo que acontece nos bastidores enquanto, do outro lado, o evento precisa
                  parecer simples.
                </p>
                <p>Hoje, José está à frente da direção técnica das produções.</p>
                <p>
                  <strong className="text-[#efe7d7] font-semibold">Marcelo Renda</strong> cresceu próximo desse
                  universo e começou a trabalhar com eventos em 2008. Marketeiro e fotógrafo, construiu uma trajetória
                  que atravessa produção, fotografia, comunicação, experiência, planejamento e gestão de projetos. Como
                  fotógrafo, teve trabalhos expostos em galerias de 19 países e, na Renda & Filho, conduz principalmente
                  a direção artística e estratégica dos projetos.
                </p>
                <p>
                  Duas gerações acabaram formando uma combinação natural: de um lado, décadas de experiência
                  operacional; do outro, um olhar construído entre imagem, comunicação, experiência e gestão.
                </p>
              </div>
            </div>
            <img src={PHOTO_SOBRE} alt="" className="w-full aspect-[3/4] object-cover rounded-lg md:sticky md:top-20" />
          </div>
          <div className="mt-16 md:mt-24 max-w-3xl border-l border-[#c2410c] pl-6 md:pl-10">
            <Destaque>
              <p className="mb-6">Mas Renda & Filho não significa fazer as coisas “como sempre foram feitas”.</p>
              <p className={"text-lg md:text-xl mb-6 font-sans " + body} style={{ lineHeight: 1.7, letterSpacing: 0 }}>
                Significa carregar para cada novo projeto tudo aquilo que a experiência ensinou, e ainda começar cada
                casamento do zero.
              </p>
              <p className="text-[#c9c2b3]">Porque nenhum casal é igual ao anterior.</p>
              <p>E nenhum casamento deveria ser também.</p>
            </Destaque>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>NOSSO JEITO DE TRABALHAR</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-8" style={{ lineHeight: 1.15 }}>
            Antes de organizar um casamento, precisamos entender o que ele significa para vocês.
          </h2>
          <div className={"space-y-5 mb-14 " + body} style={{ lineHeight: 1.75 }}>
            <p>Número de convidados, orçamento, data e local são importantes. Mas não dizem tudo.</p>
            <p>
              Queremos entender como vocês imaginam esse dia. O que é indispensável. O que não combina com vocês. Onde
              vale investir mais. Onde podemos simplificar. O que preocupa. O que emociona. E como vocês gostariam de se
              sentir quando tudo finalmente começar.
            </p>
            <p>É a partir dessa conversa que o casamento ganha forma.</p>
            <p>
              Não trabalhamos tentando encaixar o casal em um pacote pré-definido. Construímos a produção a partir das
              necessidades reais de cada projeto, equilibrando desejo, orçamento, viabilidade e experiência dos
              convidados.
            </p>
          </div>
          <Destaque>
            <p>Primeiro entendemos o casamento.</p>
            <p className="text-[#c2410c]">Depois começamos a produzi-lo.</p>
          </Destaque>
        </div>
      </section>

      <section id="servicos" className="border-t border-white/10 scroll-mt-14">
        <div className={wrap}>
          <Eyebrow>O QUE FAZEMOS</Eyebrow>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 max-w-3xl" style={{ lineHeight: 1.12 }}>
            Do primeiro orçamento ao último fornecedor deixando o salão.
          </h2>
          <div className={"max-w-xl space-y-2 mb-14 " + body} style={{ lineHeight: 1.7 }}>
            <p>Vocês podem chegar até nós no começo da história ou quando parte dela já estiver resolvida.</p>
            <p>Por isso, nossa atuação se adapta ao momento de cada casal.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
            {servicos.map((s) => (
              <article key={s.t} className="border-t border-white/15 pt-6">
                <h3 className="font-serif text-2xl md:text-3xl mb-3">{s.t}</h3>
                <p className="text-[#efe7d7] font-medium mb-4" style={{ lineHeight: 1.5 }}>{s.s}</p>
                <div className={"space-y-3 " + body} style={{ lineHeight: 1.7 }}>
                  {s.p.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14">
            <Cta outline>Conte em que etapa vocês estão</Cta>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={wrap}>
          <Eyebrow>POR TRÁS DO EVENTO</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-8 max-w-3xl" style={{ lineHeight: 1.15 }}>
            Vocês veem a celebração. Nós enxergamos todas as engrenagens que precisam funcionar juntas.
          </h2>
          <div className={"max-w-xl space-y-2 mb-14 " + body} style={{ lineHeight: 1.7 }}>
            <p>Um casamento reúne dezenas de profissionais, horários, entregas, contratos e decisões diferentes.</p>
            <p>Nosso papel é transformar tudo isso em uma operação única.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {engrenagens.map((e) => (
              <div key={e.t} className="border-t border-white/15 pt-4">
                <h3 className="text-lg font-semibold mb-2">{e.t}</h3>
                <p className={"text-sm " + body} style={{ lineHeight: 1.7 }}>{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="border-t border-white/10 scroll-mt-14">
        <div className={wrap}>
          <Eyebrow>COMO FUNCIONA</Eyebrow>
          <h2 className="font-serif text-3xl md:text-5xl mb-16 max-w-3xl" style={{ lineHeight: 1.12 }}>
            Do primeiro café ao último abraço da noite.
          </h2>
          <ol className="space-y-14">
            {jornada.map((j) => (
              <li key={j.n} className="grid md:grid-cols-[80px_1fr] gap-3 md:gap-8">
                <span aria-hidden="true" className="font-serif text-5xl text-[#c2410c]">{j.n}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{j.t}</h3>
                  <p className="font-serif text-xl md:text-2xl mb-4" style={{ lineHeight: 1.3 }}>{j.s}</p>
                  <div className={"space-y-3 max-w-xl " + body} style={{ lineHeight: 1.7 }}>
                    {j.p.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-20 max-w-3xl border-l border-[#c2410c] pl-6 md:pl-10">
            <Destaque>
              <p>Um bom casamento parece espontâneo para quem está vivendo.</p>
              <p className="text-[#c9c2b3]">Isso normalmente significa que muita coisa foi planejada nos bastidores.</p>
            </Destaque>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={wrap}>
          <Eyebrow>RENDA & FILHO</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-8 max-w-3xl" style={{ lineHeight: 1.15 }}>
            Experiência para prever. Estrutura para resolver. Sensibilidade para não transformar o casamento em uma
            planilha.
          </h2>
          <div className={"space-y-5 max-w-xl mb-14 " + body} style={{ lineHeight: 1.75 }}>
            <p>Organização é indispensável. Mas casamento não é apenas operação.</p>
            <p>
              Existe uma família reunida, pessoas viajando para estar ali, expectativas construídas durante meses e
              momentos que não podem simplesmente ser repetidos na semana seguinte.
            </p>
            <p>É por isso que nosso trabalho combina duas perspectivas.</p>
            <p>
              A primeira é técnica: cronogramas, fornecedores, logística, estrutura, responsabilidades, alternativas e
              prevenção de riscos.
            </p>
            <p>
              A segunda é humana: entender o que realmente importa para o casal e proteger a experiência que foi
              planejada.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {pilares.map((p) => (
              <div key={p.t} className="border-t border-white/15 pt-4">
                <h3 className="font-serif text-2xl mb-3">{p.t}</h3>
                <p className={body} style={{ lineHeight: 1.7 }}>{p.d}</p>
              </div>
            ))}
          </div>
          <Destaque>
            <p>Se tudo correr exatamente como planejado, ótimo.</p>
            <p className="text-[#c2410c]">Se não correr, é justamente por isso que estaremos lá.</p>
          </Destaque>
        </div>
      </section>

      <section id="portfolio" className="border-t border-white/10 scroll-mt-14">
        <div className={wrap}>
          <Eyebrow>HISTÓRIAS QUE JÁ PASSARAM POR AQUI</Eyebrow>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 max-w-3xl" style={{ lineHeight: 1.12 }}>
            Casamentos são feitos de muito mais do que a cerimônia.
          </h2>
          <div className={"space-y-4 max-w-xl mb-12 " + body} style={{ lineHeight: 1.75 }}>
            <p>
              São feitos do lugar escolhido, das pessoas que atravessaram cidades para estar ali, das crianças correndo
              pelo salão, dos animais que fazem parte da família, da arquitetura, da comida, da música, dos detalhes e
              de pequenas cenas que ninguém colocou no cronograma.
            </p>
            <p>Cada casamento que produzimos tem uma lógica própria.</p>
            <p>Aqui estão algumas delas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <figure className="md:col-span-2">
              <img src={PHOTO_P1} alt="Casal em frente a um prédio histórico no centro de São Paulo" className="w-full aspect-[4/3] object-cover rounded-lg mb-3" />
              <figcaption className="text-sm text-[#8f897c]">Bruno e Denise, ensaio no centro histórico de São Paulo</figcaption>
            </figure>
            <figure>
              <img src={PHOTO_P2} alt="Cachorro vestido para o casamento, no colo da noiva" className="w-full aspect-[3/4] object-cover rounded-lg mb-3" />
              <figcaption className="text-sm text-[#8f897c]">Letícia e Thiago: os animais também fazem parte da família</figcaption>
            </figure>
            <figure>
              <img src={PHOTO_P3} alt="Bebê sorrindo em um banco de igreja" className="w-full aspect-[3/4] object-cover rounded-lg mb-3" />
              <figcaption className="text-sm text-[#8f897c]">As crianças e a família reunida</figcaption>
            </figure>
            <figure className="md:col-span-2">
              <img src={PHOTO_P4} alt="Bebê sentado diante de um altar" className="w-full aspect-[4/3] object-cover rounded-lg mb-3" />
              <figcaption className="text-sm text-[#8f897c]">Uma celebração em família</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10" style={{ lineHeight: 1.15 }}>
            Talvez vocês estejam procurando a Renda & Filho se...
          </h2>
          <ul className="divide-y divide-white/10 border-y border-white/10 mb-14">
            {paraQuem.map((t) => (
              <li key={t} className={"py-4 " + body} style={{ lineHeight: 1.6 }}>{t}</li>
            ))}
          </ul>
          <Destaque>
            <p>Não precisamos substituir o envolvimento de vocês.</p>
            <p className="text-[#c2410c]">Precisamos tornar esse envolvimento mais leve.</p>
          </Destaque>
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
          <Eyebrow>O PRIMEIRO PASSO É SIMPLES</Eyebrow>
          <h2 className="font-serif text-4xl md:text-6xl mb-8" style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Antes do casamento, um café.
          </h2>
          <div className={"space-y-4 max-w-lg mx-auto mb-10 " + body} style={{ lineHeight: 1.75 }}>
            <p>Contem para a gente o que vocês estão imaginando.</p>
            <p>Não é preciso chegar com tudo decidido: na verdade, normalmente ninguém chega.</p>
            <p>
              Queremos saber quem são vocês, quando pretendem casar, o que já está definido e onde estão as maiores
              dúvidas.
            </p>
            <p>A partir daí, começamos a entender o projeto.</p>
          </div>
          <Cta>Conversar pelo WhatsApp</Cta>
          <p className="text-sm text-[#8f897c] mt-6">
            Sem formulário interminável. A primeira conversa é uma conversa mesmo.
          </p>
        </div>
      </section>
    </main>
  );
}
