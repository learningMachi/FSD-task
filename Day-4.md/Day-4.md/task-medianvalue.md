//using anonymous function-

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
const median = function(array1, array2) {
    const combinedArray = array1.concat(array2).sort((a, b) => a - b);
    const length = combinedArray.length;
    if (length % 2 === 0) {
        const midIndex = length / 2;
        return (combinedArray[midIndex - 1] + combinedArray[midIndex]) / 2;
    } else {
        return combinedArray[Math.floor(length / 2)];
    }
};
const medianValue = median(arr1, arr2);
console.log(medianValue);

//output - 5.5
--------------------------------------------------------------------

//using IIFE function-

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
const median = (function(array1, array2) {
    const combinedArray = array1.concat(array2).sort((a, b) => a - b);
    const length = combinedArray.length;
    if (length % 2 === 0) {
        const midIndex = length / 2;
        return (combinedArray[midIndex - 1] + combinedArray[midIndex]) / 2;
    } else {
        return combinedArray[Math.floor(length / 2)];
    }
})(arr1, arr2);
console.log( median);

//output - 5.5
------------------------------------------------------------------------
//using Arrow function-

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

const findMedian = (arr1, arr2) => {
    const combined = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = combined.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (combined[mid - 1] + combined[mid]) / 2;
    } else {
        return combined[mid];
    }
};

const median = findMedian(arr1, arr2);
console.log("Median:", median);

//output - 5.5
