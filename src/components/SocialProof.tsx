export default function SocialProof() {
  return (
    <section className="bg-gradient-to-br from-black via-zinc-900 to-black py-20 px-5 text-white">
      
      {/* Headline */}
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold">
          Pessoas reais já estão acessando
        </h2>
        <p className="text-gray-400 mt-3 text-base">
          Cristãos comprometidos com estudo sério da Palavra
        </p>
      </div>

      {/* Prova principal */}
      <div className="max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl mb-10">
        <p className="text-lg font-medium leading-relaxed">
          “Conteúdo profundo, organizado e essencial para quem leva a teologia a sério.”
        </p>

        <div className="mt-4 flex items-center justify-center gap-2 text-green-400 font-semibold text-sm">
          ✅ Compra verificada
        </div>
      </div>

      {/* Métricas */}
      <div className="flex justify-center gap-4 flex-wrap text-center mb-10">
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-6 py-4">
          <p className="text-2xl font-extrabold text-green-400">
            +1.000
          </p>
          <p className="text-sm text-gray-300">
            acessos liberados
          </p>
        </div>

        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl px-6 py-4">
          <p className="text-2xl font-extrabold text-orange-400">
            24h
          </p>
          <p className="text-sm text-gray-300">
            oferta ativa
          </p>
        </div>
      </div>

      {/* Micro CTA */}
      <p className="text-center text-sm text-gray-400">
        O acesso pode ser encerrado sem aviso prévio
      </p>
    </section>
  );
}
