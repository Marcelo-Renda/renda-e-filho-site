import Link from "next/link";

const PHOTO_HERO =
   "https://lh3.googleusercontent.com/d/1kcdawwS4aB01ftTcmQCr0yn1nIy1b9aB=w1600";
const PHOTO_HISTORIA =
   "https://lh3.googleusercontent.com/d/10Hy1knYgQwxqjPi4av5sPrLAfpHs6Rdo=w1200";
const PHOTO_CONTINUIDADE =
   "https://lh3.googleusercontent.com/d/1lk2IIC9x301_lWpGuLn4hdMt7rAlwuut=w900";
const PHOTO_PORTFOLIO_1 =
   "https://lh3.googleusercontent.com/d/1b3wT6U5WFDUfzhq_Gy158VNOAf8lJgJK=w900";
const PHOTO_PORTFOLIO_2 =
   "https://lh3.googleusercontent.com/d/1DtwQPlJrQphbPwKGRbjjpu6rShs791zG=w900";
const PHOTO_PORTFOLIO_3 =
   "https://lh3.googleusercontent.com/d/1R6yPR5WH6Y_jGCkEw0USNvC_iun2u_M2=w900";

const navLinks = [
 { label: "Historia", href: "#historia" },
 { label: "Casamentos", href: "#servicos" },
 { label: "Como funciona", href: "#metodo" },
 { label: "Portfolio", href: "#portfolio" },
 { label: "Perguntas", href: "#perguntas" },
 ];
const metodo = [
 {
      n: "1",
      title: "Uma conversa sem letra miúda",
      text: "Antes de fechar qualquer coisa, contamos exatamente como funciona: o que está incluso, quanto tempo dura a sessão, e tiramos toda dúvida sobre forma de pagamento. Nada de descobrir surpresa depois.",
    },
 {
      n: "2",
      title: "Um local escolhido com carinho",
      text: "Preferimos um lugar bem pensado a três locais diferentes correndo contra o relógio. Vocês escolhem o cenário que faz sentido pra história de vocês, e ajudamos a decidir se tiverem dúvida.",
    },
 {
      n: "3",
      title: "O dia da sessão, sem pressa",
      text: "As sessões normalmente duram de três a quatro horas, sempre em horário de luz boa, nunca sol a pino. Vocês podem sugerir poses e ideias: as fotos que mais emocionam sempre têm um pouco de vocês na construção.",
    },
 {
      n: "4",
      title: "O clima manda no calendário",
      text: "Não fotografamos com chuva forte ou céu muito fechado. Se o tempo não colaborar, remarcamos sem custo. Preferimos a data certa a arriscar fotos que vocês não vão amar depois.",
    },
 ];

const perguntas = [
 {
      q: "Dá pra parcelar?",
      a: "Sim. Conversamos sobre a forma de pagamento que funciona melhor pra vocês logo na primeira conversa, antes de fechar qualquer coisa.",
    },
 {
      q: "E se chover no dia do ensaio?",
      a: "Remarcamos sem custo nenhum. Um bom ensaio pede sol, ou no máximo sol entre nuvens, então preferimos esperar o clima ideal a arriscar o resultado.",
    },
 {
      q: "Posso levar meu pet?",
      a: "Pode, e costuma dar um toque especial! Só pedimos que alguém fique responsável por ele durante a sessão, com ração e água à mão.",
    },
 {
      q: "Quantas trocas de roupa posso fazer?",
      a: "Recomendamos de duas a três: um look mais casual e um mais formal costuma funcionar bem. Separem tudo com calma, um dia antes.",
    },
 {
      q: "Vocês fotografam só o ensaio, ou o casamento inteiro?",
      a: "Os dois. Muitos casais começam com o pré-wedding e seguem com a gente pra cerimônia e festa, mas cada um pode ser contratado separadamente.",
    },
 ];

