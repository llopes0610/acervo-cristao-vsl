export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-gray-400 py-10 px-5">
      <div className="max-w-4xl mx-auto text-center space-y-4">

        {/* Responsável */}
        <p className="text-sm">
          © {new Date().getFullYear()} — Projeto independente de conteúdo cristão
        </p>

        {/* Segurança */}
        <p className="text-xs">
          Pagamento processado com segurança pelo{" "}
          <span className="text-green-400 font-semibold">
            Mercado Pago
          </span>
        </p>

        {/* Garantia */}
        <p className="text-xs">
          Garantia de reembolso conforme política do Mercado Pago
        </p>

        {/* Contato */}
        <p className="text-xs">
          Dúvidas ou suporte:{" "}
          <a
            href="mailto:contato@seusite.com"
            className="underline hover:text-white"
          >
            contato@seusite.com
          </a>
        </p>

        {/* Aviso legal */}
        <p className="text-[10px] text-gray-500 leading-relaxed">
          Este produto consiste no acesso a um acervo digital organizado.
          Nenhum conteúdo físico é enviado.
        </p>
      </div>
    </footer>
  );
}
