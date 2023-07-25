/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    for(i=0; i< nums.length; i++){
        const index = i;
        if(checkForLoopAtIndex(nums, index)){
            return true;
        }
    }
    return false;
};

function checkForLoopAtIndex(arr, index){
    let currentIndex = index;
    let goingForward;
    let lastIndex = index;
    for(j=0; j <= arr.length; j++){
        let indexToCheck = arr[currentIndex] + currentIndex; 
        if (indexToCheck >= arr.length){
            currentIndex = (arr[currentIndex] + currentIndex) % arr.length;
        } else if (indexToCheck < 0){
            currentIndex = (arr[currentIndex] - currentIndex) % arr.length;
        } else {
            currentIndex = indexToCheck;
        }
        
        if(goingForward == null){
            if(arr[currentIndex] < 0){
                goingForward = false;
            } else {
                goingForward = true;
            }
        } else {
            if(goingForward){
                if(currentIndex < lastIndex){
                    return false;
                }
            } else {
                if(currentIndex > lastIndex){
                    return false;
                }
            }
        }
        
        if(currentIndex == index && j > 0){
            if(currentIndex == lastIndex){
                return false;
            } else {
                return true;
            }
        }
        lastIndex = currentIndex;
    }   
    return false;
}

// console.log(circularArrayLoop([2,-1,1,2,2])); // should be true;
// console.log(circularArrayLoop([-1,2]));
console.log(circularArrayLoop([-2,1,-1,-2,-2]));
// console.log(circularArrayLoop([2,-1,1,-2,-2]));