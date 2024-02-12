//using annonymous function-

const words = ["level", "radar", "hello", "world", "madam", "noon"];
const isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
};
const palindromes = words.filter(function(word) {
    return isPalindrome(word);
});
console.log(palindromes);

//output - [ 'level', 'radar', 'madam', 'noon' ]
--------------------------------------------------------------------//using IIFE function - 

const words = ["level", "radar", "hello", "world", "madam", "noon"];
const palindromes = (function(array) {
    const isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
    return array.filter(function(word) {
        return isPalindrome(word);
    });
})(words);
console.log(palindromes);

//output - [ 'level', 'radar', 'madam', 'noon' ]