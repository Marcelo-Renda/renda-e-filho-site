"use client";

import { useState } from "react";
import Link from "next/link";

const PHOTO_HERO =
  "https://lh3.googleusercontent.com/d/1TvArMOepXoMTn55gpDZ3xU-sTCj7619z=w1600";
const PHOTO_1 =
  "https://lh3.googleusercontent.com/d/12pBowFz4Il4dyDaci_RBZVKSh4iyGtZr=w900";
const PHOTO_2 =
  "https://lh3.googleusercontent.com/d/1SsvM3ICP58YcmxVgcBgbjF93jQuOnGFo=w900";
const PHOTO_3 =
  "https://lh3.googleusercontent.com/d/1yfatS_3RWOgx2rCLD0JobXW20b_9d9d3=w900";

const WA =
  "https://wa.me/5511960684469?text=Ol%C3%A1!%20Encontrei%20a%20Elo%20Formaturas%20pelo%20site%20e%20queria%20conversar%20sobre%20uma%20formatura.";

const navLinks = [
  { label: "O que é a Elo", href: "#elo" },
  { label: "Para quem", href: "#escolas" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Perguntas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const etapas = [
  {
    t: "Educação Infantil",
    d: "A primeira beca, o primeiro diploma e provavelmente uma das fotografias que os pais vão guardar por décadas. Podemos acompanhar a escola ao longo do ano, registrar atividades e celebrações, e fazer com que as crianças já conheçam nossa equipe quando chegar o grande dia.",
  },
  {
    t: "Ensino Fundamental e Médio",
    d: "Cerimônia, beca, fotografia, filme, festa e experiências construídas de acordo com a idade e com o perfil de cada escola.",
  },
  {
    t: "Ensino Técnico",
    d: "Da organização da turma à colação, com estrutura completa para cerimônia, registros e celebração.",
  },
  {
    t: "Ensino Superior",
    d: "Ensaios, eventos durante a graduação, colação de grau, baile e tudo aquilo que a turma quiser construir até chegar ao diploma.",
  },
];

const servicos = [
  { t: "Cerimônia", d: "Planejamento e produção da colação, organização e identificação dos formandos, roteiro, protocolo, ensaio, mestre de cerimônias e coordenação de todas as etapas." },
  { t: "Beca & formatura", d: "Becas, capelos, canudos e demais itens necessários para caracterização e realização da cerimônia." },
  { t: "Foto & filme", d: "Retratos individuais, fotografias da turma, registros com familiares, cobertura completa da cerimônia e da festa, vídeo e diferentes possibilidades de entrega." },
  { t: "Ensaios", d: "Ensaios individuais e coletivos, fotos de turma, ensaios temáticos e registros especiais durante a jornada, inclusive marcos intermediários de cursos." },
  { t: "Estrutura", d: "Palco, som, iluminação, projeção, telas, estruturas técnicas e os recursos necessários para o tamanho e formato do evento." },
  { t: "Cerimonial & equipe", d: "Mestre de cerimônias, recepção, operação técnica, coordenação, organização dos alunos e profissionais dimensionados para cada projeto." },
  { t: "Festa & baile", d: "Do espaço à pista. Produção, som, luz, decoração, alimentação, bebidas, atrações e demais fornecedores conforme o projeto." },
  { t: "Pré-eventos", d: "Confraternizações, festas, encontros, contagens regressivas e outros momentos que a turma queira criar antes da formatura." },
  { t: "Artistas & atrações", d: "Pesquisa, contratação e intermediação de DJs, bandas, artistas e atrações de acordo com perfil, orçamento e disponibilidade." },
  { t: "Álbuns & memórias", d: "Fotografias, álbuns e produtos desenvolvidos para transformar o registro da formatura em algo que continue existindo depois dela." },
];

const jornada = [
  { t: "Conversa", d: "Escola ou comissão conta para a gente o que precisa e quem vai se formar." },
  { t: "Projeto", d: "Construímos formato, serviços, calendário e orçamento." },
  { t: "Adesão", d: "Quando o modelo exigir adesão individual, estruturamos as condições comerciais e o processo para os formandos." },
  { t: "Preparação", d: "Organizamos informações, alunos, ensaios, fornecedores e tudo que precisa estar pronto." },
  { t: "Celebrações", d: "Ensaios e pré-eventos podem acompanhar a turma antes da cerimônia principal." },
  { t: "Formatura", d: "A operação passa para nossas mãos. É hora de vocês viverem." },
  { t: "Memórias", d: "Foto, filme e álbum continuam contando essa história depois que o evento termina." },
];

const faq = [
  {
    q: "A Elo faz apenas o baile ou a formatura completa?",
    a: "Podemos cuidar da formatura completa ou de partes específicas do projeto. Cerimônia, estrutura, fotografia, vídeo, ensaios, festa, pré-eventos e outras necessidades podem ser combinadas de acordo com a escola ou turma.",
  },
  {
    q: "Vocês organizam a colação de grau?",
    a: "Sim. Podemos cuidar de toda a operação da cerimônia, incluindo planejamento, identificação e organização dos formandos, becas, capelos, canudos, roteiro, mestre de cerimônias, estrutura, equipe técnica, fotografia e vídeo.",
  },
  {
    q: "Vocês fazem ensaio fotográfico?",
    a: "Sim. Podemos realizar ensaios individuais, de turma, temáticos e registros em diferentes momentos da jornada. Em cursos mais longos, isso também pode incluir marcos intermediários da formação.",
  },
  {
    q: "Foto e vídeo fazem parte da formatura?",
    a: "Sim. Foto e vídeo são parte central do nosso trabalho e podem acompanhar ensaios, cerimônia, festa e outros momentos contratados.",
  },
  {
    q: "Vocês organizam festas e pré-eventos?",
    a: "Sim. Podemos produzir festas, confraternizações e outras experiências antes da formatura, incluindo espaço, estrutura, fornecedores e contratação ou intermediação de atrações.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Depende do projeto e da antecedência da contratação. Podemos estruturar diferentes condições, incluindo parcelamento durante o período de preparação, cartão ou pagamento à vista. As possibilidades são apresentadas na proposta.",
  },
  {
    q: "Existem condições especiais para a comissão?",
    a: "Podem existir. Condições para a comissão podem ser construídas conforme tamanho da turma, formato do projeto e número de adesões.",
  },
  {
    q: "Vocês trabalham apenas com faculdades?",
    a: "Não. Atendemos desde a Educação Infantil até o Ensino Superior, incluindo Ensino Fundamental, Médio e Técnico.",
  },
  {
    q: "Vocês atendem fora de São Paulo?",
    a: "Sim. Nossa principal área de atuação é São Paulo, mas podemos realizar projetos em todo o Brasil mediante planejamento da operação e logística.",
  },
  {
    q: "A escola pode contratar diretamente a Elo?",
    a: "Sim. Podemos trabalhar diretamente com instituições de ensino ou com comissões e representantes das turmas.",
  },
];

function Eyebrow({ children }) {
  return <p className="text-xs tracking-widest text-[#7FA8B8] font-mono mb-6">{children}</p>;
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
          : "inline-block bg-[#F5A623] text-[#0B1F2A] font-medium px-7 py-3 rounded-full hover:brightness-95 transition"
      }
    >
      {children}
    </a>
  );
}

