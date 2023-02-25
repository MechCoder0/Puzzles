let SudokuUtil = require("./sudokuUtil").SudokuUtil;

class Generator {
    constructor(){
        this.board = this.newBoard()
        this.min = 17
        this.util = new SudokuUtil()
    }
    
    createPuzzle(){
        this.generate(0,0)
        return this.board
    }

    newBoard(){
        return [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ] 
    }
    generate (x,y){
        if (this.min <= 0) {
            return true
        }

        let randX = Math.floor(Math.random() * 9);
        let randY = Math.floor(Math.random() * 9);

        if(this.board[x][y] != 0){
            return this.generate(randX, randY)
        }
        
        
        for(let val = 1; val <= 9; val ++){
            if (this.board[x][y] == 0 && this.util.isValid(x, y, val, this.board)){
                this.board[x][y] = val
                this.min --

                if(this.generate(randX, randY)){
                    return true
                }
                this.board[x][y] = 0
                this.min ++;
            }
        }

        return false
    }
}

module.exports.SudokuGenerator = Generator;