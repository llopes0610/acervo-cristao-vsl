export default function PaymentSecurity() {
  return (
    <section className="bg-black text-white py-16 px-5">
      <div className="max-w-xl mx-auto">

        {/* Headline */}
        <h3 className="text-2xl font-extrabold text-center mb-6">
          Compra 100% segura e protegida
        </h3>

        {/* Box principal */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl mb-8">

          {/* Mercado Pago */}
          <div className="flex items-start gap-3 mb-6">
            <span className="text-green-400 text-xl">🔒</span>
            <div>
              <p className="font-semibold text-green-400">
                Pagamento processado pelo Mercado Pago
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Seus dados estão protegidos com a mesma segurança usada por grandes lojas online.
              </p>
            </div>
          </div>

          {/* Garantia */}
          <div className="flex items-start gap-3 mb-6">
            <span className="text-orange-400 text-xl">🛡️</span>
            <div>
              <p className="font-semibold text-orange-400">
                Garantia de reembolso
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Caso tenha qualquer problema com o acesso, você pode solicitar seu dinheiro de volta diretamente pelo Mercado Pago.
              </p>
            </div>
          </div>

          {/* Entrega */}
          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-xl">⚡</span>
            <div>
              <p className="font-semibold text-blue-400">
                Acesso imediato
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Após a confirmação do pagamento, você recebe as instruções para acesso ao acervo.
              </p>
            </div>
          </div>
        </div>

        {/* Métodos de pagamento */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-3">
            Formas de pagamento aceitas
          </p>

          <div className="flex justify-center gap-3 flex-wrap text-xs">
            <span className="bg-zinc-800 px-3 py-2 rounded-lg">PIX</span>
            <span className="bg-zinc-800 px-3 py-2 rounded-lg">Cartão de Crédito</span>
            <span className="bg-zinc-800 px-3 py-2 rounded-lg">Boleto</span>
            <span className="bg-zinc-800 px-3 py-2 rounded-lg">Débito</span>
          </div>
        </div>
      </div>
    </section>
  );
}
