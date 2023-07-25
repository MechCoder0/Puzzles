function getDigit(number, index){
    let strNum = number.toString();
    let numToReturn =  parseInt(strNum[strNum.length - index -1]);
    if (Number.isNaN(numToReturn)){
        numToReturn = 0;
    }
    return numToReturn;
}

function digitCount (num){
    return num.toString().length;
}

function mostDigits(arr){
    let max = 0 ;
    for(let i = 0; i < arr.length; i++){
        let numDigits = digitCount(arr[i]);
        if(numDigits>max) max = numDigits;
    }
    return max;
}

/**
 * Sorts an array of integers by looking at how many digits the
 * largest number has, looping that many times, and 
 * @param {the array} arr 
 */
function radixSort(arr){
    let maxDigits = mostDigits(arr);
    for(let k = 0; k < maxDigits; k++){
        let buckets = get2DArray(10);
        for (let i=0; i <arr.length; i++){
            // Put the value at i into the correct bucket. 
            buckets[getDigit(nums[i], k)].push(arr[i]);
        }

        arr = [].concat(...buckets); 
    }
    return arr;
}

/**
 * Makes a 2 dimentional array of length 'length'
 * @param length 
 */
function get2DArray(length){
    let arr = [];
    for(i=0; i<length; i++){
        arr.push([]);
    }
    return arr;
}