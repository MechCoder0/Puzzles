class NumberRemover {
    constructor(numsToRemove, board){
        this.numsToRemove = numsToRemove
        this.board = board
    }

    remove(){
        for(let i=1; i<= this.numsToRemove; i++){
            let randX 
            let randY
            do {
                randX = Math.floor(Math.random() * 9);
                randY = Math.floor(Math.random() * 9);
            } while (this.board[randX][randY] == 0);
            this.board[randX][randY] = 0
        }
    }
}

module.exports.NumberRemover = NumberRemover;