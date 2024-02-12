// using anonymous function

const rotateArray = function(arr, k) {
    const rotation = k % arr.length;
    const rotateAmount = rotation < 0 ? rotation + arr.length : rotation;
    const rotatedArray = arr.slice(rotateAmount).concat(arr.slice(0, rotateAmount));
    return rotatedArray;
};
const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(array, k);
console.log("Rotated Array:", rotatedArray);

//output - Rotated Array: [ 3, 4, 5, 1, 2 ]

-------------------------------------------------------------------

//using IIFE 

const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = (function(arr, k) {
    const rotation = k % arr.length;
    const rotateAmount = rotation < 0 ? rotation + arr.length : rotation;
    const rotatedArray = arr.slice(rotateAmount).concat(arr.slice(0, rotateAmount));
    return rotatedArray;
})(array, k);
console.log("Rotated Array:", rotatedArray);

//output - Rotated Array: [ 3, 4, 5, 1, 2 ]