var search = function(nums, target) {

    function findNum(start, end) {
        if(start > end){
            return -1
        }
        let j = end-start
        let i = Math.ceil(j/2) + start
        if (nums[i] == target){
            return i
        }
        
        if (nums[i] > target) {
            return findNum(start, i - 1)
        }
        
        if (nums[i] < target) {
            return findNum(i+1, end) 
        }
    }
    
    return findNum(0, nums.length - 1)
};

console.log(search([-1,0,3,5,9,12], 10))