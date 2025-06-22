"use client";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function RedMouseLight({
  lightRef,
}: {
  lightRef?: React.RefObject<THREE.PointLight>;
}) {
  const { mouse, camera } = useThree();

  useFrame(() => {
    if (!camera || !lightRef) return;
    if (lightRef.current) {
      // Convert normalized mouse coordinates to world coordinates
      const vec = new THREE.Vector3(mouse.x, mouse.y, 0.7);
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
      decay={1}
    />
  );
}
