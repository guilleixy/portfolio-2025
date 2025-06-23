import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function SaberLight({
  lightRef,
}: {
  lightRef?: React.RefObject<any>;
}) {
  const { mouse, camera } = useThree();
  const cylinderRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!camera || !lightRef?.current || !cylinderRef.current) return;

    // Posicionar la luz y el cilindro donde quieras (ej: frente al mouse)
    const vec = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    vec.unproject(camera);

    // Suavemente mover la luz y el cilindro
    lightRef.current.position.lerp(vec, 0.2);
    cylinderRef.current.position.lerp(vec, 0.2);

    // Alineá el cilindro para que quede apuntando hacia la cámara
    cylinderRef.current.lookAt(camera.position);
  });

  return (
    <>
      {/* Luz real para iluminar */}
      <rectAreaLight
        ref={lightRef}
        color="red"
        intensity={10}
        width={0.1}
        height={1.5}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />

      {/* Cilindro emissive pero invisible */}
      <mesh ref={cylinderRef} position={[-1, 7, 1]}>
        <cylinderGeometry args={[0.01, 0.01, 1.5]} />
        <meshStandardMaterial
          emissive="red"
          emissiveIntensity={10000}
          color="black"
        />
      </mesh>
    </>
  );
}
