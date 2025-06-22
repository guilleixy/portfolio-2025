import { create } from "zustand";
import * as THREE from "three";

type ThreeStore = {
  camera: THREE.PerspectiveCamera | null;
  model: THREE.Object3D | null;
  setCamera: (cam: THREE.PerspectiveCamera) => void;
  setModel: (mod: THREE.Object3D) => void;
};

export const useThreeStore = create<ThreeStore>((set) => ({
  camera: null,
  model: null,
  setCamera: (camera) => set({ camera }),
  setModel: (model) => set({ model }),
}));
