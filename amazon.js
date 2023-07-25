function countDecreasingRatings(ratings) {
    if(ratings.length === 0){
        return 0
    } else if (ratings.length == 1){
        return 0
    }
    let left = 0
    let right = 0
    let sum = 0
    for (let i=1; i<ratings.length; i++){
        if(ratings[i] < ratings[i-1]){
            right ++
        } else {
            if(left != right){
                sum += addSumOfDays((left - right) + 1)
            }
            left = i
            right = i
        }
    }
    sum += addSumOfDays((left - right) + 1)
    return sum
}
// const arrValues = []
function addSumOfDays(numDays){
    // if(arrValues[numDays] != null){
    //     return arrValues[numDays]
    // } else {
        
    // }
    let sum = 0
    for(let i = numDays; i>0; i--){
        sum += i
    }
    return sum
}
