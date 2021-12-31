//empty array
let numberArray = [];

//validate number, if its an integer push into array, if not alert a wrong input
function validateNumber(array) {
  for (i = 0; i < 5; i++) {
    let n = parseInt(prompt("Enter number"));
    if (isNaN(n)) {
      alert("Wrong input");
    } else {
      array.push(n);
    }
  }
}
//function to return the sum of the 5 random numbers
function sumFiveNumbers(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

//call the function
console.log(validateNumber(numberArray));
console.log(sumFiveNumbers(numberArray));
console.log(numberArray);
