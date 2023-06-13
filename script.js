const numberArray = [1, 2, 3, 4, 5, 6];

// replicate .map method

function doubleNumber(number) {
  return number * 2;
}

function replicateMap(numberArray, callback) {
  let mappedArray = [];

  for (let i = 0; i < numberArray.length; i++) {
    mappedArray.push(callback(numberArray[i], i, numberArray));
  }
  return mappedArray;
}
const doubledArray = replicateMap(numberArray, doubleNumber);
console.log("🚀 ~ file: script.js:18 ~ doubledArray:", doubledArray);

//Replicate .filter method

function isEven(number) {
  return number % 2 === 0;
}

function replicateFilter(numberArray, isEven) {
  let filteredArray = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (isEven(numberArray[i], i, numberArray)) {
      filteredArray.push(numberArray[i]);
    }
  }
  return filteredArray;
}
const evenNumbers = replicateFilter(numberArray, isEven);
console.log("🚀 ~ file: script.js:36 ~ evenNumbers:", evenNumbers);

// Replicating .every method

function isRound(number) {
  return Number.isInteger(number);
}
function replicateEvery(numberArray, isRound) {
  for (let i = 0; i < numberArray.length; i++) {
    if (!isRound(numberArray[i], i, numberArray)) {
      return false;
    }
  }
  return true;
}
const allRoundNumbers = replicateEvery(numberArray, isRound);
console.log("🚀 ~ file: script.js:53 ~ allRoundNumbers:", allRoundNumbers);

// Replicate .some method
function isEven(number) {
  return number % 2 === 0;
}
function replicateSome(numberArray, isEven) {
  for (let i = 0; i < numberArray.length; i++) {
    if (isEven(numberArray[i], i, numberArray)) {
      return true;
    }
  }
  return false;
}
const hasEvenNumber = replicateSome(numberArray, isEven);
console.log("🚀 ~ file: script.js:67 ~ hasEvenNumber:", hasEvenNumber);
