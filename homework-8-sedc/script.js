//empty string
const stringArray = [];

//n is the number of strings you want to add in the empty array
let n = parseInt(prompt("How many strings do you want in the array?"));
let position = 1;

//checking to see if the input is a valid input and push it into the empty array
if (isNaN(n)) {
  alert("Wrong input");
} else {
  for (i = 0; i < n; i++) {
    let strings = prompt(`Enter string for position ${position}`);
    position++;
    stringArray.push(strings);
  }
}

//function to join all the elements into one big string
function concatString(array) {
  return array.join(" ");
}

//call the function
console.log(stringArray);
console.log(concatString(stringArray));
