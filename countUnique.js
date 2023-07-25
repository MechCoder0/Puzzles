function countUnique (array){
    let uniqueVals = [];
    for(var val of array){
        if(!(uniqueVals.includes(val))){
            uniqueVals.push(val);
        }
    }
    return uniqueVals.length;
}

console.log(countUnique([1,1,1,1,2]) === 2);
countUnique([]) === 0;