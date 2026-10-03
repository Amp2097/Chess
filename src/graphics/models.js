import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const pieceNames = {
  pawn: "Sphere002",
  rook: "Circle",
  knight: "Sphere003",
  bishop: "Sphere",
  queen: "Circle001",
  king: "Sphere001",
};

export function loadPieceModels() {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      "/models/chess_pieces.glb",

      (gltf) => {
        const models = {};

        for (const [type, modelName] of Object.entries(pieceNames)) {
          const object = gltf.scene.getObjectByName(modelName);

          if (!object) {
            console.error(`Could not find ${type}: ${modelName}`);
            continue;
          }

          models[type] = object;
        }

        resolve(models);
      },

      undefined,

      (error) => {
        reject(error);
      }
    );
  });
}