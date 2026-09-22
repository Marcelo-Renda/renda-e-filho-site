import AgenciaSubnav from "@/components/AgenciaSubnav";

export default function Contato() {
  return (
    <main className="bg-[#15193F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <AgenciaSubnav current="Contato" />
        <h1 className="text-6xl font-bold mb-14 leading-tight">
          Vamos marcar
          <br />
          um café?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="border-t border-[#4A4E75] pt-6">
            <p className="text-[#8890C4] text-xs tracking-widest uppercase mb-2">Frente técnica</p>
            <h3 className="text-2xl font-bold mb-2">José</h3>
            <p className="text-[#D8DCEF] mb-3">+55 11 94380-0957</p>
            <a href="https://wa.me/5511943800957" target="_blank" rel="noreferrer" className="text-[#C9A24B] font-semibold hover:underline">
              WhatsApp →
            </a>
          </div>
          <div className="border-t border-[#4A4E75] pt-6">
            <p className="text-[#8890C4] text-xs tracking-widest uppercase mb-2">Frente artística</p>
            <h3 className="text-2xl font-bold mb-2">Marcelo</h3>
            <p className="text-[#D8DCEF] mb-3">+55 11 96068-4469</p>
            <a href="https://wa.me/5511960684469" target="_blank" rel="noreferrer" className="text-[#C9A24B] font-semibold hover:underline">
              WhatsApp →
            </a>
          </div>
        </div>

        <p className="text-[#8890C4] text-xs tracking-widest uppercase mb-6">Ou, se preferir, escreva</p>
        <form className="max-w-xl space-y-5">
          <input type="text" placeholder="Nome" className="w-full bg-transparent border-b border-[#4A4E75] py-2 placeholder:text-[#8890C4] focus:outline-none focus:border-[#C9A24B]" />
          <input type="email" placeholder="E-mail" className="w-full bg-transparent border-b border-[#4A4E75] py-2 placeholder:text-[#8890C4] focus:outline-none focus:border-[#C9A24B]" />
          <input type="text" placeholder="Empresa" className="w-full bg-transparent border-b border-[#4A4E75] py-2 placeholder:text-[#8890C4] focus:outline-none focus:border-[#C9A24B]" />
          <textarea placeholder="Conte um pouco sobre o seu evento" rows={4} className="w-full bg-transparent border-b border-[#4A4E75] py-2 placeholder:text-[#8890C4] focus:outline-none focus:border-[#C9A24B]" />
          <button type="submit" className="bg-[#C9A24B] text-[#15193F] font-medium px-6 py-3 rounded-full hover:-translate-y-1 transition-transform">
            Enviar →
          </button>
        </form>
      </div>
    </main>
  );
}
