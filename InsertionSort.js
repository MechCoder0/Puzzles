let swap = require("../Swap").swap;

//Not quite an insertion algorithm because of all the swaps. 
function insertionSort(arr){
    for (let i = 1;i < arr.length; i++){
        let current = i;
        for (let j = i-1; j >=0; j--){
            if(arr[current] < arr[j]) {
                swap(arr, j, current);
                current = j; 
            } else break; 
        }
    }
    return arr;
}

console.log(insertionSort([800,7,-4,2,8,0,45,44,21]));