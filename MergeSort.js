// A basic merging of 2 sorted arrays 
function mergeSortedArrays(arr1, arr2){
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++; 
        }
    }
    if(i === arr1.length){
        for(; j< arr2.length; j++){
            mergedArray.push(arr2[j]);
        }
    }
    if(j === arr2.length){
        for(; i< arr1.length; i++){
            mergedArray.push(arr1[i]);
        }
    }

    return mergedArray;
}

// Basic implementation of a merge sort
function mergeSort(arr) {
    let left = arr.slice(0, Math.floor(arr.length/2));
    let right = arr.slice(Math.floor(arr.length/2), arr.length);
    if(left.length > 1){
        left = mergeSort(left);
    }
    if(right.length > 1){
        right = mergeSort(right);
    }
    
    arr = mergeSortedArrays(left, right);
    return arr;
}

console.log(mergeSort([2,6,8,4,3,2,4,74,3,5,6,7121212]));