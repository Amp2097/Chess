import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { createBoard } from './graphics/board.js'
import { createPiece } from './graphics/pieces.js'
import { boardToWorld } from './chess/coordinates.js'
import { createInitialBoard } from './chess/game.js'
import { loadPieceModels } from './graphics/models.js'

const gameBoard = createInitialBoard()

const scene = new THREE.Scene()

const pieceModels = await loadPieceModels()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

camera.position.set(0, 8, 8)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer({
  antialias: true
})

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

const light = new THREE.DirectionalLight(0xffffff, 3)
light.position.set(5, 10, 5)
scene.add(light)

const board = createBoard()
scene.add(board)

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {

    const piece = gameBoard[row][col]

    if (piece !== null) {
      const pieceObject = createPiece(piece, pieceModels)
      const position = boardToWorld(row, col)
      pieceObject.position.set(position.x, 0.1, position.z)
      scene.add(pieceObject)
    }
  }
}

function animate() {
  controls.update()
  renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)

