// Question 1: Clean the room function: given an input of
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function
// that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return:
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const util = require('util');

// Solution to Question 1
const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
//const array = [1, 2, '5', 4, 2, '90', 1, 392, '4', '1', '1'];

// sub-problems:
// -sort elements of 'type' in ascending order
const sortedSubArray = type => arr => {
  return arr.filter(e => typeof e === type).sort((a, b) => a - b);
};

//- put same elements in an array
const groupElements = sortedArray => {
  return sortedArray.reduce(
    (accumulator, currentValue, currentIndex, array) => {
      if (currentIndex === 0) {
        accumulator.push(currentValue);
      } else if (array[currentIndex - 1] === currentValue) {
        // previous element the same as current
        const lastIndexAcc = accumulator.length - 1;
        if (Array.isArray(accumulator[lastIndexAcc])) {
          // check if previous element is an array
          accumulator[lastIndexAcc].push(currentValue);
        } else {
          // pop old element create new array with duplicates
          accumulator.pop();
          accumulator.push([currentValue, currentValue]);
        }
      } else if (array[currentIndex - 1] != currentValue) {
        accumulator.push(currentValue);
      }
      return accumulator;
    },
    []
  );
};

function answer(array) {
  const sortedStringsArray = sortedSubArray('string')(array);
  const sortedNumbersArray = sortedSubArray('number')(array);
  const numbersArray = groupElements(sortedNumbersArray);
  const stringsArray = groupElements(sortedStringsArray);
  if (numbersArray.length === 0) return stringsArray;
  else if (stringsArray.length === 0) return numbersArray;
  else return [numbersArray, stringsArray];
}

console.log(util.inspect(answer(array), { showHidden: false, depth: null }));
