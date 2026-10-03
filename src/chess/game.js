export function createInitialBoard() {
    const board = Array.from(
        { length: 8 },
        () => Array(8).fill(null)
    )

    const backRow = [
        'rook',
        'knight',
        'bishop',
        'queen',
        'king',
        'bishop',
        'knight',
        'rook'
    ]

    for (let col = 0; col < 8; col++) {
        board[6][col] = {
            type: 'pawn',
            color: 'white'
        }

        board[1][col] = {
            type: 'pawn',
            color: 'black'
        }
        
        board[0][col] = {
            type: backRow[col],
            color: 'black'
        }

        board[7][col] = {
            type: backRow[col],
            color: 'white'
        }

    }
    return board
}
