//get elements from the HTML file
let addButton = document.getElementById("buttonCreate");
let deleteButton = document.getElementById("buttonDelete");
let tableDiv = document.getElementById("table");
let rows = document.getElementById("rows");
let columns = document.getElementById("columns");

//function to validate the input
function validateValue() {
  if (isNaN(rows.value) || isNaN(columns.value)) {
    alert("Enter a valid input");
    rows.value = "";
    columns.value = "";
  } else {
    createTable(tableDiv);
    rows.value = "";
    columns.value = "";
  }
}

//function to create the table
function createTable(element) {
  let table = document.createElement("table");
  element.appendChild(table);
  //create table rows from the value of the input
  for (let i = 0; i < rows.value; i++) {
    let tableRow = document.createElement("tr");
    //create table columns from the value of the input
    for (let j = 0; j < columns.value; j++) {
      let tableColumn = document.createElement("td");
      //create text for the columns
      let textColumn = document.createTextNode(
        `Row-${i + 1} \n Column-${j + 1}`
      );
      //add the text to the column
      tableColumn.appendChild(textColumn);
      //add the created column to the row
      tableRow.appendChild(tableColumn);
    }
    //add the created row with column to the table
    table.appendChild(tableRow);
  }
}

//event listeners to add and delete the table
addButton.addEventListener("click", validateValue);
deleteButton.addEventListener("click", function () {
  tableDiv.innerHTML = "";
  position = 1;
});
