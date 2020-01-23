// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added
// together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const target = 24;

// [1, 1, 2, 4, 5, 6, 7]
const sortedArray = arr => arr.sort;

const binarySearch = (array, target) => {
  while (start <= end) {
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2);

    if (target === array[mid]) return mid;
    else if (target < mid) {
      end = mid - 1;
    } else start = mid + 1;
  }
  return false;
};

let test = binarySearch(array, 5);
console.log(test);
