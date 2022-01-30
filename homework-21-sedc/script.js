//get elements from the HTML
let myTable = document.getElementById("table");
let userInputFirstName = document.getElementById("firstName");
let userInputLastName = document.getElementById("lastName");
let userInputNumber = document.getElementById("number");
let addButton = document.getElementById("addBtn");
let saveButton = document.getElementById("saveBtn");
let deleteButton = document.getElementsByClassName("deleteBtn");
let editButton = document.getElementsByClassName("editBtn");

//emtpy array to store the objects
let phoneBook = [];

//we use this variable to get the index later and edit it or delete it
let editingIndex = null;

//function to create the contacts
let createContact = (name, lastName, number, array) => {
  contact = {
    name: name,
    lastName: lastName,
    number: number,
  };
  array.push(contact);
  return contact;
};

//function to populate the inputs and get the index of the contact we are selecting
let populateInputs = (contact) => {
  userInputFirstName.value = contact.name;
  userInputLastName.value = contact.lastName;
  userInputNumber.value = contact.number;
  editingIndex = phoneBook.indexOf(contact);
};

//saving the edited contact in the array and also in the DOM
let saveContact = (index, array) => {
  array[index].name = userInputFirstName.value;
  array[index].lastName = userInputLastName.value;
  array[index].number = userInputNumber.value;
  const cells = myTable
    .querySelectorAll("tr")
    [index + 1].querySelectorAll("td");
  cells[0].innerText = userInputFirstName.value;
  cells[1].innerText = userInputLastName.value;
  cells[2].innerText = userInputNumber.value;
};

//function to create the rows with data cells
let addContactRow = (table, name, lastName, number, array) => {
  if (
    name.length < 2 ||
    lastName.length < 2 ||
    number.length < 2 ||
    isNaN(number)
  ) {
    alert("Wrong input");
  } else {
    createContact(name, lastName, number, array);
    //create new table row with data cells
    let newRow = table.insertRow(table.length);
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = lastName;
    newRow.insertCell(2).innerHTML = number;
    let cellFour = newRow.insertCell(3);

    //add the inputs to the data cells and also buttons for every data cell
    cellFour.innerHTML = `<button class="editBtn">Edit</button>`;
    cellFour.innerHTML += `<button class="deleteBtn">Delete</button>`;

    //calling the functions with adding event listeners to the buttons
    //edit button
    cellFour.querySelector(".editBtn").addEventListener("click", () => {
      populateInputs(contact);
      console.log("Edit Button was clicked");
    });
    //delete button
    cellFour.querySelector(".deleteBtn").addEventListener("click", () => {
      newRow.remove();
      const index = array.indexOf(contact);
      array.splice(index, 1);
      console.log(array);
    });
  }
};

//save button and call the save contact button
saveButton.addEventListener("click", () => {
  if (editingIndex >= 0) {
    saveContact(editingIndex, phoneBook);

    editingIndex = null;
    resetForm();
  }
  console.log(phoneBook);
});

//add button to call the function
addButton.addEventListener("click", function () {
  addContactRow(
    myTable,
    userInputFirstName.value,
    userInputLastName.value,
    userInputNumber.value,
    phoneBook
  );
  resetForm();
});

//reset the input forms
let resetForm = () => {
  userInputFirstName.value = "";
  userInputLastName.value = "";
  userInputNumber.value = "";
};
