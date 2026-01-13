"use client";

type FloatingCTAProps = {
  visible: boolean;
};

export default function FloatingCTA({ visible }: FloatingCTAProps) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-black/90 backdrop-blur border-t border-zinc-800 px-4 py-3">
        <a
          href="https://mpago.la/27XMkQo"
          className="
            block
            w-full
            text-center
            bg-green-500
            hover:bg-green-600
            text-black
            font-extrabold
            py-4
            rounded-xl
            text-lg
            shadow-lg
            transition
          "
        >
          🔓 Acessar agora por R$ 19,90
        </a>

        <p className="text-center text-[11px] text-gray-400 mt-2">
          🔒 Compra segura via Mercado Pago • Reembolso disponível
        </p>
      </div>
    </div>
  );
}
