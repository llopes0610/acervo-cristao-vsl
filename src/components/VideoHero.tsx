"use client";

import { useEffect, useRef } from "react";

export default function VideoHero({
  onUnlock,
}: {
  onUnlock: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const unlockedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});

    const handleTimeUpdate = () => {
      if (video.currentTime >= 60 && !unlockedRef.current) {
        unlockedRef.current = true;
        onUnlock();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [onUnlock]);

  return (
    <section
      className="min-h-screen bg-black flex flex-col items-center justify-center px-0"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Aviso de urgência */}
      <div className="mb-4 px-4 w-full flex justify-center">
        <p
          className="
            pulse-soft
            text-center
            text-red-500
            text-base
            sm:text-lg
            font-bold
            uppercase
            tracking-wide
            border
            border-white/30
            rounded-lg
            py-3
            px-4
            bg-black/70
            max-w-md
          "
        >
          ⚠️ Assista com atenção
          <br />
          <span className="text-red-400 font-semibold normal-case">
            Essa oferta pode encerrar a qualquer momento
          </span>
        </p>
      </div>

      {/* Container do vídeo */}
      <div className="w-full h-[75vh] md:h-[70vh] flex items-center justify-center">
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
          className="
            w-full
            h-full
            max-w-none
            object-contain
            md:max-w-4xl
            md:rounded-2xl
            shadow-2xl
          "
        />
      </div>
    </section>
  );
}
