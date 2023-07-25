

let testData = [
    "ABB19991000Z"
];


/*
 * Complete the 'countCounterfeit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY serialNumber as parameter.
 */

function countCounterfeit(serialNumber) {
    let sum = 0;

    for (let i = 0; i < serialNumber.length; i++){
        let currentString = serialNumber[i];
        if(currentString.length < 10 || currentString > 12){
            continue;
        }
        if(!doesArrayContainsOnlyUppercase(currentString.slice(0, 3))
            || !doesArrayContainDistinct(currentString.slice(0,3))){
            continue;
        } else if(!isCurrectYear(currentString.slice(3,7))) {
            continue;
        } else if (!doesArrayContainsOnlyUppercase(currentString[currentString.length - 1])){
            continue;
        }
        let denomination = currentString.slice(7, currentString.length -1);
        if (isValidDenomination(denomination)){
            sum += parseInt(denomination);
        } else {
            continue;
        }
    }
    return sum;
}

function isValidDenomination(denomination){
    const value = parseInt(denomination);
    return !isNaN(value) && validDenoms.includes(value);
}

const validDenoms = [10,20,50,100,200,500,1000];

function isCurrectYear(string){
    const year = parseInt(string);
    return !isNaN(year) && year >=1900 && year <= 2019;
}

/**
 * Checks if all elements are distinct in the array.
 * @param {array} arr 
 */
function doesArrayContainDistinct(arr){
    const dist = [];
    for(let i = 0; i < arr.length; i ++){
        if(!dist.includes(arr[i])){
            dist.push(arr[i]);
        } else {
            return false;
        }
    }
    return true;
}

function doesArrayContainsOnlyUppercase(arr){
    for(let i = 0; i< arr.length; i++){
        if(!isUpperCase(arr[i])){
            return false;
        }
    }
    return true;
}

/**
 * Returns true if the char is an uppercase letter
 * false otherwise.
 * @param {char} char - the char to check
 */
function isUpperCase(char){
    return (isNaN(char * 1) && char === char.toUpperCase());
}

console.log(countCounterfeit(testData));
// console.log(doesArrayContainDistinct("ABB"));

