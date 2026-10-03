import * as THREE from "three";

const whiteMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});

const blackMaterial = new THREE.MeshStandardMaterial({
  color: 0x222222,
});

export function createPiece(piece, pieceModels) {
  const model = pieceModels[piece.type];

  const pieceObject = model.clone();
  pieceObject.scale.multiplyScalar(0.2);

  const material = piece.color === "white" ? whiteMaterial : blackMaterial;

  pieceObject.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  return pieceObject;
}
