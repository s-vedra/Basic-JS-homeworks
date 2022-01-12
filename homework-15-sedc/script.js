//get elements from the HTML file
let myButton = document.getElementById("button");
let tableDiv = document.getElementById("table");
let rows = document.getElementById("rows");
let columns = document.getElementById("columns");

//function to validate the input
function validateValue() {
  if (isNaN(rows.value) || isNaN(columns.value)) {
    alert("Enter a valid input");
  } else {
    createTable(tableDiv);
  }
}

//position for the rows
let position = 1;

//function to create the table
function createTable(element) {
  let table = document.createElement("table");
  element.appendChild(table);
  //create table rows from the value of the input
  for (let i = 0; i < rows.value; i++) {
    let tableRow = document.createElement("tr");
    //create text for the rows
    let textRow = document.createTextNode(`Row ${position} `);
    //add the text to the rows
    tableRow.appendChild(textRow);
    //create table columns from the value of the input
    for (let i = 0; i < columns.value; i++) {
      let tableColumn = document.createElement("td");
      //create text for the columns
      let textColumn = document.createTextNode(`Column ${i + 1}`);
      //add the text to the column
      tableColumn.appendChild(textColumn);
      //add the created column to the row
      tableRow.appendChild(tableColumn);
    }
    //add the created row with column to the table
    table.appendChild(tableRow);
    position++;
  }
}

//event listener on button
myButton.addEventListener("click", validateValue);
