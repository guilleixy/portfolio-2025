import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useThreeStore } from "@/store/useThreeStore";

export const SceneSetup = () => {
  const { scene } = useThree();
  const setScene = useThreeStore((state) => state.setScene);

  useEffect(() => {
    setScene(scene);
  }, [scene]);

  return null;
};
