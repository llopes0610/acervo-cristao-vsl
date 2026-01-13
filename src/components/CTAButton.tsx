export default function CTAButton({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="bg-black py-16 text-center">
      <a
        href="https://mpago.la/27XMkQo"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-4 rounded-xl text-xl transition shadow-lg"
      >
        QUERO ACESSAR O ACERVO COMPLETO AGORA
      </a>

      <p className="text-gray-400 mt-4 text-sm">
        Acesso imediato após a confirmação
      </p>
    </div>
  );
}
