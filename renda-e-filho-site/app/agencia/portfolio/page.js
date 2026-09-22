"use client";
import { useState } from "react";
import AgenciaSubnav from "@/components/AgenciaSubnav";

const cases = [
  {
    title: "Lançamento de produto, marca de cosméticos",
    text: "O evento aconteceu na loja conceito da marca, num painel que reuniu cinco palestrantes de peso. A R&F assumiu a produção audiovisual completa: dois fotógrafos registrando os ambientes internos e externos da loja, três cinegrafistas cobrindo cada ângulo da palestra, e toda a coordenação técnica por trás de cena. A sonorização foi construída pra sustentar cada palestrante com clareza: caixas de som, mesa de som e microfonação dedicada a todo o espaço. O evento também foi transmitido ao vivo para o canal oficial da marca no YouTube.",
  },
  {
    title: "Campanha de Páscoa, marca de chocolates",
    text: "Uma marca de chocolates com linha profissional reconhecida no mercado nos chamou pra produção audiovisual completa da campanha de lançamento de um novo produto para a Páscoa. A R&F cuidou de tudo, da pré-produção à captação final: fotografia e vídeo gastronômicos, pensados pra fazer o produto saltar aos olhos em qualquer tela. O projeto resultou em cinco peças distintas, usadas tanto nas redes sociais da marca quanto em telão no evento de lançamento, além de versões convertidas para anúncio em mídia social e TV.",
  },
  {
    title: "Expansão de metrô, grande obra de infraestrutura urbana",
    text: "Poucos registros fotográficos nascem a 70 metros abaixo da superfície. A R&F acompanhou os marcos de avanço de uma grande obra de expansão de metrô, com captação in loco no interior do túnel, sob todo o protocolo de segurança exigido pra operar naquele ambiente. Um dos momentos mais aguardados, a chegada da tuneladora a uma nova estação, foi registrado e transmitido ao vivo simultaneamente para as equipes que acompanhavam de fora do túnel e para os canais oficiais de comunicação do órgão responsável pela obra.",
  },
  {
    title: "Copa do Mundo, cobertura de reação ao vivo",
    text: "Durante uma das partidas da Copa do Mundo, a R&F assumiu a captação de foto e vídeo de uma transmissão simultânea de conteúdo de reação, ao vivo, dentro da própria plataforma do cliente. Cada lance em campo virava conteúdo publicado em tempo real, exigindo sincronia total entre a operação técnica e o ritmo do jogo.",
  },
  {
    title: "Centenário de curso, projeção mapeada imersiva",
    text: "Para celebrar os 100 anos de um dos cursos de direito mais tradicionais do país, a R&F transformou salas de aula, o anfiteatro e a biblioteca em cenário de projeção mapeada. Grandes marcos da trajetória do curso, conquistas acadêmicas e nomes que se destacaram ao longo de um século ganharam vida nas paredes que testemunharam tudo isso de perto. A ambientação deu o tom pra cerimônia de comemoração, com cada espaço contando um capítulo diferente dessa história.",
  },
  {
    title: "Imersão de três dias, Exército Brasileiro",
    text: "Durante três dias, a equipe da R&F acampou junto a um pelotão em campo de treinamento, acompanhando de perto a rotina de recrutas em formação. Fotografia, filmagem e captação aérea com drone registraram cada etapa, da travessia de pontes ao treinamento tático na lama e no frio, em condições tão exigentes pra equipe quanto pros próprios recrutas. O material captado deu origem a um vídeo que mostra essa evolução do início ao fim.",
  },
];

export default function Portfolio() {
  const [open, setOpen] = useState(0);
  return (
    <main className="bg-[#15193F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <AgenciaSubnav current="Portfólio" />
        <h1 className="text-5xl font-bold mb-3">Projetos realizados</h1>
        <p className="text-[#D8DCEF] text-lg mb-12">
          Seis projetos que mostram a amplitude do que já fizemos. Os nomes dos
          clientes ficam reservados; o trabalho técnico é nosso.
        </p>
        <div>
          {cases.map((c, i) => (
            <div key={c.title} className="border-b border-[#3A3F72] first:border-t">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left py-6 flex justify-between items-center gap-4"
              >
                <span className="text-xl font-semibold">
                  <span className="text-[#C9A24B]">{String(i + 1).padStart(2, "0")}</span> — {c.title}
                </span>
                <span className="text-[#C9A24B] text-2xl shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="text-[#B8BDE3] leading-relaxed pb-6 pr-8">{c.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
