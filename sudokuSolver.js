let SudokuUtil = require("./sudokuUtil").SudokuUtil;

class Solver {
    constructor(board){
        this.board = board
        this.util = new SudokuUtil()
    }

    solvePuzzle(){
        if(this.solve(0, 0)){
            this.util.showBoard(this.board)
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
            if(this.util.isValid(i, j, val, this.board)){

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
}

module.exports.Solver = Solver;