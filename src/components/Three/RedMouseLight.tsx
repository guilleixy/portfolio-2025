"use client";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function RedMouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { mouse, camera } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      // Convert normalized mouse coordinates to world coordinates
      const vec = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vec.unproject(camera);
      lightRef.current.position.lerp(vec, 0.2); // Smooth follow
    }
  });

  return (
    <pointLight
      ref={lightRef}
      color="red"
      intensity={20}
      distance={2}
      position={[10, 0, 10]}
      castShadow
    />
  );
}
