import { create } from "zustand";
import * as THREE from "three";

type ThreeStore = {
  camera: THREE.PerspectiveCamera | null;
  model: THREE.Object3D | null;
  redLight: THREE.PointLight | null;
  scene: THREE.Scene | null;
  setCamera: (cam: THREE.PerspectiveCamera) => void;
  setModel: (mod: THREE.Object3D) => void;
  setRedLight: (light: THREE.PointLight) => void;
  setScene: (scene: THREE.Scene) => void;
};

export const useThreeStore = create<ThreeStore>((set) => ({
  camera: null,
  model: null,
  env: null,
  redLight: null,
  scene: null,
  setCamera: (camera) => set({ camera }),
  setModel: (model) => set({ model }),
  setRedLight: (redLight) => set({ redLight }),
  setScene: (scene) => set({ scene }),
}));
