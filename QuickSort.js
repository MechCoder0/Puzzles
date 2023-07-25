let swap = require("../Swap").swap;

function pivotArray(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let currentPivotIndex = start;
    for(let i = start + 1; i <= end; i ++){
        if(pivot > arr[i]){
            currentPivotIndex ++;
            swap(arr, i, currentPivotIndex);
        }
    }
    swap(arr, start, currentPivotIndex);
    return currentPivotIndex;
}

function quickSort(array, left=0, right =array.length -1){
    if(left < right){
        let pivot = pivotArray(array, left, right);
        // left side
        quickSort(array, left, pivot-1);
        // right side
        quickSort(array, pivot+1, right);
    }
    return array;
}

console.log(quickSort([9,5,8,2,1,3]));