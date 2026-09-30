import Link from "next/link";

const exposicoes = [
  { galeria: "Art Lab Gallery", local: "São Paulo, Brasil", data: "ago 2021", obra: "\u201cVoz\u201d e \u201c25 de março\u201d" },
  { galeria: "Fujifilm: O poder da foto", local: "São Paulo, Brasil", data: "set 2018", obra: "\u201cPaixão em Itanhaém\u201d" },
  { galeria: "BBA Circle", local: "Berlim, Alemanha", data: "abr 2020", obra: "\u201cParóquia Santa Cândida\u201d" },
  { galeria: "Laurent Gallery", local: "Melbourne, Austrália", data: "ago 2019", obra: "\u201cSilhueta em Itanhaém\u201d" },
  { galeria: "Hinterland Gallery", local: "Viena, Áustria", data: "jan 2020", obra: "\u201cAna Lúcia\u201d" },
  { galeria: "Hinterland Gallery", local: "Viena, Áustria", data: "set 2020", obra: "\u201cObstáculo\u201d" },
  { galeria: "Photosynthesis Gallery", local: "Sófia, Bulgária", data: "fev 2020", obra: "\u201cCiclista #2\u201d" },
  { galeria: "Ravnikar Gallery", local: "Ljubljana, Eslovênia", data: "jan 2020", obra: "\u201cSilhueta em Itanhaém\u201d" },
  { galeria: "Valid World Hall", local: "Barcelona, Espanha", data: "nov 2019", obra: "\u201cEstação Santa Cruz\u201d" },
  { galeria: "Valid World Hall", local: "Barcelona, Espanha", data: "fev 2020", obra: "\u201cSalvador Martinez\u201d" },
  { galeria: "Valid World Hall", local: "Barcelona, Espanha", data: "abr 2020", obra: "\u201cAzul da Sé\u201d" },
  { galeria: "LA Center of Photography", local: "Los Angeles, EUA", data: "jun 2020", obra: "\u201cDecompor\u201d" },
  { galeria: "Studio Galerie B&B", local: "Paris, França", data: "mai 2020", obra: "\u201cCiclista #1\u201d" },
  { galeria: "Blank Wall Gallery", local: "Atenas, Grécia", data: "mai 2020", obra: "\u201cProx. do Viaduto Tutóia\u201d" },
  { galeria: "PH21 Photography Gallery", local: "Budapeste, Hungria", data: "mai 2020", obra: "\u201cCombustar\u201d" },
  { galeria: "The Photohouse", local: "Tel Aviv, Israel", data: "jun 2021", obra: "\u201cGalão d\u2019água\u201d" },
  { galeria: "MIA Photo Fair", local: "Milão, Itália", data: "mar 2020", obra: "\u201cPai da noiva\u201d" },
  { galeria: "Espaço Espelho d\u2019Água", local: "Lisboa, Portugal", data: "fev 2020", obra: "\u201cViolinista #2\u201d" },
  { galeria: "The Photography Show", local: "Birmingham, Reino Unido", data: "mar 2020", obra: "\u201cDinda!\u201d" },
  { galeria: "Galleri Kontrast", local: "Estocolmo, Suécia", data: "jul 2020", obra: "\u201cAlvorada em Itanhaém\u201d" },
  { galeria: "Matca Pictures Gallery", local: "Hanói, Vietnã", data: "set 2020", obra: "\u201cda Penha #1\u201d" },
];

const publicacoes = [
  {
    t: "ONU e CEPAL",
    d: "Fotos creditadas nas capas de dois estudos da ONU sobre a pandemia: \u201cNational measures in response to the COVID-19 and its effect on the SDGs\u201d e \u201cMedidas nacionales ante la COVID-19 y su efecto en los ODS\u201d, via ECLAC e CEPEI, 2020.",
  },
  {
    t: "Livro de marketing, Indonésia",
    d: "Fotos creditadas no livro \u201cMarketing di new normal\u201d, do autor indonésio Dwi Santoso, 2021.",
  },
  {
    t: "São Paulo Secreto",
    d: "Reportagem sobre o trabalho do Padre Júlio Lancellotti durante a pandemia, parte da série \u201cSão Paulo em Pandemia\u201d, 2020.",
  },
  {
    t: "GEPHOM, USP",
    d: "\u201cO olhar do fotógrafo eachiano Marcelo Renda\u201d, artigo no portal do Grupo de Estudo e Pesquisa em História Oral e Memória da USP, 2021.",
  },
  {
    t: "Universidade de Hiroshima",
    d: "Foto creditada no artigo acadêmico \u201cSearch for best strategy to control COVID-19 outbreaks without hurting tourism leads to one key policy\u201d, publicado na revista Tourism Economics e repostado pelo portal Asia Research News, 2022.",
  },
  {
    t: "Estadão, Glamurama e DasArtes",
    d: "Citação em matérias sobre a exposição coletiva \u201cArt Lab Foto 2021\u201d e participação em evento sobre fotografia documental e social, em comemoração ao Dia Internacional da Fotografia, 2021.",
  },
  {
    t: "Global Dialogue",
    d: "Foto creditada no artigo \u201cDelivery Work via Digital Platforms in Brazil\u201d, revista da International Sociological Association, 2022.",
  },
  {
    t: "Leste Online",
    d: "Foto creditada na matéria \u201cA cruzada infundada contra um homem de fé: por que a CPI contra Pe. Júlio Lancellotti está destinada ao fracasso\u201d, 2024.",
  },
];

export default function Exposicoes() {
  return (
    <main className="bg-black text-white">
      <section className="max-w-3xl mx-auto px-6 pt-16 md:pt-24 pb-14">
        <Link
          href="/marcelo-renda"
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          ← Marcelo Renda
        </Link>
        <p className="text-xs tracking-widest text-white/50 font-mono mt-8 mb-6">
          RECONHECIMENTO
        </p>
        <h1
          className="font-serif text-3xl md:text-5xl mb-8"
          style={{ lineHeight: 1.15 }}
        >
          Exposições e publicações
        </h1>
        <p className="text-white/70" style={{ lineHeight: 1.7 }}>
          Ao longo dos anos, o trabalho autoral de Marcelo Renda passou por
          galerias em diferentes continentes e foi usado como crédito
          fotográfico em publicações de instituições internacionais, livros
          e veículos de imprensa. A lista abaixo reúne o que está
          documentado até aqui.
        </p>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-serif text-2xl md:text-3xl mb-10">Exposições</h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {exposicoes.map((e, i) => (
              <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <span className="font-medium">{e.galeria}</span>
                  <span className="text-white/60"> · {e.local}</span>
                </div>
                <div className="text-sm text-white/60 sm:text-right shrink-0">
                  {e.data} · {e.obra}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-serif text-2xl md:text-3xl mb-10">Publicações e imprensa</h2>
          <div className="space-y-8">
            {publicacoes.map((p) => (
              <div key={p.t} className="border-t border-white/15 pt-4">
                <h3 className="font-serif text-xl mb-2">{p.t}</h3>
                <p className="text-white/70" style={{ lineHeight: 1.7 }}>
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
          <a
            href="https://wa.me/5511960684469?text=Ol%C3%A1%2C%20Marcelo!%20Vi%20suas%20exposi%C3%A7%C3%B5es%20pelo%20site%20e%20queria%20conversar%20sobre%20um%20projeto."
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
