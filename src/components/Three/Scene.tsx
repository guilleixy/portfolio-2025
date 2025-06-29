"use client";

import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Loader,
} from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Eva01 from "./Eva01";
import RedMouseLight from "./RedMouseLight";
import { useThreeStore } from "@/store/useThreeStore";
import { useThree } from "@react-three/fiber";
import { SceneSetup } from "./SceneSetup";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const cameraRef = useRef<any>(null);
  const envRef = useRef<any>(null);
  const modelRef = useRef<any>(null);
  const redLightRef = useRef<any>(null);
  const [cameraReady, setCameraReady] = useState(false);
  const setCamera = useThreeStore((state) => state.setCamera);
  const setModel = useThreeStore((state) => state.setModel);
  const setRedLight = useThreeStore((state) => state.setRedLight);
  useEffect(() => {
    if (!cameraReady || !cameraRef.current) return;
    setCamera(cameraRef.current);
    setModel(modelRef.current);
    setRedLight(redLightRef.current);
  }, [cameraReady]);
  return (
    <>
      <Canvas className="fixed">
        <Suspense fallback={null}>
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            onUpdate={() => setCameraReady(true)}
            position={[-0.5, 3.3, 0.5]}
            rotation={[0.5, 0, 0]}
          />
          <Environment preset="city" />
          <RedMouseLight lightRef={redLightRef} />
          <Eva01 ref={modelRef} />
          <SceneSetup />
          {/* <EffectComposer>
            <Bloom intensity={1.5} luminanceThreshold={0.2} />
          </EffectComposer> */}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
