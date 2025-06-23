import { modelPosition } from "three/tsl";

export const cameraDefaultPositions = {
  default: {
    position: [-1, 7, 1],
    rotation: [0.5, 0, 0],
    targetPosition: [-1.2, 7, 1],
    targetRotation: [0.5, 0, 0],
    modelPosition: [0, Math.PI / 2, 0],
  },
};
export const cameraPositions = {
  default: {
    position: [0, 0, 0],
    target: [0, 0, 0],
    up: [0, 1, 0],
    zoom: 1,
  },
  top: {
    position: [0, 10, 0],
    target: [0, 0, 0],
    up: [0, 0, -1],
    zoom: 1,
  },
  side: {
    position: [10, 0, 0],
    target: [0, 0, 0],
    up: [0, 1, 0],
    zoom: 1,
  },
};
