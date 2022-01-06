//get the heading from the HTML file and change it with prompt
let heading = document.getElementById("heading");
heading.innerText = prompt("Type the name of your recipe");

//get the element from HTML file
myDiv = document.getElementById("myDiv");

//empty array
const ingridients = [];

//function to add elements in the array
function addIngridients(array) {
  let n = parseInt(prompt("How many ingridients do you need?"));
  //validate input
  if (isNaN(n)) {
    alert("Wront input");
  } else {
    for (i = 0; i < n; i++) {
      item = prompt("Enter ingridient");
      array.push(item);
    }
  }
  //call the function to print out the items
  printIngridients(ingridients, myDiv);
}

//function to print out the elements
function printIngridients(array, element) {
  let list = "<h3>Ingridient list:</h3>";
  list += `<table>`;
  let position = 0;
  for (i = 0; i < array.length; i++) {
    position++;
    list += "<tr>";
    list += `<td class="table">${position}. ${array[i]}</td>`;
    list += "</tr>";
  }
  list += "</table>";
  element.innerHTML = list;
}

//button to print the items
let button = document
  .getElementById("printIngridients")
  .addEventListener("click", function () {
    addIngridients(ingridients);
  });
