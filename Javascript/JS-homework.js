//Function with if statement
function isAdultIn2023(yearOfBirth) {
  let age = 2023 - yearOfBirth;
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

//Function with three arguments
function calculateBoxVolume(height, width, depth) {
  let volume = height * width * depth;
  return "The volume of your box is ${volume} cubic centimeters.";
}

// Function with a object that has key&value pair

function getPersonInfo(person) {
  let firstName = person.firstName;
  let lastName = person.lastName;
  let age = person.age;
  return `${firstName} ${lastName} is ${age} years old.`;
}

let person = {
  firstName: "Sam",
  lastName: "Barrios",
  age: 45,
};
