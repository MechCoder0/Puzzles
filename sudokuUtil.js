class SudokuUtil {
    isValid(i, j, val, board) {
        // Check if any horizontal and vertical values are the same as the passed value
        for(let k = 0; k < 9; k++){
            if(board[i][k] == val ||
                board[k][j] == val){
                    return false
                }
        }
        let startX = i - (i % 3)
        let startY = j - (j % 3)
        // Check if their is another of the number in the "box"
        for(let l = startX; l < startX + 3; l ++){
            for (let m = startY; m < startY + 3; m ++){
                if (board[l][m] == val) {
                    return false
                }
            }
        }
    
        return true
    }
    
    
    showBoard(board) {
        for (let i = 0; i < board.length; i++) {
            let row = ""
            for(let j = 0; j < board[i].length; j++) {
                if(j % 3 == 0){
                    row += "|"
                }
                row += board[i][j]
            }
            row += "|"
            if (i % 3 == 0){
                console.log("-------------")
            }
            console.log(row) 
        }
        console.log("-------------")
    }
}


module.exports.SudokuUtil = SudokuUtil;