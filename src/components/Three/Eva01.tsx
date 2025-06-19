import React from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { useThree } from "@react-three/fiber";

export default function Eva01() {
  const { nodes } = useGLTF("models/eva01-draco-v1.glb", true);
  const { viewport } = useThree();
  // Material metálico personalizado
  const metallicMaterial = new MeshStandardMaterial({
    color: 0xffffff,
    metalness: 1,
    roughness: 0.2,
  });
  //<group scale={viewport.width / 2} position={[0, -1, 0]}></group>
  return (
    <group>
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
      r
    </group>
  );
}
