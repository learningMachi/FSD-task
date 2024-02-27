//using anonymous funtion-

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = [];

numbers.forEach(function(number) {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
});

console.log(oddNumbers);

//output - [1,3,5,7,9]
-----------------------------------------------------------------

//using IIFE function- 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = (function() {
    return numbers.filter(function(number) {
        return number % 2 !== 0;
    });
})();

console.log(oddNumbers);

//output - [1,3,5,7,9]
-------------------------------------------------------------------

//using Arrow function-

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = (() => numbers.filter(number => number % 2 !== 0))();

console.log(oddNumbers);

//output - [1,3,5,7,9]