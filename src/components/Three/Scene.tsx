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

  return (
    <Canvas className="fixed">
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        onUpdate={() => setCameraReady(true)}
        position={[-1, 7, 1]}
        rotation={[0.5, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <Environment preset="city" background={false} />
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
