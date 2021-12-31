//asks how many numbers you want in the empty array
let numbers = [];
let n = parseInt(prompt("How many numbers do you want in the array?"));
if (isNaN(n)) {
  alert("I said numbers");
}
//pushes the amount of n numbers you typed in the prompt and also add some hardcoded strings
for (i = 0; i < n; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}
numbers.push("random", "strings", "in", "the", "array");
//function to get max num
function maxNumber(array) {
  let maxNumber = array[0];
  for (i = 0; i < array.length; i++) {
    if (maxNumber < array[i]) {
      maxNumber = array[i];
    } else if (isNaN(array[i])) {
      continue;
    }
  }
  return maxNumber;
}
//function to get min num
function minNumber(array) {
  let minNumber = array[0];
  for (i = 0; i < array.length; i++) {
    if (minNumber > array[i]) {
      minNumber = array[i];
    } else if (isNaN(array[i])) {
      continue;
    }
  }
  return minNumber;
}
//function to get the sum of the min and max num
function sumMinMax(array) {
  let sum = maxNumber(array) + minNumber(array);
  return sum;
}
//call each function
console.log(numbers);
console.log(maxNumber(numbers));
console.log(minNumber(numbers));
console.log(sumMinMax(numbers));
