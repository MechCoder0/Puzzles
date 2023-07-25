/*
 * Complete the 'moves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function moves(arr) {
    let count = 0;
    let leftOdd;
    let rightEven;

    while (true) {
        leftOdd = findLeftOddIndex (arr);
        rightEven = findRightEvenIndex (arr);
        // If there are no odd or even items, it is already sorted. 
        if(leftOdd == -1 || rightEven == -1) return count;

        // If there is an odd number to the left of an even number, 
        // there needs to be a swap. 
        if(leftOdd < rightEven){
            swap(arr, leftOdd, rightEven);
            count ++; 
        } else {
            return count; 
        }
    }
}

function findLeftOddIndex(arr){
    for(let i = 0; i< arr.length; i++){
        if(!isEven(arr[i])) return i; 
    }
    return -1;
}

function findRightEvenIndex(arr){
    for(let i = arr.length - 1; i >=0; i--){
        if(isEven(arr[i])) return i;
    }
    return -1;
}

/*
    Checks if the passed number is even. 
*/
function isEven(num){
    return (num % 2) == 0;
}

/**
 * Swaps the elements of the array at the 
 * specified indecies. 
 */
function swap (arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

console.log(moves([6,3,4,5,6,4,3,4]));