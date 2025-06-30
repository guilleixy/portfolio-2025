import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

export default function SaberLight({
  lightRef,
}: {
  lightRef?: React.RefObject<any>;
}) {
  const { mouse, camera } = useThree();
  RectAreaLightUniformsLib.init();
  const pointLightRef = useRef<THREE.PointLight | THREE.RectAreaLight>(null);
  useFrame(() => {
    if (!camera || !lightRef?.current) return;

    // Posicionar la luz y el cilindro donde quieras (ej: frente al mouse)
    const vec = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    vec.unproject(camera);

    // Suavemente mover la luz y el cilindro
    lightRef.current.position.lerp(vec, 0.2);
    //lightRef.current.updateMatrixWorld();
    pointLightRef.current?.position.lerp(vec, 0.2);
    //lightRef.current.lookAt(3, 0, 0);
  });

  return (
    <>
      <pointLight
        ref={pointLightRef}
        color="red"
        intensity={100}
        distance={10}
      />
      <rectAreaLight
        ref={lightRef}
        color="red"
        intensity={1}
        width={1}
        height={10}
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </>
  );
}
