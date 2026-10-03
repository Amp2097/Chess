import * as THREE from "three";

export function createBoard() {
  const board = new THREE.Group();

  const squareGeometry = new THREE.BoxGeometry(1, 0.2, 1);

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isLight = (row + col) % 2 === 0;

      const squareMaterial = new THREE.MeshStandardMaterial({
        color: isLight ? 0xffffff : 0x222222,
      });

      const square = new THREE.Mesh(squareGeometry, squareMaterial);

      square.position.set(col - 3.5, 0, row - 3.5);

      board.add(square);
    }
  }

  return board;
}
