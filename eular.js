
// Find sum of of all numbers under 100 that are divisible by 3 or 5
function findSum(){
    let sum = 0
    for(let i=3; i<1000; i++){
        if(i%3 === 0 || i%5 === 0){
            sum += i
        }
    }
    console.log(sum)
}

//Find sum of even fibonacii under 4,000,000
function findFibSum(){
    let sum = 2
    let arr = [1,2]
    let i = 0
    let j = 1
    let num = 0
    while (num < 4000000) {
        num = arr[i] + arr[j]
        arr.push(num)
        if(num % 2 === 0){
            sum += num
        }
        i++
        j++
    }
    console.log(sum)
}

// Find largest prime factor of 600851475143 
function findPrime(){
    for(let i = 600851475141; i>1; i -= 2){
        if(isPrime(i)){
            console.log(i)
            break
        }
    }
}
function isPrime(num){
    if ( num % 5 == 0) {
        return false
    }
    for(let i= num-1; i>1; i--){
        if (num%i === 0){
            return false
        }
    }
    return true
}
findPrime()