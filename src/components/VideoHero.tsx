"use client";
import { useEffect, useRef, useState } from "react";

export default function VideoHero({
  onUnlock,
}: {
  onUnlock: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const unlockedRef = useRef(false);
  const [watchProgress, setWatchProgress] = useState(0);
  const [showPulse, setShowPulse] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 37
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setWatchProgress(Math.min(progress, 100));

      if (video.currentTime >= 20 && !unlockedRef.current) {
        unlockedRef.current = true;
        onUnlock();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [onUnlock]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          return { minutes: 0, seconds: 0 };
        }
        
        return { minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setShowPulse(prev => !prev);
    }, 2000);

    return () => clearInterval(pulseTimer);
  }, []);

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center px-0 relative overflow-hidden"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Efeito de fundo animado */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Banner de urgência melhorado */}
      <div className="mb-6 px-4 w-full flex justify-center relative z-10">
        <div className="max-w-2xl w-full">
          {/* Borda animada com gradiente */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-red-600 p-0.5 shadow-2xl animate-pulse">
            <div className="bg-gradient-to-b from-black to-gray-900 rounded-2xl relative overflow-hidden">
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
              
              <div className="relative z-10 p-5 sm:p-6">
                {/* Cabeçalho com ícones pulsantes */}
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className={`transition-transform duration-300 ${showPulse ? 'scale-125' : 'scale-100'}`}>
                    <span className="text-4xl drop-shadow-lg">⚠️</span>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-black uppercase tracking-wider drop-shadow-lg">
                    Atenção Máxima
                  </h3>
                  <div className={`transition-transform duration-300 ${showPulse ? 'scale-125' : 'scale-100'}`}>
                    <span className="text-4xl drop-shadow-lg">⚠️</span>
                  </div>
                </div>

                {/* Mensagem principal */}
                <div className="text-center space-y-3 mb-4">
                  <p className="text-white text-base sm:text-lg font-semibold leading-relaxed">
                    Assista ao vídeo completo para desbloquear
                  </p>
                  <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-black px-4 py-2 rounded-lg transform hover:scale-105 transition-transform">
                    <p className="text-lg sm:text-xl font-black uppercase tracking-wide drop-shadow">
                      🎁 Sua Oferta Exclusiva
                    </p>
                  </div>
                </div>

                {/* Barra de progresso */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-xs font-semibold uppercase">Progresso</span>
                    <span className="text-white text-sm font-bold">{Math.round(watchProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-gray-700">
                    <div 
                      className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 h-full rounded-full transition-all duration-300 relative overflow-hidden"
                      style={{ width: `${watchProgress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                {/* Timer de contagem regressiva */}
                <div className="bg-black/50 rounded-xl p-4 border border-red-500/30 backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    <p className="text-red-400 text-sm font-bold uppercase tracking-wide">
                      Oferta expira em:
                    </p>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="flex justify-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border-2 border-red-400/50 shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <span className="text-white text-2xl sm:text-4xl font-black relative z-10 drop-shadow-lg">
                          {String(timeLeft.minutes).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-gray-400 text-xs mt-2 uppercase font-bold tracking-wider">Min</span>
                    </div>
                    
                    <div className="flex items-center pb-6">
                      <span className="text-red-500 text-4xl font-black animate-pulse">:</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border-2 border-red-400/50 shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <span className="text-white text-2xl sm:text-4xl font-black relative z-10 drop-shadow-lg">
                          {String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-gray-400 text-xs mt-2 uppercase font-bold tracking-wider">Seg</span>
                    </div>
                  </div>
                </div>

                {/* Aviso final pulsante */}
                <div className="mt-4 text-center">
                  <p className="text-yellow-400 text-sm font-semibold animate-pulse">
                    ⏰ Vagas limitadas disponíveis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container do vídeo com moldura premium */}
      <div className="w-full px-4 flex items-center justify-center relative z-10">
        <div className="w-full max-w-5xl">
          {/* Moldura com gradiente */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-red-600 p-1 shadow-2xl">
            <div className="bg-black rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                src="https://video.wixstatic.com/video/fb90b4_66cad6c6c1de48ef854bfbf54f851f66/1080p/mp4/file.mp4"
                muted
                playsInline
                autoPlay
                controls
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                preload="auto"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>

          {/* Indicadores abaixo do vídeo */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-center">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
              <p className="text-green-400 text-sm font-bold">✓ 100% Seguro</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
              <p className="text-blue-400 text-sm font-bold">✓ Garantia 7 Dias</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
              <p className="text-purple-400 text-sm font-bold">✓ Suporte 24/7</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
}