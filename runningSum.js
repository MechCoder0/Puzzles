/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    let newArray = [];
    for(i=0; i< nums.length; i++){
        sum += nums[i];
        newArray.push(sum);
    }
    return newArray;
};

console.log(runningSum([1,2,3,4]));