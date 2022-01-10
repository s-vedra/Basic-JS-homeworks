//get the heading from the HTML file and change it with prompt
let heading = document.getElementById("heading");
heading.innerText = prompt("Type the name of your recipe");

//get the element from HTML file
let myDiv = document.getElementById("myDiv");

//empty array
const ingredients = [];

//function to add elements in the array
function addIngredients(array) {
  let n = parseInt(prompt("How many ingredients do you need?"));
  //validate input
  if (isNaN(n)) {
    alert("Wront input");
  } else {
    for (i = 0; i < n; i++) {
      item = prompt("Enter ingredient");
      array.push(item);
    }
  }
  //call the function to print out the items
  printIngredients(ingredients, myDiv);
}

//function to print out the elements
function printIngredients(array, element) {
  let list = "<h3>Ingredient list:</h3>";
  let position = 1;
  for (i = 0; i < array.length; i++) {
    list += `<div class = "containerTwo">`;
    list += `<p class="table">${position}. ${array[i]}</p>`;
    list += `<label for="number" id ="text">Quantity</label>
    <input type="number" value="1" id=""quantity>`;
    list += "</div>";
    position++;
  }
  element.innerHTML = list;
}

//button to print the items
let button = document
  .getElementById("printIngredients")
  .addEventListener("click", function () {
    addIngredients(ingredients);
  });
