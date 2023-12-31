/** product: calculate the product of an array of numbers. */
let nums = [1, 2, 3, 4]

function product(nums) {
  if(nums.length === 0) {
    return 1; 
  }
  console.log("nums[0] * product(nums.slice(1))", nums[0] * product(nums.slice(1)))
  return nums[0] * product(nums.slice(1))
}

// let result = product(nums);
// console.log("result:", result)

/** longest: return the length of the longest word in an array of words. */

let words = ["a", "adam", "apple", "apricot", "ape"]

function longest(words) {
    // If the array is empty, return 0.
    if (words.length === 0) {
      return 0;
    }
  
    // Get the length of the current word.
    const word = words[0].length;
    console.log("word:", word)
  
    // Recursively find the length of the longest word in the remaining words.
    // Get rid of the first word in the array. 
    const longestWord = longest(words.slice(1));
    console.log("longestWord:", longestWord)
  
    // Return the longer of the two lengths.
    return Math.max(word, longestWord);
}

// let result = longest(words); 
// console.log("result:", result)

/** everyOther: return a string with every other letter. */

// let str = "abcdefghij";

function everyOther(str) {
  if(str.length === 0) {
    return "";
  } 

  let firstLetter = str[0]
  console.log(firstLetter)

  const letters = everyOther(str.slice(2));
  console.log("letters:", letters)

   return firstLetter + letters
}

// let result =  everyOther(str)
// console.log("result:", result)

/** isPalindrome: checks whether a string is a palindrome or not. */

// let str = "hannah";
// let str = "notPalindrome"; 
// let str = "tacocat"
// this seems to be handing even number letters but not odd number letters

function isPalindrome(str) {
  // set ending point 
  if(str.length === 0 || str.length === 1) {
    return true;
  }

  let firstLetter = str[0];
  console.log("firstLetter:", firstLetter)
  let lastLetter = str[str.length - 1]; 
  console.log("lastLetter:", lastLetter)

  if(firstLetter === lastLetter) {
    console.log("firstLetter === lastLetter")
    return isPalindrome(str.substring(1, str.length - 1));
  }
  if(firstLetter !== lastLetter) return false; 
}

// let result =  isPalindrome(str)
// console.log("result:", result)

/** findIndex: return the index of val in arr (or -1 if val is not present). */

// let arr = [1, 2, 3, 4, 5]
// let val = 4

// let arr = ["duck", "cat", "pony", "cat"];
// let val = "george";

function findIndex(arr, val, count = 0) {
  if(arr.length === 0 || count > arr.length) return -1; 
  if(arr[count] === val) return count; 

  count ++; 
  return findIndex(arr, val, count)
}

// let result =  findIndex(arr, val)
// console.log("result:", result)

/** revString: return a copy of a string, but in reverse. */

// let str = "abcedefg"

function revString(str) {
  if(str.length === 0) return "";
  
  let lastChar = str[str.length - 1]; 
  let chars = revString(str.substring(0, str.length - 1));

  return lastChar + chars;
}

// let result =  revString(str)
// console.log("result:", result)

/** gatherStrings: given an object, return an array of all of the string values. */

let obj = {
  name: "Whiskey",
  age: 5,
  favFood: "popcorn",
  color: "black",
  barks: false, 
  nestObj: {object1: "object1String"}
};

function gatherStrings(obj) {
  let strings = [];
// ! make a note that this is how you retain a value in recursions. Must have a for loop to do so. 

  for(let key in obj) {
    if(typeof obj[key] === "string") strings.push(obj[key]); 
    if(typeof obj[key] === "object") strings.push(...gatherStrings(obj[key]))
  // ! must include the rest of the strings as well so need the ...
}

return strings;
}

// let result =  gatherStrings(obj)
// console.log("result:", result)

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */


let arr = [1, 2, 3, 4, 5]
let val = 0

function binarySearch(arr, val, start = 0, end = arr.length - 1) {

  if(arr.length === 0 || start > end) {
    return -1; 
  }

  let midIdx = Math.floor((start + end) / 2); 

  if(arr[midIdx] === val) { 
    return midIdx; 

  } else if(val < arr[midIdx]) {
    return binarySearch(arr, val, 0, midIdx - 1); 

  }  else {
    return binarySearch(arr, val, midIdx + 1, end)
  }
}


let result =  binarySearch(arr, val)
console.log("result:", result)

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
