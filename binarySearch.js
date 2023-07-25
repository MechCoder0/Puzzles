// Data must be sorted.
function binarySearch(array, itemToFind){
    let currentIndex;
    let currentValue;
    let left=0;
    let right= array.length-1;
    while(left <= right) {
        currentIndex = Math.floor((left + right)/2);
        currentValue = array[currentIndex];
        if(currentValue === itemToFind){
            return currentIndex;
        } else if (currentValue < itemToFind){
            left = currentIndex + 1;
        } else {
            right = currentIndex - 1;
        }
    }
    return -1;
  }

  binarySearch([1,2,3,4,5], 5);