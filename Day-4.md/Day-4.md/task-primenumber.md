//using Anonymous function:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
const primeNumbers = numbers.filter(function(num) {
    return isPrime(num);
});
console.log(primeNumbers);

//output - [2,3,5,7]
-------------------------------------------------------------------
//using IIFE function

const primeNumbers = (function(array) {
    const isPrime = function(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    return array.filter(function(num) {
        return isPrime(num);
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log( primeNumbers);

//output - [2,3,5,7]
------------------------------------------------------------------
//using arrow function
const primeNumbers = (function(array) {
    const isPrime = function(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    return array.filter((num)=> {
        return isPrime(num);
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log( primeNumbers);
//output - [2,3,5,7]