const wrap = "max-w-3xl mx-auto px-6 py-20 md:py-28";
const body = "text-[#B9CDD6]";

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
                  (active === i ? "bg-[#F5A623]" : "bg-white/25 hover:bg-white/50")
                }
              />
              <div className={"h-px flex-1 " + (i === jornada.length - 1 ? "bg-transparent" : "bg-white/15")} />
            </div>
            <span
              onClick={() => setActive(i)}
              className={"mt-4 text-xs cursor-pointer " + (active === i ? "text-white" : "text-[#7FA8B8]")}
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
              <span className="w-3 h-3 rounded-full bg-[#F5A623] shrink-0 mt-1.5" />
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

export default function EloFormaturas() {
  return (
    <main className="bg-[#0B1F2A] text-white">
      <section
        id="topo"
        className="relative min-h-[92vh] flex items-end px-6 md:px-10 pb-14 md:pb-20"
      >
        <img src={PHOTO_HERO} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-[#0B1F2A]/75 to-[#0B1F2A]/15" />
        <div className="relative max-w-xl">
          <p className="text-xs tracking-widest text-[#F5A623] font-mono mb-5">ELO FORMATURAS</p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6" style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Todo fim de ciclo merece ser celebrado.
          </h1>
          <p className="text-white/80 max-w-md mb-8" style={{ lineHeight: 1.6 }}>
            Da primeira beca à graduação, cuidamos de tudo o que transforma
            uma conquista em formatura.
          </p>
          <Cta>Quero organizar uma formatura</Cta>
          <p className="text-sm text-[#7FA8B8] mt-8">
            Cerimônia • Beca • Foto &amp; Filme • Ensaios • Festa • Estrutura • Produção
          </p>
        </div>
      </section>

      <nav aria-label="Seções da página" className="sticky top-0 z-10 bg-[#0B1F2A]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-6 overflow-x-auto text-sm py-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[#B9CDD6] hover:text-white transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noreferrer" className="ml-auto shrink-0 bg-[#F5A623] text-[#0B1F2A] font-medium px-4 py-1.5 rounded-full hover:brightness-95 transition whitespace-nowrap">
            Falar com a Elo
          </a>
        </div>
      </nav>

      <section id="elo" className="border-b border-white/10 scroll-mt-14">
        <div className={wrap}>
          <Eyebrow>O QUE É A ELO</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Entre o que termina e tudo o que começa depois.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>
              Uma formatura pode celebrar o fim da Educação Infantil, a
              conclusão da escola, um curso técnico ou anos de faculdade.
            </p>
            <p>A idade muda. A cerimônia muda. O tamanho do evento muda.</p>
            <p>Mas existe algo em comum em todas elas: chegar até ali significou alguma coisa.</p>
            <p>
              Para quem se forma. Para a família. Para os amigos. Para os
              professores. Para a escola.
            </p>
            <p className="text-white font-medium">
              A Elo existe para cuidar desse momento por inteiro. Do
              planejamento ao palco. Da beca ao baile. Da fotografia ao
              álbum.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className={wrap}>
          <Eyebrow>NOSSA HISTÓRIA</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            A Elo é nova. Nossa experiência com formaturas, não.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>Já estávamos fazendo tudo isso antes de existir Elo no nome.</p>
            <p>
              A Elo nasceu depois de anos trabalhando nos bastidores de
              formaturas, cerimônias e grandes eventos. Nossa equipe já
              participou da realização de dezenas de colações de grau,
              inclusive em espaços emblemáticos como a Sala São Paulo, além
              de formaturas escolares e universitárias na capital, Grande
              São Paulo e interior.
            </p>
            <p>
              Durante esse tempo, aprendemos o que significa fazer uma
              formatura acontecer de verdade. Organizar formandos. Preparar
              becas, capelos e canudos. Identificar cada aluno. Coordenar
              entradas. Operar palco, som e luz. Conduzir o cerimonial.
              Fotografar. Filmar. Resolver imprevistos. E garantir que,
              enquanto tudo isso acontece, quem está se formando possa
              simplesmente viver aquele momento.
            </p>
            <p className="font-serif text-xl md:text-2xl text-white">
              Nome novo. Experiência de quem já estava lá.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>PARA CADA CONQUISTA</Eyebrow>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 max-w-2xl" style={{ lineHeight: 1.12 }}>
            Da escolinha à faculdade
          </h2>
          <p className={"max-w-xl mb-14 " + body} style={{ lineHeight: 1.7 }}>
            Algumas formaturas acontecem aos cinco. Outras, aos vinte e
            cinco. E algumas pessoas ainda terão várias depois dessas. A Elo
            pode estar em todas elas.
          </p>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
            {etapas.map((e) => (
              <article key={e.t} className="border-t border-white/15 pt-6">
                <h3 className="font-serif text-2xl mb-3">{e.t}</h3>
                <p className={body} style={{ lineHeight: 1.7 }}>{e.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="escolas" className="border-b border-white/10 scroll-mt-14">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>PARA QUEM É A ELO</Eyebrow>
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4" style={{ lineHeight: 1.3 }}>
                Para instituições de ensino
              </h3>
              <p className="text-white font-medium mb-4">
                Vocês cuidam da formação. A gente cuida da formatura.
              </p>
              <div className={"space-y-4 mb-6 " + body} style={{ lineHeight: 1.7 }}>
                <p>
                  Uma escola não deveria precisar transformar sua equipe
                  pedagógica em produtora de eventos para realizar uma boa
                  formatura.
                </p>
                <p>
                  Planejamento, comunicação, organização dos alunos,
                  identificação, ensaios, fotografia, becas, cerimônia,
                  estrutura, equipe técnica e tudo aquilo que o projeto
                  exigir. Podemos entrar apenas na formatura ou construir um
                  relacionamento que acompanhe os estudantes ao longo do
                  ano, principalmente com crianças, para que no dia da
                  fotografia não haja um estranho atrás da câmera.
                </p>
              </div>
              <Cta outline>Represento uma escola</Cta>
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4" style={{ lineHeight: 1.3 }}>
                Para comissões
              </h3>
              <p className="text-white font-medium mb-4">
                Vocês representam a turma. Não precisam produzir tudo sozinhos.
              </p>
              <div className={"space-y-4 mb-6 " + body} style={{ lineHeight: 1.7 }}>
                <p>
                  Uma comissão precisa ouvir dezenas de pessoas, transformar
                  vontades diferentes em decisões e ainda encontrar uma
                  maneira de fazer tudo caber no orçamento. A gente ajuda no
                  resto.
                </p>
                <p>
                  Começamos entendendo o tamanho da turma, o que vocês
                  imaginam, quanto tempo temos e quais experiências querem
                  construir. A partir daí, podemos cuidar de uma parte
                  específica ou montar a jornada completa.
                </p>
              </div>
              <Cta outline>Sou da comissão</Cta>
            </div>
          </div>
          <p className="font-serif text-xl md:text-2xl text-center mt-16">
            No grande dia, a comissão também merece ser só formando.
          </p>
        </div>
      </section>

      <section id="servicos" className="border-b border-white/10 scroll-mt-14">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>O QUE UMA FORMATURA PODE PRECISAR</Eyebrow>
          <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-2xl" style={{ lineHeight: 1.12 }}>
            Do primeiro ensaio à última música
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {servicos.map((s) => (
              <div key={s.t} className="border-t border-white/15 pt-4">
                <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
                <p className={"text-sm " + body} style={{ lineHeight: 1.65 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <p className="text-white font-medium mt-14">
            Não encontrou alguma coisa? Pergunta. Provavelmente fazemos. Se o
            projeto pedir algo diferente, estudamos como fazer.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className={wrap}>
          <Eyebrow>REGISTRO</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            A festa acaba. A fotografia não.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>
              Foto e vídeo fazem parte do nosso jeito de pensar uma
              formatura, porque não estamos produzindo apenas um evento.
              Estamos produzindo um daqueles raros dias em que pessoas que
              fizeram parte de uma fase inteira da vida conseguem estar
              reunidas no mesmo lugar.
            </p>
            <p>
              Fotografamos o formando, a turma, a cerimônia, os amigos, a
              família, a festa e tudo aquilo que acontece entre essas
              coisas. Do retrato oficial à fotografia que ninguém percebeu
              que estava sendo feita.
            </p>
            <p className="text-white font-medium">
              Depois, essa história pode continuar em fotografias digitais,
              filmes e álbuns pensados para guardar aquele ciclo.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className={wrap}>
          <Eyebrow>POR TRÁS DO PALCO</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Quanto maior o evento, mais importante é aquilo que ninguém vê.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>
              Uma cerimônia com dezenas ou centenas de formandos exige muito
              mais do que um palco bonito. Existe credenciamento,
              identificação, ordem de entrada, beca, canudo, fotografia,
              família, cerimonial, áudio, vídeo, iluminação, equipe,
              horário, protocolo. E tudo precisa conversar.
            </p>
            <p>
              Nossa experiência vem justamente de operações assim, de
              formaturas escolares a grandes colações e eventos com mais de
              mil participantes.
            </p>
            <p className="text-white font-medium">
              O público vê a cerimônia. Nós precisamos enxergar a operação
              inteira.
            </p>
          </div>
        </div>
      </section>

      <section id="processo" className="border-b border-white/10 scroll-mt-14">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>COMO FUNCIONA</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-16 max-w-2xl" style={{ lineHeight: 1.2 }}>
            Conversa → Projeto → Adesão → Preparação → Celebrações → Formatura → Memórias
          </h2>
          <Timeline />
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className={wrap}>
          <Eyebrow>INVESTIMENTO</Eyebrow>
          <h2 className="font-serif text-2xl md:text-3xl mb-8" style={{ lineHeight: 1.3 }}>
            Cada turma tem um tamanho. Cada projeto, uma conta.
          </h2>
          <div className={"space-y-5 " + body} style={{ lineHeight: 1.8 }}>
            <p>
              As condições dependem dos serviços escolhidos, número de
              formandos, antecedência e modelo do projeto.
            </p>
            <p>
              Podemos trabalhar com diferentes possibilidades de pagamento,
              incluindo parcelamento ao longo do período de preparação,
              cartão e pagamento à vista, conforme as condições da proposta.
              Para comissões, também podemos construir condições comerciais
              relacionadas à adesão da turma.
            </p>
            <p className="text-white font-medium">
              Quanto antes a conversa começa, mais possibilidades temos para
              organizar o projeto e distribuir o investimento ao longo do
              tempo.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className={wrap + " text-center"}>
          <h2 className="font-serif text-2xl md:text-3xl mb-4">São Paulo e muito além</h2>
          <p className={body} style={{ lineHeight: 1.7 }}>
            Nossa principal operação está em São Paulo, com experiência na
            capital, Grande São Paulo e interior. Mas a Elo pode realizar
            projetos em todo o Brasil. Para eventos fora da nossa região
            principal, estruturamos logística, equipe e operação de acordo
            com o projeto.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>NOSSA HISTÓRIA ESTÁ COMEÇANDO</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-10 max-w-2xl" style={{ lineHeight: 1.2 }}>
            A primeira turma voltou.
          </h2>
          <p className={"max-w-xl mb-12 " + body} style={{ lineHeight: 1.8 }}>
            Nossa primeira formatura como Elo aconteceu em 2025. Em 2026,
            estaremos juntos novamente. Para uma empresa que está começando
            a escrever sua própria história, talvez esse seja o sinal de
            que começamos do jeito certo.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <img src={PHOTO_1} alt="Colégio Êxitus, formatura Elo" className="w-full aspect-[3/4] object-cover rounded-lg" />
            <img src={PHOTO_2} alt="Colégio Êxitus, formatura Elo" className="w-full aspect-[3/4] object-cover rounded-lg" />
            <img src={PHOTO_3} alt="Colégio Êxitus, formatura Elo" className="w-full aspect-[3/4] object-cover rounded-lg" />
          </div>
          <p className="text-sm text-[#7FA8B8]">Colégio Êxitus, primeira formatura Elo, 2025</p>
          <p className="font-serif text-xl md:text-2xl text-white mt-10">
            A Elo é nova. A experiência da equipe vem de muito antes.
          </p>
        </div>
      </section>

      <section id="faq" className="border-b border-white/10 scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow>PERGUNTAS FREQUENTES</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-10" style={{ lineHeight: 1.15 }}>
            O que você costuma perguntar
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-lg font-medium">
                  {f.q}
                  <span className="text-[#F5A623] text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className={"mt-3 " + body} style={{ lineHeight: 1.7 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-14">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <Eyebrow>ELO FORMATURAS</Eyebrow>
          <h2 className="font-serif text-4xl md:text-6xl mb-8" style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Vocês cuidaram de chegar até aqui.
            <br />
            Agora deixa a gente cuidar da comemoração.
          </h2>
          <p className={"mb-10 max-w-lg mx-auto " + body} style={{ lineHeight: 1.7 }}>
            Se você representa uma escola, uma comissão ou uma turma, conta
            para a gente onde vocês estão, quando será a formatura e
            quantas pessoas aproximadamente vão se formar.
          </p>
          <Cta>Quero conversar sobre minha formatura</Cta>
          <div className="flex gap-6 justify-center mt-8 text-sm text-[#7FA8B8]">
            <a href={WA} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Represento uma escola
            </a>
            <a href={WA} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Faço parte de uma comissão
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
