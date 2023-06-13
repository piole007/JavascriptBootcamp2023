// Replicate .sort method
const numberArray = [2, 10, 7, 4, 9, 6, 3, 1, 5, 8];

function sortArray(numberArray) {
  const sortedArray = numberArray.slice();
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = 0; j < sortedArray.length - 1 - i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
}

const sortedArray = sortArray(numberArray);
console.log("🚀 ~ file: script.js:18 ~ sortedArray:", sortedArray);

// I used bubble sort algorithm to replicate .sort method. The function takes numberArray as an input and returns sortedArry that holds values in ascending order.
