// using anonymous function

let array = [1, 2, 3, 4, 5];

let sum = array.reduce(function(total, currentValue) {
  return total + currentValue;
}, 0);

console.log(sum);

//output - 15
--------------------------------------------------------------

//using IIFE

let numbers = [1, 2, 3, 4, 5];
let sumOfNumbers = (function(numbersArray) {
  let total = 0;
  numbersArray.forEach(function(number) {
    total += number;
  });
  return total;
})(numbers);
console.log("Sum of all numbers:", sumOfNumbers);

//output - 15