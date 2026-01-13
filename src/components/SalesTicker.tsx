"use client";

import { useEffect, useState } from "react";

const buyers = [
  "João S.",
  "Maria A.",
  "Carlos R.",
  "Ana P.",
  "Lucas M.",
  "Rafael C.",
  "Fernanda L.",
];

export default function SalesTicker() {
  const [buyer, setBuyer] = useState(buyers[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        buyers[Math.floor(Math.random() * buyers.length)];
      setBuyer(random);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-3 rounded-xl shadow-xl text-sm z-50 animate-fade">
      🎉 <strong>{buyer}</strong> acabou de adquirir o acesso
    </div>
  );
}
