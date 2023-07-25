let swap = require("../Swap").swap;

function selectionSort (arr){
    for(let i = 0; i <arr.length; i++){
        let smallest  = i;
        for(let j = i+1; j <arr.length; j++){
            if(arr[j] < arr[smallest]) smallest = j;
        }
        if(smallest !==i) swap(arr, smallest, i);
    }
    return arr;
}

console.log(selectionSort([3,7,4,2,4, -2]))