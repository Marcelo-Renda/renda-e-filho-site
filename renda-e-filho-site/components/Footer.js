import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#15193F] text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-[#C9A24B] text-xs tracking-widest uppercase mb-3">Endereço</h3>
          <p className="text-[#D8DCEF] text-sm">
            Av. Paulista, 726, Cj 1707D
            <br />
            Bela Vista, São Paulo/SP
          </p>
        </div>
        <div>
          <h3 className="text-[#C9A24B] text-xs tracking-widest uppercase mb-3">Contato</h3>
          <p className="text-[#D8DCEF] text-sm">
            José, (11) 94380-0957
            <br />
            Marcelo, (11) 96068-4469
          </p>
        </div>
        <div>
          <h3 className="text-[#C9A24B] text-xs tracking-widest uppercase mb-3">Empresas do grupo</h3>
          <p className="text-[#D8DCEF] text-sm space-x-2">
            <Link href="/agencia" className="hover:text-white">Agência</Link>
            <span>·</span>
            <Link href="/marcelo-renda" className="hover:text-white">Marcelo Renda</Link>
            <br />
            <Link href="/elo-formaturas" className="hover:text-white">Elo Formaturas</Link>
            <span>·</span>
            <Link href="/familia-renda" className="hover:text-white">Família Renda</Link>
          </p>
        </div>
      </div>
      <p className="text-center text-[#6E76AD] text-xs pb-10">Renda &amp; Filho</p>
    </footer>
  );
}