export default function FamiliaRenda() {

 (
      <main className="bg-[#17161c] text-[#efe7d7]">
        <section
         id="topo"
         className="relative min-h-[92vh] flex items-end px-6 md:px-10 pb-16 md:pb-20"
       >
                  <img
           src={PHOTO_HERO}
           alt=""
           className="absolute inset-0 w-full h-full object-cover"
         />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c10] via-[#0d0c10]/40 to-[#0d0c10]/10" />
                    <div className="relative max-w-2xl">
                      <p className="text-sm text-[#d9c9a8] mb-5">
                        Fotografia de casamento em São Paulo
           </p>
           <h1
             className="font-serif text-4xl md:text-6xl mb-6"
             style={{ lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            O dia de vocês, registrado por quem entende do assunto há três
            gerações.
                       </h1>
          <p className="text-[#e4dcc8] text-lg max-w-xl mb-8" style={{ lineHeight: 1.6 }}>
            Da primeira câmera em casa, em 1986, até hoje na Avenida
            Paulista: seguimos sendo a mesma família fotografando a sua.
                       </p>
          <a
            href="https://wa.me/5511960684469"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#c2410c] text-white font-medium px-7 py-3 rounded-full hover:bg-[#a8360a] transition-colors"
          >
                         Vamos conversar sobre o seu casamento
          </a>
        </div>
      </section>

      <nav className="sticky top-0 z-10 bg-[#17161c]/95 backdrop-blur border-b border-white/10">
                     <div className="max-w-5xl mx-auto px-6 flex gap-6 overflow-x-auto text-sm py-4">
                       {navLinks.map((l) => (
                                    <a
                                                   key={l.href}
              href={l.href}
              className="text-[#c9c2b3] hover:text-[#efe7d7] transition-colors whitespace-nowrap"
            >
                             {l.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="historia" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
                   <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-center">
                     <div>
                       <p className="text-xs tracking-widest text-[#8f897c] font-mono mb-6">
                         A HISTÓRIA
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ lineHeight: 1.15 }}>
              Uma família, não um freelancer
            </h2>
            <div className="space-y-4 text-[#c9c2b3]" style={{ lineHeight: 1.75 }}>
              <p>
                               José e Sandra começaram fotografando casamentos em 1986, com
                o equipamento que tinham em casa. Passaram pela tradicional
                Rua das Noivas, ponto de referência pra noivas paulistanas
                escolhendo fornecedores, e hoje o escritório fica na Avenida
                Paulista.
                               </p>
              <p>
                                 Marcelo nasceu e cresceu rodeado de câmeras, e se juntou
                naturalmente ao ofício. Hoje é ele quem assina a maior parte
                das sessões, com a mesma atenção que aprendeu vendo os pais
                trabalharem.
                               </p>
              <p>
                                 Isso muda uma coisa pra vocês: quando contratam a Família
                Renda, não estão contratando alguém que pode sumir do
                mercado ano que vem. Estão contratando quase quatro décadas
                de trabalho, com nome e endereço.
                               </p>
            </div>
          </div>
          <div className="relative">
                             <img
              src={PHOTO_HISTORIA}
              alt=""
              className="w-full aspect-[3/4] object-cover rounded-lg"
            />
                         </div>
        </div>
      </section>

      <section id="servicos" className="border-t border-white/10">
                       <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
                         <p className="text-xs tracking-widest text-[#8f897c] font-mono mb-6">
                           O QUE FAZEMOS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-10" style={{ lineHeight: 1.15 }}>
            Casamento é o ponto de partida
          </h2>

          <div className="grid md:grid-cols-[2fr_1fr] gap-6 mb-6 pb-10 border-b border-white/10">
                         <div>
                           <h3 className="font-serif text-2xl md:text-3xl mb-3">Casamento</h3>
              <p className="text-[#c9c2b3] max-w-xl" style={{ lineHeight: 1.7 }}>
                Cobertura completa da cerimônia e da festa: making of,
                                 chegada, cerimônia, discursos, primeira dança, festa até o
                fim. O dia inteiro, do começo ao último brinde.
                               </p>
            </div>
            <div>
                               <h3 className="font-serif text-2xl md:text-3xl mb-3">Pré-wedding</h3>
              <p className="text-[#c9c2b3]" style={{ lineHeight: 1.7 }}>
                Um ensaio antes do grande dia, no lugar que vocês escolherem,
                                 pra soltar o corpo na frente da câmera antes da festa.
                               </p>
            </div>
          </div>

          <p className="text-[#8f897c] mb-3" style={{ lineHeight: 1.7 }}>
            E depois do sim? Continuamos ao lado da história de vocês:
                      </p>
          <p className="text-[#c9c2b3]" style={{ lineHeight: 1.7 }}>
            gestante, chá revelação, aniversário de um aninho, book de
            família. Fotografamos a mesma família em capítulos diferentes,
                         porque foi assim que a nossa também cresceu.
                       </p>
        </div>
      </section>

      <section id="metodo" className="border-t border-white/10">
                     <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
                       <p className="text-xs tracking-widest text-[#8f897c] font-mono mb-6">
                         COMO FUNCIONA
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-14" style={{ lineHeight: 1.15 }}>
            Do primeiro café até a entrega
          </h2>
          <div className="space-y-12">
                         {metodo.map((m) => (
                                        <div key={m.n} className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-8">
                                          <span className="font-serif text-5xl text-[#c2410c]">{m.n}</span>
                                                     <div>
                                            <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
                                                       <p className="text-[#c9c2b3] max-w-xl" style={{ lineHeight: 1.7 }}>
                                                         {m.text}
                                                       </p>
                                                     </div>
                                                   </div>
                                                 ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="border-t border-white/10">
                   <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
                     <p className="text-xs tracking-widest text-[#8f897c] font-mono mb-6">
                       PORTFÓLIO
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-12" style={{ lineHeight: 1.15 }}>
            Alguns dos nossos casais
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
                         <figure className="md:col-span-2">
                           <img
                src={PHOTO_PORTFOLIO_1}
                alt=""
                className="w-full aspect-[4/3] object-cover rounded-lg mb-3"
              />
                               <figcaption className="text-sm text-[#8f897c]">
                                 Bruno e Denise, centro histórico de São Paulo
              </figcaption>
            </figure>
            <figure>
                               <img
                src={PHOTO_PORTFOLIO_2}
                alt=""
                className="w-full aspect-[3/4] object-cover rounded-lg mb-3"
              />
                               <figcaption className="text-sm text-[#8f897c]">
                                 Letícia e Thiago, no dia do sim
              </figcaption>
            </figure>
                             <figure>
                               <img
                                 src={PHOTO_CONTINUIDADE}
                alt=""
                className="w-full aspect-[3/4] object-cover rounded-lg mb-3"
              />
                               <figcaption className="text-sm text-[#8f897c]">
                                 Um dos capítulos seguintes: fotografia de família
              </figcaption>
            </figure>
            <figure className="md:col-span-2">
                               <img
                src={PHOTO_PORTFOLIO_3}
                alt=""
                className="w-full aspect-[4/3] object-cover rounded-lg mb-3"
              />
                               <figcaption className="text-sm text-[#8f897c]">
                                 Um novo capítulo em família
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="perguntas" className="border-t border-white/10">
                         <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
                           <p className="text-xs tracking-widest text-[#8f897c] font-mono mb-6">
                             PERGUNTAS FREQUENTES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-10" style={{ lineHeight: 1.15 }}>
            O que vocês costumam perguntar
          </h2>
          <div className="divide-y divide-white/10">
                         {perguntas.map((p) => (
                                        <details key={p.q} className="group py-5">
                                          <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-lg font-medium">
                                            {p.q}
                                                          <span className="text-[#c2410c] text-xl shrink-0 group-open:rotate-45 transition-transform">
                                              +
                                                        </span>
                                                        </summary>
                                                        <p className="text-[#c9c2b3] mt-3" style={{ lineHeight: 1.7 }}>
                                                          {p.a}
                                                        </p>
                                                      </details>
                                                    ))}
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10">
                   <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
                     <h2 className="font-serif text-3xl md:text-5xl mb-6" style={{ lineHeight: 1.15 }}>
            Vamos marcar aquele café?
                       </h2>
          <p className="text-[#c9c2b3] mb-10 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
            Sem compromisso, sem letra miúda. É só pra contar como funciona e
            tirar as dúvidas de vocês sobre o grande dia.
                       </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <a
              href="https://wa.me/5511960684469"
              target="_blank"
              rel="noreferrer"
              className="bg-[#c2410c] text-white font-medium px-7 py-3 rounded-full hover:bg-[#a8360a] transition-colors"
            >
                             WhatsApp com Marcelo
            </a>
            <a
              href="https://wa.me/5511943800957"
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 text-[#efe7d7] font-medium px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
            >
                             WhatsApp com José
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

