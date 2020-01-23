// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added
// together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
const util = require('util');

const array = [1, 2, 4, 59, 39, 31, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// return sorted array up to value <= target
const sortedSubArray = (array, target) => {
  return array
    .sort((a, b) => a - b)
    .slice(
      0,
      array.findIndex(element => element > target)
    );
  // find index of element that is greater than target value and slice
};

// return pair of values that when added = target
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
  const subArray = sortedSubArray(array, target);
  return findPairs(subArray, target);
};

console.log(util.inspect(answer(array, 49), { maxArrayLength: null }));
