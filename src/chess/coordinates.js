export function boardToWorld(row, col) {
    return {
        x: col - 3.5,
        z: row - 3.5
    }
}