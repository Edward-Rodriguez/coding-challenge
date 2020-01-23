// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added
// together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
const util = require('util');

const array = [1, 2, 4, 59, 39, 31, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const target = 24;

// [1, 1, 2, 4, 5, 6, 7]
const sortedArray = array.sort((a, b) => a - b);
console.log(util.inspect(sortedArray, { maxArrayLength: null }));

const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === array[mid]) return mid;
    else if (target < array[mid]) {
      end = mid - 1;
    } else start = mid + 1;
  }
  return false;
};

let test = binarySearch(sortedArray, 5);

const findPairs = (array, targetValue) => {
  let i = 0;
  let length = array.length;
  for (i = length - 1; i >= 0; i++) {
    for (j = 0; j < i; j++) {
      let temp = array[i] + array[j];
      if (array[i] + array[j] === targetValue) return [array[i], array[j]];
    }
  }
  return false;
};

const answer = (array, target) => {
  return array
    .sort((a, b) => a - b)
    .slice(0, array.findIndex(element => element > 1) - 1).
  // find index of element that is greater than target value and slice
};
console.log(findPairs(sortedArray, 90));
