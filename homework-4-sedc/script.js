//assign dog and human years
const humanYears = 7;
let getType = prompt("human to dog or dog to human?");

//function to convert human years to dog years and vice versa
function getDogAge(type, human) {
  if (type === "human to dog") {
    yourAge = parseInt(prompt("Enter age"));
    result = yourAge / human;
    console.log(`Your dog is ${result} years old`);
  } else if (type === "dog to human") {
    dogYears = parseInt(prompt("Enter your dog's age"));
    result = dogYears * human;
    console.log(`Your dog in human years is ${result} years old`);
  }
}

//call function and print in console
getDogAge(getType, humanYears);
