let isValid = require("./sudokuUtil").isValid;

class Generator {
    constructor(){
        this.newBoard()
        this.min = 17
    }
    
    createPuzzle(){
        let count = 0;
        while(!this.generate(0,0, newVal = Math.floor(Math.random() * 10))){
            console.log("attempt: " + count)
        }
        return this.board
    }

    newBoard(){
        this.board = [
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
    generate (x,y, val){
        if(this.min < 0){
            return true
        }
        
        for(let val = 1; val <= 9; val ++){
            if (this.board[x][y] == 0 && isValid(x, y, val, this.board)){
                this.board[x][y] = val
                this.min --
    
                randX = Math.floor(Math.random() * 10);
                randY = Math.floor(Math.random() * 10);
                newVal = Math.floor(Math.random() * 10);
                if(this.generate(randX, randY, newVal)){
                    return true
                }
                this.board[x][y] = val
                min ++;
            }
        }
    }
}