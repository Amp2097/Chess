import * as THREE from "three";

export function createPawn(color) {
  const pawn = new THREE.Group();

  const baseGeometry = new THREE.CylinderGeometry(0.35, 0.4, 0.15, 32);

  const material = new THREE.MeshStandardMaterial({
    color: color,
  });

  const base = new THREE.Mesh(baseGeometry, material);

  pawn.add(base);

  const headGeometry = new THREE.SphereGeometry(0.2, 32, 16);

  const head = new THREE.Mesh(headGeometry, material);

  head.position.y = 0.8;
  pawn.add(head);

  const bodyGeometry = new THREE.CylinderGeometry(0.08, 0.2, 0.8, 32);

  const body = new THREE.Mesh(bodyGeometry, material);

  body.position.y = 0.4;

  pawn.add(body);

  return pawn;
}

export function createPiece(piece) {
    const color = piece.color === 'white'
        ? 0xffffff
        : 0x222222

    if (piece.type === 'pawn') {
        return createPawn(color)
    }
    
}
