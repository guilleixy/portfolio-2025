"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Eva01 from "./Eva01";
import RedMouseLight from "./RedMouseLight";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const cameraRef = useRef<any>(null);
  const [cameraReady, setCameraReady] = useState(false);

  useEffect(() => {
    if (!cameraReady) return;

    const creative = document.getElementById("creative");
    if (!creative) {
      console.error("Element with id 'creative' not found");
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(creative, {
        color: "red",
        scrollTrigger: {
          trigger: creative,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true,
          // onEnter: () => {
          //   gsap.to(cameraRef.current.position, {
          //     x: 5,
          //     y: 5,
          //     z: 10,
          //     duration: 1.5,
          //     ease: "power2.inOut",
          //   });
          // },
          onLeaveBack: () => {
            gsap.to(cameraRef.current.position, {
              x: 0,
              y: 0,
              z: 5,
              duration: 1.5,
              ease: "power2.inOut",
            });
          },
          onUpdate: (self) => {
            const progress = parseFloat(self.progress.toFixed(2));
            console.log(`Scroll progress: ${progress}`);
            cameraRef.current.position.z = 5 + progress * 5;
          },
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [cameraReady]);

  return (
    <Canvas>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        onUpdate={() => setCameraReady(true)}
      />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.01}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <RedMouseLight />
      <Eva01 />
    </Canvas>
  );
}
