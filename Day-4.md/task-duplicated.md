//using anonymous function-

const array = [1, 2, 2, 3, 4, 4, 5, 5, 6];
const uniqueArray = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};
const result = uniqueArray(array);
console.log(result);

//output - [ 1, 2, 3, 4, 5, 6 ]
-------------------------------------------------------------------

//using IIFE function - 

const array = [1, 2, 2, 3, 4, 4, 5, 5, 6];
const uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})(array);

console.log(uniqueArray);

//output - [ 1, 2, 3, 4, 5, 6 ]