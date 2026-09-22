import AgenciaSubnav from "@/components/AgenciaSubnav";

const col1 = ["Coordenação técnica geral", "Roteirização e pré-produção em geral", "Operação audiovisual", "Pós-produção e motion designer"];
const col2 = ["Controle de acesso e bombeiro", "Mestres de cerimônia", "Equipe de hostess"];

export default function EquipeTecnica() {
  return (
    <main className="bg-[#15193F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <AgenciaSubnav current="Equipe técnica" />
        <h1 className="text-5xl font-bold mb-3">Experiência de ponta a ponta</h1>
        <p className="text-[#D8DCEF] text-lg mb-2">Pra sempre garantir qualidade.</p>
        <p className="text-[#B8BDE3] mb-12 max-w-2xl">
          Reforço técnico sob demanda pro seu evento corporativo: profissionais avulsos
          pra somar à estrutura que você já tem, não um pacote de evento completo fechado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
          {[...col1, ...col2].map((item) => (
            <p key={item} className="border-t border-[#C9A24B] pt-3">{item}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
