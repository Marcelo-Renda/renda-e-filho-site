import Link from "next/link";

const items = [
  { label: "Sobre", href: "/agencia/sobre" },
  { label: "Estrutura", href: "/agencia/estrutura-para-eventos" },
  { label: "Produção audiovisual", href: "/agencia/producao-audiovisual" },
  { label: "Imersões", href: "/agencia/imersoes-e-experiencias" },
  { label: "Equipe técnica", href: "/agencia/equipe-tecnica" },
  { label: "Portfólio", href: "/agencia/portfolio" },
  { label: "Contato", href: "/agencia/contato" },
];

export default function AgenciaSubnav({ current }) {
  return (
    <div className="flex flex-wrap gap-6 mb-9">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm pb-1 border-b ${
            item.label === current
              ? "text-[#C9A24B] font-semibold border-[#C9A24B]"
              : "text-[#B8BDE3] border-[#8890C4]/40 hover:border-[#8890C4]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
