//empty array
let numberArray = [];

//validate number, if its an integer push into array, if not alert a wrong input
function validateNumber(array) {
  for (i = 0; i < 5; i++) {
    let n = parseInt(prompt("Enter number"));
    if (!isNaN(n)) {
      array.push(n);
    } else {
      alert("Wrong input");
      return [];
    }
  }
  //call the function
  console.log(`The sum is: ${sumFiveNumbers(numberArray)}`);
}
//function to return the sum of the 5 random numbers
function sumFiveNumbers(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//call the function
console.log(validateNumber(numberArray));
console.log(numberArray);
