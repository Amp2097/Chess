export function createInitialBoard() {
    const board = Array.from(
        { length: 8 },
        () => Array(8).fill(null)
    )

    for (let col = 0; col < 8; col++) {
        board[6][col] = {
            type: 'pawn',
            color: 'white'
        }

        board[1][col] = {
            type: 'pawn',
            color: 'black'
        }
    }
    return board
}
