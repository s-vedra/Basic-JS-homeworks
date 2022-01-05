//get the divs we need from the HTML file
let myFirstDiv = document.getElementById("firstDiv");
let mySecondDiv = document.getElementById("secondDiv");

//input the length of the array and push the randomly generated numbers in the same array
n = parseInt(prompt("Enter a number"));
let numberArray = [];
for (i = 0; i < n; i++) {
  numberArray.push(Math.floor(Math.random() * 100));
}

//function to sum the numbers
function sumNumbers(array) {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//function to print out the numbers in the array in an unordered list
function printInList(array, element) {
  let firstText = "<ul>";
  for (i = 0; i < array.length; i++) {
    firstText += `<li>${array[i]}</li>`;
  }
  firstText += "</ul>";
  firstText += `The sum is ${sumNumbers(array)}`;
  element.innerHTML = firstText;
}

//function to print out the mathematical equation
function printNumbers(array, element) {
  let secondText = `The Math equation: `;
  for (i = 0; i < array.length - 1; i++) {
    secondText += `${array[i]} + `;
    if (array[i] === array[array.length - 2]) {
      secondText += array[array.length - 1];
    }
  }
  secondText += ` = ${sumNumbers(array)}`;
  element.innerHTML = secondText;
}

//validating if the input is a string or an integer
if (isNaN(n)) {
  alert("Wrong input");
  mySecondDiv.innerHTML = "Whoops, you need to add a number not a string!";
  mySecondDiv.style.color = "red";
} else {
  printInList(numberArray, myFirstDiv);
  printNumbers(numberArray, mySecondDiv);
}
