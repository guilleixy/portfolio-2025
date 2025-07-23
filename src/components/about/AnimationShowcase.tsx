"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollControlledVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    // Asegúrate de que el video esté listo antes de animar
    video.addEventListener("loadedmetadata", () => {
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers: true, // activa para debug
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} style={{ height: "400vh" }}>
      <div className="h-screen sticky top-0 flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src="/animation_showcase/animation_showcase.mp4"
          preload="auto"
          playsInline
          muted
          className="max-w-full max-h-full"
        />
      </div>
    </div>
  );
}
