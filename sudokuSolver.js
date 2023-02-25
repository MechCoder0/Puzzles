let isValid = require("./sudokuUtil").isValid;

class Solver {
    constructor(board){
        this.board = board
    }

    solvePuzzle(){
        if(this.solve(0, 0)){
            this.showSolution()
        } else {
            console.log("Solution not possible")
        }
    }

    solve(i, j) {
        if(i == this.board.length){
            j++
            if (j == this.board.length){
                return true
            }
            i = 0
        }

        // Don't overwrite existing numbers.
        if (this.board[i][j] != 0) {
            return this.solve(i+1, j)
        }

        // For each index, loop through possible values.
        for(let val = 1; val <= 9; val ++){
            // if the value is valid, set the space to be the value and 
            // check the next values
            if(isValid(i, j, val, this.board)){

                this.board[i][j] = val

                if(this.solve(i+1, j)){
                    return true
                }
                
                // next values are not valid, reset this one.
                this.board[i][j] = 0
            }
        }

        return false
    }

    showSolution() {
        for (let i = 0; i < this.board.length; i++) {
            console.log(this.board[i])
        }
    }
}

let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
]

let board2 = [
  [0, 0, 1, 5, 0, 0, 0, 7, 0],
  [0, 0, 4, 0, 6, 0, 0, 0, 9],
  [0, 3, 0, 0, 0, 4, 0, 0, 0],
  [6, 2, 0, 0, 0, 5, 1, 0, 0],
  [0, 4, 0, 0, 0, 0, 5, 2, 0],
  [0, 0, 0, 0, 4, 8, 0, 0, 3],
  [4, 1, 0, 0, 7, 0, 0, 0, 0],
  [0, 0, 6, 8, 0, 0, 0, 0, 1],
  [8, 0, 0, 0, 0, 9, 0, 3, 0],
]

let solver = new Solver(board2)
solver.solvePuzzle()