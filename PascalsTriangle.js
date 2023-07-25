var getRow = function(rowIndex) {
    let arr = []
    
    function solve(row, index, length){
        
        if(row == 0 || row == 1 || index == 0
            || index == length) {
            return 1
        }
        
        return solve(row-1, index-1, length-1) + solve(row-1, index, length-1)
    }
    
    for(let i=0; i<=rowIndex; i++){
        arr.push(solve(rowIndex, i, rowIndex))
    }
    
    return arr
};

// with memoization:
var getRow = function(rowIndex) {
    let arr = []
    let map = new Map()
    
    function solve(row, index, length){
        
        if(row == 0 || row == 1 || index == 0
            || index == length) {
            return 1
        }
        
        if(map.has([row, index])){
            return map.get([row,index])
        }
        
        let value =  solve(row-1, index-1, length-1) + solve(row-1, index, length-1)
        map.set([row,index], value)
        return value
    }
    
    for(let i=0; i<=rowIndex; i++){
        arr.push(solve(rowIndex, i, rowIndex))
    }
    
    return arr
};

//With 2d array
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    if (rowIndex == 0){
        return [1]
    } else if (rowIndex == 1){
        return [1,1]
    }
    let arr = [
        [1],
        [1,1]
    ]
    
    for(let i=2; i<=rowIndex; i++){
        let currentArray = [1]
        for(let j=1; j<i+1; j++){
            if(j !=i){
                currentArray.push((arr[i-1][j-1] + arr[i-1][j]))    
            } else {
                currentArray.push(1)
            }
        }
        arr.push(currentArray)
    }
    return arr[rowIndex]
};