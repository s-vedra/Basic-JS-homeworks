//get the inputs from HTML
let toDoInput = document.getElementById("toDoInput");
let addButton = document.getElementById("addBtn");
let listUl = document.getElementById("list");

//empty array
let toDoList = [];

//function to create and push the objects into the array
let createObject = (name, isCompleted, array) => {
  let list = {
    name: name,
    isCompleted: isCompleted,
  };
  array.push(list);
  console.log(array);
};

//function to create the unordered list
let unorderedList = (element, name) => {
  if (name.length < 2) {
    alert("Wrong input");
  } else {
    let li = document.createElement("li");
    let text = document.createTextNode(`${name}`);
    let span = document.createElement("span");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkBox";
    li.appendChild(checkbox);
    span.appendChild(text);
    li.appendChild(span);

    //button to call the function to create the object with its properties
    checkbox.addEventListener("click", function () {
      createObject(name, true, toDoList);
    });

    element.appendChild(li);
    resetList();
  }
};

//button to call the function
addButton.addEventListener("click", function () {
  unorderedList(listUl, toDoInput.value);
});

//clear the input
let resetList = () => {
  toDoInput.value = "";
};
