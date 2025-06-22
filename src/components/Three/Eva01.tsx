import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, Mesh, Object3D } from "three";
import { useThree } from "@react-three/fiber";

export default function Eva01() {
  const { nodes } = useGLTF("models/eva01-draco-v1.glb");
  const { viewport } = useThree();

  const metallicMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 0x000000,
        metalness: 1,
        roughness: 0,
      }),
    []
  );

  return (
    <group rotation={[0, Math.PI / 2, 0]}>
      {Object.values(nodes)
        .filter((node: any) => node.type === "Mesh")
        .map((mesh: any) => (
          <mesh
            key={mesh.uuid}
            geometry={mesh.geometry}
            material={metallicMaterial} // Usar el material metálico personalizado
            castShadow
            {...(mesh.position && { position: mesh.position })}
            {...(mesh.rotation && { rotation: mesh.rotation })}
            {...(mesh.scale && { scale: mesh.scale })}
          >
            {/* Usar el material metálico personalizado */}
            {/* <primitive object={metallicMaterial} attach="material" /> */}
          </mesh>
        ))}
    </group>
  );
}
